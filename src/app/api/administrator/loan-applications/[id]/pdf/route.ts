import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, ctx: any) {
  try {
    const { id } = ctx.params as { id: string };

    const application = await prisma.loanApplication.findUnique({
      where: { id },
      select: { pdfFile: true, name: true },
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    if (!application.pdfFile) {
      return NextResponse.json({ error: 'PDF not found for this application' }, { status: 404 });
    }

    // Convert base64 to buffer
    const pdfBuffer = Buffer.from(application.pdfFile, 'base64');

    // Return PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="loan-application-${id}.pdf"`,
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error fetching PDF:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
