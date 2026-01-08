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

    const existing = await prisma.loanApplication.findUnique({ where: { id } });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (session.user.role === 'branch' && (session.user as any).branch !== existing.branch) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const updated = await prisma.loanApplication.update({
      where: { id },
      data: {
        status: body.status,
        notes: body.notes,
        reviewedBy: session.user?.name || session.user?.email || null,
        reviewedAt: new Date(),
      },
    });

    // Notifications: only when changing from pending to approved/rejected
    if (existing.status === 'pending' && (body.status === 'approved' || body.status === 'rejected')) {
      try {
        await sendLoanStatusNotifications({
          id: updated.id,
          name: updated.name,
          pbNo: updated.pbNo,
          contactNo: updated.contactNo,
          loanType: updated.loanType,
          loanAmount: updated.loanAmount,
          status: updated.status as 'pending' | 'approved' | 'rejected',
          reviewedBy: updated.reviewedBy || undefined,
          reviewedAt: updated.reviewedAt || undefined,
          notes: updated.notes || undefined,
        });
      } catch (notificationError) {
        console.error('Error sending notifications:', notificationError);
      }
    }

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
