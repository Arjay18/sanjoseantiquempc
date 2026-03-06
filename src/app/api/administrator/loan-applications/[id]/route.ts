import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    const application = await prisma.loanApplication.findUnique({ where: { id } });
    if (!application) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json({ error: 'Invalid JSON body', details: String(e) }, { status: 400 });
  }

  try {
    const session = await getServerSession(authOptions);
    console.log('[PUT] Session:', session);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized - Please login first' }, { status: 401 });
    }

    const userRole = session.user?.role;
    const userBranch = (session.user as any)?.branch;
    
    console.log('[PUT] User role:', userRole, 'User branch:', userBranch);

    // Only allow branch users to update
    if (userRole !== 'branch') {
      return NextResponse.json({ error: 'Only branch users can update loan applications' }, { status: 403 });
    }

    const { id } = await params;
    console.log('[PUT] Updating application:', id, 'with status:', body.status);

    // First check if the application exists
    const existing = await prisma.loanApplication.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    console.log('[PUT] Existing application branch:', existing.branch);

    // Perform the update
    const updated = await prisma.loanApplication.update({
      where: { id },
      data: {
        status: body.status,
        notes: body.notes || null,
        reviewedBy: session.user?.name || session.user?.email || userBranch,
        reviewedAt: body.status !== 'pending' ? new Date() : null,
      },
    });

    console.log('[PUT] Updated successfully:', updated.id);
    return NextResponse.json(updated);
  } catch (error) {
    console.error('[PUT] Error updating application:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    if (session.user.role === 'administrator') {
      return NextResponse.json({ error: 'Administrators can only view loan applications' }, { status: 403 });
    }

    const { id } = await params;
    const existing = await prisma.loanApplication.findUnique({ where: { id } });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    await prisma.loanApplication.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
