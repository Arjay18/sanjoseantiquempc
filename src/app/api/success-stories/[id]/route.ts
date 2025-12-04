import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const paramsData = await params;
    const successStory = await prisma.successStory.findUnique({
      where: { id: paramsData.id },
    });

    if (!successStory) {
      return NextResponse.json(
        { error: 'Success story not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(successStory);
  } catch (error) {
    console.error('Error fetching success story:', error);
    return NextResponse.json(
      { error: 'Failed to fetch success story' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, memberName, category, videoFile, description, status } = body;

    const successStory = await prisma.successStory.update({
      where: { id: params.id },
      data: {
        title,
        memberName,
        category,
        videoFile,
        description,
        status,
      },
    });

    return NextResponse.json(successStory);
  } catch (error) {
    console.error('Error updating success story:', error);
    return NextResponse.json(
      { error: 'Failed to update success story' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const paramsData = await params;
    await prisma.successStory.delete({
      where: { id: paramsData.id },
    });

    return NextResponse.json({ message: 'Success story deleted successfully' });
  } catch (error) {
    console.error('Error deleting success story:', error);
    return NextResponse.json(
      { error: 'Failed to delete success story' },
      { status: 500 }
    );
  }
}
