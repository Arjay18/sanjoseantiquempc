import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const application = await prisma.loanApplication.findUnique({
      where: { id },
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // If there's a stored pdfFile, return it
    if (application.pdfFile) {
      const pdfBuffer = Buffer.from(application.pdfFile, 'base64');
      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `inline; filename="loan-application-${id}.pdf"`,
          'Cache-Control': 'no-cache',
        },
      });
    }

    // Generate PDF on-demand from application data
    const pdfPath = path.join(process.cwd(), 'public', 'Form', 'NEW-Loan-Form-012626.pdf');
    
    // Check if template exists
    let pdfBytes: Buffer;
    try {
      pdfBytes = fs.readFileSync(pdfPath);
    } catch (err) {
      return NextResponse.json({ error: 'PDF template not found' }, { status: 404 });
    }

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Map application data to PDF fields
    const fields: Record<string, { x: number; y: number; value: string }> = {
      name: { x: 120, y: 735, value: application.name || '' },
      pbNo: { x: 490, y: 735, value: application.pbNo || '' },
      address: { x: 120, y: 715, value: application.address || '' },
      contactNo: { x: 120, y: 695, value: application.contactNo || '' },
      loanType: { x: 320, y: 695, value: application.loanType || '' },
      term: { x: 505, y: 695, value: String(application.term || '') },
      loanAmount: { x: 120, y: 675, value: String(application.loanAmount || '') },
      purpose: { x: 120, y: 655, value: application.purpose || '' },
      shareCapital: { x: 120, y: 555, value: application.shareCapital || '' },
      
      // Income
      memberIncome: { x: 360, y: 720, value: application.memberIncome ? String(application.memberIncome) : '' },
      spouseIncome: { x: 360, y: 705, value: application.spouseIncome ? String(application.spouseIncome) : '' },
      otherIncome: { x: 360, y: 690, value: application.otherIncome ? String(application.otherIncome) : '' },
      businessIncome: { x: 360, y: 675, value: application.businessIncome ? String(application.businessIncome) : '' },
      
      // Expenses
      foodExpense: { x: 360, y: 640, value: application.foodExpense ? String(application.foodExpense) : '' },
      clothingExpense: { x: 360, y: 625, value: application.clothingExpense ? String(application.clothingExpense) : '' },
      shelterExpense: { x: 360, y: 610, value: application.shelterExpense ? String(application.shelterExpense) : '' },
      educationExpense: { x: 360, y: 595, value: application.educationExpense ? String(application.educationExpense) : '' },
      electricWaterExpense: { x: 360, y: 580, value: application.electricWaterExpense ? String(application.electricWaterExpense) : '' },
      helperExpense: { x: 360, y: 565, value: application.helperExpense ? String(application.helperExpense) : '' },
      loanRepaymentExpense: { x: 360, y: 550, value: application.loanRepaymentExpense ? String(application.loanRepaymentExpense) : '' },
      miscellaneousExpense: { x: 360, y: 535, value: application.miscellaneousExpense ? String(application.miscellaneousExpense) : '' },
      netIncome: { x: 480, y: 555, value: application.netIncome ? String(application.netIncome) : '' },
      
      // Savings
      regularSavings: { x: 180, y: 175, value: application.regularSavings || '' },
      ultimaSavings: { x: 400, y: 175, value: application.ultimaSavings || '' },
      alkansyaSavings: { x: 180, y: 160, value: application.alkansyaSavings || '' },
      timeDeposit: { x: 400, y: 160, value: application.timeDeposit || '' },
      otherDeposits: { x: 180, y: 145, value: application.otherDeposits || '' },
      assignmentPbNo: { x: 445, y: 145, value: application.assignmentPbNo || '' },
      
      // Promissory Note
      promissoryNoteAmount: { x: 120, y: 215, value: application.promissoryNoteAmount ? String(application.promissoryNoteAmount) : '' },
      promissoryNoteTerm: { x: 320, y: 215, value: application.promissoryNoteTerm || '' },
      
      // Co-makers and Witnesses
      makerName1: { x: 120, y: 430, value: application.makerName1 || '' },
      makerName2: { x: 350, y: 430, value: application.makerName2 || '' },
      coMakerName1: { x: 120, y: 410, value: application.coMakerName1 || '' },
      coMakerName2: { x: 350, y: 410, value: application.coMakerName2 || '' },
      witnessName1: { x: 120, y: 390, value: application.witnessName1 || '' },
      witnessName2: { x: 350, y: 390, value: application.witnessName2 || '' },
    };

    // Fill in the fields
    Object.values(fields).forEach(field => {
      if (field.value) {
        firstPage.drawText(field.value, {
          x: field.x,
          y: field.y,
          size: 10,
          color: rgb(0, 0, 0),
        });
      }
    });

    // Serialize the PDF
    const pdfBytesFilled = await pdfDoc.save();

    // Return the generated PDF
    return new NextResponse(Buffer.from(pdfBytesFilled), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="loan-application-${id}.pdf"`,
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
