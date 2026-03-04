import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest, ctx: any) {
  try {
    // Get user session
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = ctx.params as { id: string };
    const email = session.user.email;
    const name = session.user.name;

    // Find the application
    const application = await prisma.loanApplication.findUnique({
      where: { id },
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // Verify that the user owns this application (by email or name)
    if (application.email !== email && application.name !== name) {
      return NextResponse.json({ error: 'Forbidden - You can only delete your own applications' }, { status: 403 });
    }

    // Delete the application
    await prisma.loanApplication.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: 'Application deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting loan application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
