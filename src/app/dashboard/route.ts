import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

    // For this feature, we'll define a "notification" as a loan application
    // that has been updated recently. A more advanced implementation could use a dedicated Notification model.
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const applications = await prisma.loanApplication.findMany({
      where: {
        email: session.user.email,
        updatedAt: {
          gte: thirtyDaysAgo,
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