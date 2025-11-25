import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const sessions = await prisma.PMESSession.findMany({
      orderBy: { date: 'asc' }
    });

    return NextResponse.json(sessions);
  } catch (error) {
    console.error('Error fetching PMES sessions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch PMES sessions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { branch, date, time, capacity, zoomMeetingId, zoomPassword, zoomJoinUrl, zoomStartUrl } = body;

    const session = await prisma.PMESSession.create({
      data: {
        branch,
        date: new Date(date),
        time,
        capacity: parseInt(capacity),
        zoomMeetingId,
        zoomPassword,
        zoomJoinUrl,
        zoomStartUrl
      }
    });

    return NextResponse.json(session, { status: 201 });
  } catch (error) {
    console.error('Error creating PMES session:', error);
    return NextResponse.json(
      { error: 'Failed to create PMES session' },
      { status: 500 }
    );
  }
}
