import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const where = status ? { status } : {};

    const successStories = await prisma.successStory.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(successStories);
  } catch (error) {
    console.error('Error fetching success stories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch success stories' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, memberName, category, videoFile, description, status } = body;

    const successStory = await prisma.successStory.create({
      data: {
        title,
        memberName,
        category,
        videoFile,
        description,
        status: status || 'draft',
      },
    });

    return NextResponse.json(successStory, { status: 201 });
  } catch (error) {
    console.error('Error creating success story:', error);
    return NextResponse.json(
      { error: 'Failed to create success story' },
      { status: 500 }
    );
  }
}
