import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Get statistics from database
    const [
      totalNews,
      totalSuccessStories,
      totalMembers,
      totalPMESSessions,
      activePMESSessions,
      totalRegistrations,
      approvedRegistrations,
      totalLoanApplications,
      pendingLoanApplications,
      approvedLoanApplications,
    ] = await Promise.all([
      prisma.newsPost.count({ where: { status: 'published' } }),
      prisma.successStory.count({ where: { status: 'published' } }),
      prisma.memberRegistration.count(),
      prisma.pMESSession.count(),
      prisma.pMESSession.count({ where: { status: 'active' } }),
      prisma.memberRegistration.count(),
      prisma.memberRegistration.count({ where: { status: 'approved' } }),
      prisma.loanApplication.count(),
      prisma.loanApplication.count({ where: { status: 'pending' } }),
      prisma.loanApplication.count({ where: { status: 'approved' } }),
    ]);

    // Calculate success rate
    const successRate = totalRegistrations > 0 ? Math.round((approvedRegistrations / totalRegistrations) * 100) : 0;

    // Get recent activity
    const recentNews = await prisma.newsPost.findMany({
      take: 2,
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, createdAt: true }
    });

    const recentStories = await prisma.successStory.findMany({
      take: 2,
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, createdAt: true }
    });

    const recentRegistrations = await prisma.memberRegistration.findMany({
      take: 2,
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, createdAt: true }
    });

    const recentApplications = await prisma.loanApplication.findMany({
      take: 2,
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, loanAmount: true, createdAt: true }
    });

    // Combine and sort recent activity
    const recentActivity = [
      ...recentNews.map((item: any) => ({
        id: item.id,
        type: 'news' as const,
        action: 'Published',
        title: item.title,
        timestamp: getTimeAgo(item.createdAt)
      })),
      ...recentStories.map((item: any) => ({
        id: item.id,
        type: 'story' as const,
        action: 'Added',
        title: item.title,
        timestamp: getTimeAgo(item.createdAt)
      })),
      ...recentRegistrations.map((item: any) => ({
        id: item.id,
        type: 'user' as const,
        action: 'Registered',
        title: item.name,
        timestamp: getTimeAgo(item.createdAt)
      })),
      ...recentApplications.map((item: any) => ({
        id: item.id,
        type: 'application' as const,
        action: 'Applied for loan',
        title: `${item.name} - ₱${item.loanAmount.toLocaleString()}`,
        timestamp: getTimeAgo(item.createdAt)
      }))
    ].sort((a, b) => {
      // Simple sort by timestamp (this could be improved)
      const timeA = a.timestamp.includes('hour') ? 1 : a.timestamp.includes('day') ? 24 : 168;
      const timeB = b.timestamp.includes('hour') ? 1 : b.timestamp.includes('day') ? 24 : 168;
      return timeA - timeB;
    }).slice(0, 6);

    const stats = {
      totalNews,
      totalSuccessStories,
      totalMembers,
      totalPMESSessions,
      activePMESSessions,
      totalRegistrations,
      totalLoanApplications,
      pendingLoanApplications,
      approvedLoanApplications,
      successRate,
      recentActivity
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 1) return 'Less than an hour ago';
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
}
