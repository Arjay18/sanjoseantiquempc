import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { pbNo, branch, type, fileName, mimeType, data } = await req.json();
    if (!pbNo || !branch || !type || !data) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    // Find the loan application
    const loan = await prisma.loanApplication.findFirst({
      where: { pbNo, branch: branch.trim().toLowerCase() },
    });
    if (!loan) {
      return NextResponse.json({ error: 'Loan application not found.' }, { status: 404 });
    }
    // Create attachment
    await prisma.attachment.create({
      data: {
        type,
        fileName,
        mimeType,
        data,
        loanApplicationId: loan.id,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 });
  }
}
