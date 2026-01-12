import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('Checking loan applications...\n');
    
    // Get all loan applications
    const applications = await prisma.loanApplication.findMany({
      select: {
        id: true,
        name: true,
        branch: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const byBranch: Record<string, any[]> = {};
    applications.forEach(app => {
      if (!byBranch[app.branch]) {
        byBranch[app.branch] = [];
      }
      byBranch[app.branch].push({
        id: app.id,
        name: app.name,
        createdAt: app.createdAt.toISOString()
      });
    });

    return NextResponse.json({
      total: applications.length,
      byBranch,
      summary: {
        sanjose: byBranch['sanjose']?.length || 0,
        miagao: byBranch['miagao']?.length || 0,
        oton: byBranch['oton']?.length || 0,
        guimaras: byBranch['guimaras']?.length || 0,
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to check data' }, { status: 500 });
  }
}
