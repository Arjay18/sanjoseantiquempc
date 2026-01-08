import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = params;

    const application = await prisma.loanApplication.findUnique({ where: { id } });
    if (!application) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Branch users can only view applications for their branch
    if (session.user.role === 'branch' && (session.user as any).branch !== application.branch) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = params;
    const body = await request.json();
    const { status, notes } = body;

    // Only admin or branch users can update; branch users must match branch
    const existing = await prisma.loanApplication.findUnique({ where: { id } });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (session.user.role === 'branch' && (session.user as any).branch !== existing.branch) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const updated = await prisma.loanApplication.update({
      where: { id },
      data: {
        status,
        notes,
        reviewedBy: session.user?.name || session.user?.email || null,
        reviewedAt: new Date(),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = params;

    const existing = await prisma.loanApplication.findUnique({ where: { id } });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (session.user.role === 'branch' && (session.user as any).branch !== existing.branch) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await prisma.loanApplication.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { sendLoanStatusNotifications } from '@/lib/notifications';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const application = await prisma.loanApplication.findUnique({
      where: { id },
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching loan application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id } = await params;

    // Get the current application before updating
    const currentApplication = await prisma.loanApplication.findUnique({
      where: { id },
    });

    if (!currentApplication) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    const application = await prisma.loanApplication.update({
      where: { id },
      data: {
        status: body.status,
        reviewedBy: session.user?.name || 'Admin',
        reviewedAt: new Date(),
        notes: body.notes,
      },
    });

    // Send notifications if status changed from pending to approved/rejected
    if (currentApplication.status === 'pending' && (body.status === 'approved' || body.status === 'rejected')) {
      try {
        const notificationsSent = await sendLoanStatusNotifications({
          id: application.id,
          name: application.name,
          pbNo: application.pbNo,
          contactNo: application.contactNo,
          loanType: application.loanType,
          loanAmount: application.loanAmount,
          status: application.status as 'pending' | 'approved' | 'rejected',
          reviewedBy: application.reviewedBy || undefined,
          reviewedAt: application.reviewedAt || undefined,
          notes: application.notes || undefined,
        });

        console.log(`Notifications sent for application ${application.id}:`, notificationsSent);
      } catch (notificationError) {
        console.error('Error sending notifications:', notificationError);
        // Don't fail the request if notifications fail
      }
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error updating loan application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
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

    const { id } = await params;

    await prisma.loanApplication.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Error deleting loan application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
