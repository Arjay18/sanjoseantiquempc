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
    
    // Get second page for Income and Expenses
    const secondPage = pages.length > 1 ? pages[1] : firstPage;

    // Page 1 fields - Basic Information
    const page1Fields: Record<string, { x: number; y: number; value: string }> = {
      name: { x: 120, y: 735, value: application.name || '' },
      pbNo: { x: 490, y: 735, value: application.pbNo || '' },
      address: { x: 120, y: 715, value: application.address || '' },
      contactNo: { x: 120, y: 695, value: application.contactNo || '' },
      loanType: { x: 320, y: 695, value: application.loanType || '' },
      term: { x: 505, y: 695, value: String(application.term || '') },
      loanAmount: { x: 120, y: 675, value: String(application.loanAmount || '') },
      purpose: { x: 120, y: 655, value: application.purpose || '' },
      shareCapital: { x: 120, y: 555, value: application.shareCapital || '' },
      
      // Savings fields (still on page 1)
      regularSavings: { x: 180, y: 175, value: application.regularSavings || '' },
      ultimaSavings: { x: 400, y: 175, value: application.ultimaSavings || '' },
      alkansyaSavings: { x: 180, y: 160, value: application.alkansyaSavings || '' },
      timeDeposit: { x: 400, y: 160, value: application.timeDeposit || '' },
      otherDeposits: { x: 180, y: 145, value: application.otherDeposits || '' },
      assignmentPbNo: { x: 445, y: 145, value: application.assignmentPbNo || '' },
      
      // Promissory Note (page 1)
      promissoryNoteAmount: { x: 120, y: 215, value: application.promissoryNoteAmount ? String(application.promissoryNoteAmount) : '' },
      promissoryNoteTerm: { x: 320, y: 215, value: application.promissoryNoteTerm || '' },
      
      // Co-makers and Witnesses (page 1)
      makerName1: { x: 120, y: 430, value: application.makerName1 || '' },
      makerName2: { x: 350, y: 430, value: application.makerName2 || '' },
      coMakerName1: { x: 120, y: 410, value: application.coMakerName1 || '' },
      coMakerName2: { x: 350, y: 410, value: application.coMakerName2 || '' },
      witnessName1: { x: 120, y: 390, value: application.witnessName1 || '' },
      witnessName2: { x: 350, y: 390, value: application.witnessName2 || '' },
    };

    // Page 2 fields - Income and Expenses
    const page2Fields: Record<string, { x: number; y: number; value: string }> = {
      // Income fields on Page 2
      memberIncome: { x: 200, y: 650, value: application.memberIncome ? String(application.memberIncome) : '' },
      spouseIncome: { x: 200, y: 630, value: application.spouseIncome ? String(application.spouseIncome) : '' },
      otherIncome: { x: 200, y: 610, value: application.otherIncome ? String(application.otherIncome) : '' },
      businessIncome: { x: 200, y: 590, value: application.businessIncome ? String(application.businessIncome) : '' },
      
      // Expense fields on Page 2
      foodExpense: { x: 200, y: 550, value: application.foodExpense ? String(application.foodExpense) : '' },
      clothingExpense: { x: 200, y: 530, value: application.clothingExpense ? String(application.clothingExpense) : '' },
      shelterExpense: { x: 200, y: 510, value: application.shelterExpense ? String(application.shelterExpense) : '' },
      educationExpense: { x: 200, y: 490, value: application.educationExpense ? String(application.educationExpense) : '' },
      electricWaterExpense: { x: 200, y: 470, value: application.electricWaterExpense ? String(application.electricWaterExpense) : '' },
      helperExpense: { x: 200, y: 450, value: application.helperExpense ? String(application.helperExpense) : '' },
      loanRepaymentExpense: { x: 200, y: 430, value: application.loanRepaymentExpense ? String(application.loanRepaymentExpense) : '' },
      miscellaneousExpense: { x: 200, y: 410, value: application.miscellaneousExpense ? String(application.miscellaneousExpense) : '' },
      netIncome: { x: 200, y: 390, value: application.netIncome ? String(application.netIncome) : '' },
    };

    // Fill Page 1 fields
    Object.values(page1Fields).forEach(field => {
      if (field.value) {
        firstPage.drawText(field.value, {
          x: field.x,
          y: field.y,
          size: 10,
          color: rgb(0, 0, 0),
        });
      }
    });

    // Fill Page 2 fields - Income and Expenses
    Object.values(page2Fields).forEach(field => {
      if (field.value) {
        secondPage.drawText(field.value, {
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
