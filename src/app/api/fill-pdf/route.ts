import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData = body.formData || {};

    // (Removed database save logic. This endpoint now only generates the PDF.)

    // Load the PDF template
    const pdfPath = path.join(process.cwd(), 'public', 'Form', 'NEW-Loan-Form-012626.pdf');
    const pdfBytes = fs.readFileSync(pdfPath);

    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Get the first page
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Define field positions based on the PDF structure
    // These coordinates need to be adjusted based on the actual PDF layout
    const fields = {
      // Basic Information
      name: { x: 120, y: 105 },
      pbNo: { x: 490, y: 105 },
      address: { x: 120, y: 124.5 },
      contactNo: { x: 120, y: 142 },
      loanType: { x: 320, y: 142 },
      term: { x: 505, y: 142 },
      loanAmount: { x: 120, y: 160.5 },
      pesosOnly: { x: 490, y: 160.5 },
      purpose: { x: 120, y: 179.5 },
      amountInWords: { x: 100, y: 635 },
      amountInPesos: { x: 415, y: 635 },
      regularSavings: { x: 180, y: 660 },
      ultimaSavings: { x: 400, y: 660 },
      alkansyaSavings: { x: 180, y: 675 },
      timeDeposit: { x: 400, y: 675 },
      otherDeposits: { x: 180, y: 690 },
      assignmentPbNo: { x: 445, y: 690 },
      shareCapital: { x: 120, y: 280 },
      memberIncome: { x: 360, y: 113.5 },
      spouseIncome: { x: 360, y: 125 },
      otherIncome: { x: 360, y: 137 },
      businessIncome: { x: 360, y: 149 },
      otherIncome2: { x: 360, y: 159 },
      totalFamilyIncome: { x: 480, y: 159 },
      foodExpense: { x: 360, y: 184 },
      clothingExpense: { x: 360, y: 195 },
      shelterExpense: { x: 360, y: 207 },
      educationExpense: { x: 360, y: 219 },
      electricWaterExpense: { x: 360, y: 230 },
      helperExpense: { x: 360, y: 242 },
      loanRepaymentExpense: { x: 360, y: 254 },
      miscellaneousExpense: { x: 360, y: 265 },
      totalFamilyExpenses: { x: 480, y: 265 },
      netIncome: { x: 480, y: 285 },
      promissoryNoteAmount: { x: 120, y: 620 },
      promissoryNoteTerm: { x: 320, y: 620 },
      // Declaration checkboxes (these would need to be handled differently)
      // For now, we'll skip checkboxes as they require different handling
    };

    // Fill in the form fields
    Object.keys(fields).forEach(fieldName => {
      if (formData && formData[fieldName] && formData[fieldName] !== '') {
        const field = fields[fieldName as keyof typeof fields];
        firstPage.drawText(String(formData[fieldName]), {
          x: field.x,
          y: field.y,
          size: 12,
          color: rgb(0, 0, 0),
        });
      }
    });

    // Serialize the PDF
    const pdfBytesFilled = await pdfDoc.save();

    // Return the filled PDF
    return new NextResponse(Buffer.from(pdfBytesFilled), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="filled-loan-form.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to generate PDF.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
