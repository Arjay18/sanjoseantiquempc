import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || session.user.role !== 'branch') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id, amount } = await req.json();
  if (!id || !amount || isNaN(Number(amount))) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  // For demo: just log payment, in real app, create a Payment model and link
  await prisma.loanApplication.update({
    where: { id },
    data: { notes: `Payment posted: ₱${amount} on ${new Date().toISOString()}` },
  });
  return NextResponse.json({ success: true });
}
