import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { id } = await params;
    const { branch, date, time, capacity, status, zoomMeetingId, zoomPassword, zoomJoinUrl, zoomStartUrl } = body;

    const session = await prisma.pMESSession.update({
      where: { id },
      data: {
        branch,
        date: new Date(date),
        time,
        capacity: parseInt(capacity),
        status,
        zoomMeetingId,
        zoomPassword,
        zoomJoinUrl,
        zoomStartUrl
      }
    });

    return NextResponse.json(session);
  } catch (error) {
    console.error('Error updating PMES session:', error);
    return NextResponse.json(
      { error: 'Failed to update PMES session' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.pMESSession.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Session deleted successfully' });
  } catch (error) {
    console.error('Error deleting PMES session:', error);
    return NextResponse.json(
      { error: 'Failed to delete PMES session' },
      { status: 500 }
    );
  }
}
