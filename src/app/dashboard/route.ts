import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// You should have your authOptions defined in a file like this
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    // For this feature, we'll define a "notification" as a loan application
    // that has been updated recently. A more advanced implementation could use a dedicated Notification model.
    const applications = await prisma.loanApplication.findMany({
      where: {
        email: session.user.email,
        // A real implementation would use a dedicated `isRead` flag.
        // For now, we'll just fetch the most recently updated ones.
        updatedAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 30)), // last 30 days
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 5, // Limit to 5 recent notifications
      select: {
        id: true,
        loanType: true,
        status: true,
        updatedAt: true,
        pdfFile: true,
      }
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}