import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Fetch all activities from different models
    const [newsPosts, successStories, pmesSessions, memberRegistrations, loanApplications] = await Promise.all([
      prisma.newsPost.findMany({
        select: { id: true, title: true, createdAt: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.successStory.findMany({
        select: { id: true, title: true, createdAt: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.pMESSession.findMany({
        select: { id: true, branch: true, date: true, createdAt: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.memberRegistration.findMany({
        select: { id: true, name: true, branch: true, createdAt: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.loanApplication.findMany({
        select: { id: true, name: true, loanType: true, createdAt: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' }
      })
    ]);

    // Combine and format activities
    const activities = [
      ...newsPosts.map(post => ({
        id: post.id,
        type: 'news' as const,
        action: 'Updated news article',
        title: post.title,
        timestamp: post.updatedAt.toISOString(),
        date: post.updatedAt
      })),
      ...successStories.map(story => ({
        id: story.id,
        type: 'story' as const,
        action: 'Updated success story',
        title: story.title,
        timestamp: story.updatedAt.toISOString(),
        date: story.updatedAt
      })),
      ...pmesSessions.map(session => ({
        id: session.id,
        type: 'pmes' as const,
        action: 'Updated PMES session',
        title: `${session.branch} - ${session.date.toDateString()}`,
        timestamp: session.updatedAt.toISOString(),
        date: session.updatedAt
      })),
      ...memberRegistrations.map(registration => ({
        id: registration.id,
        type: 'registration' as const,
        action: 'New member registration',
        title: `${registration.name} (${registration.branch})`,
        timestamp: registration.createdAt.toISOString(),
        date: registration.createdAt
      })),
      ...loanApplications.map(application => ({
        id: application.id,
        type: 'application' as const,
        action: 'Loan application submitted',
        title: `${application.name} - ${application.loanType}`,
        timestamp: application.createdAt.toISOString(),
        date: application.createdAt
      }))
    ];

    // Sort by date descending
    activities.sort((a, b) => b.date.getTime() - a.date.getTime());

    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}
