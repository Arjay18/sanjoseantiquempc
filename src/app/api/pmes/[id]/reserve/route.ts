import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: sessionId } = await params;

    // Check if session exists and get current registration count
    const session = await prisma.pMESSession.findUnique({
      where: { id: sessionId }
    });

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Check if session is active
    if (session.status !== 'active') {
      return NextResponse.json(
        { error: 'Session is not available for registration' },
        { status: 400 }
      );
    }

    // Check if capacity is exceeded
    if (session.registered >= session.capacity) {
      return NextResponse.json(
        { error: 'Session is fully booked' },
        { status: 400 }
      );
    }

    // Reserve a seat by incrementing registered count
    const updatedSession = await prisma.pMESSession.update({
      where: { id: sessionId },
      data: {
        registered: {
          increment: 1
        }
      }
    });

    return NextResponse.json({
      message: 'Seat reserved successfully',
      session: updatedSession
    });

  } catch (error) {
    console.error('Error reserving seat:', error);
    return NextResponse.json(
      { error: 'Failed to reserve seat' },
      { status: 500 }
    );
  }
}
