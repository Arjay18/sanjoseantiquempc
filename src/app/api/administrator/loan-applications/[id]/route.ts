import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { sendLoanStatusNotifications } from '@/lib/notifications';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, ctx: any) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = ctx.params as { id: string };
    const application = await prisma.loanApplication.findUnique({ where: { id } });
    if (!application) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Check if branch matches (case-insensitive)
    if (session.user.role === 'branch') {
      const userBranch = (session.user as any)?.branch?.toLowerCase();
      const appBranch = application.branch?.toLowerCase();
      if (userBranch !== appBranch) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, ctx: any) {
  try {
    const session = await getServerSession(authOptions);
    
    // Debug: log session info
    console.log('[PUT] Session:', session ? { role: session.user?.role, branch: (session.user as any)?.branch } : 'No session');
    
    if (!session) {
      console.log('[PUT] No session found - returning 401');
      return NextResponse.json({ error: 'Unauthorized - Please login first' }, { status: 401 });
    }

    // Check if user is branch user
    const userRole = session.user?.role;
    console.log('[PUT] User role:', userRole);
    
    if (userRole === 'administrator') {
      console.log('[PUT] Administrator trying to update - blocking');
      return NextResponse.json({ error: 'Administrators can only view loan applications' }, { status: 403 });
    }

    // Only branch users can update
    if (userRole !== 'branch') {
      console.log('[PUT] User is not a branch user - blocking');
      return NextResponse.json({ error: 'Only branch users can update loan applications' }, { status: 403 });
    }

    const { id } = ctx.params as { id: string };
    const body = await request.json();
    
    console.log('[PUT] Updating application:', id, 'with status:', body.status);

    const existing = await prisma.loanApplication.findUnique({ where: { id } });
    if (!existing) {
      console.log('[PUT] Application not found:', id);
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Check if branch matches (case-insensitive)
    const userBranch = (session.user as any)?.branch?.toLowerCase();
    const appBranch = existing.branch?.toLowerCase();
    console.log('[PUT] User branch:', userBranch, 'Application branch:', appBranch);
    
    if (userBranch !== appBranch) {
      console.log('[PUT] Branch mismatch - blocking');
      return NextResponse.json({ error: 'Forbidden - You can only update applications for your branch' }, { status: 403 });
    }

    console.log('[PUT] Updating database with:', {
      status: body.status,
      notes: body.notes,
      reviewedBy: session.user?.name || session.user?.email || null,
      reviewedAt: body.status !== 'pending' ? new Date() : null,
    });

    const updated = await prisma.loanApplication.update({
      where: { id },
      data: {
        status: body.status,
        notes: body.notes,
        reviewedBy: session.user?.name || session.user?.email || null,
        reviewedAt: body.status !== 'pending' ? new Date() : null,
      },
    });

    console.log('[PUT] Application updated successfully:', updated.id);

    // Send notifications
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
    return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, ctx: any) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    if (session.user.role === 'administrator') {
      return NextResponse.json({ error: 'Administrators can only view loan applications' }, { status: 403 });
    }

    const { id } = ctx.params as { id: string };
    const existing = await prisma.loanApplication.findUnique({ where: { id } });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (session.user.role === 'branch' && (session.user as any).branch !== existing.branch) {
      return NextResponse.json({ error: 'Forbidden - You can only delete applications for your branch' }, { status: 403 });
    }

    await prisma.loanApplication.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
