import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { sendEmail } from '@/lib/notify';
import { logAudit } from '@/lib/audit';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || session.user.role !== 'branch') {
    return NextResponse.json([], { status: 401 });
  }
  const branch = (session.user as any).branch || '';
  const applications = await prisma.loanApplication.findMany({
    where: { branch },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(applications);
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || session.user.role !== 'branch') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id, status } = await req.json();
  if (!id || !['approved', 'rejected'].includes(status)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const application = await prisma.loanApplication.update({
    where: { id },
    data: { status },
  });

  // Audit log
  await logAudit({
    userId: session.user.id || null,
    username: session.user.name || null,
    action: `loan_${status}`,
    target: application.id,
    details: `Loan application ${status} by branch ${session.user.branch}`,
    ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '',
  });

  // Send email notification if email exists
  if (application.email) {
    await sendEmail({
      to: application.email,
      subject: `Loan Application ${status === 'approved' ? 'Approved' : 'Rejected'}`,
      text: `Dear ${application.name || 'Member'},\n\nYour loan application has been ${status}.\n\nThank you.`,
    });
  }
  return NextResponse.json({ success: true });
}
