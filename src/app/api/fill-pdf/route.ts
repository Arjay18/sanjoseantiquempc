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

    // Save to database first
    try {
      const loanApplication = await (prisma as any).loanApplication?.create?.({
        data: {
          name: formData.name || '',
          pbNo: formData.pbNo || '',
          contactNo: formData.contactNo || '',
          address: formData.address || '',
          loanType: formData.loanType || '',
          idType: formData.idType || '',
          loanAmount: parseFloat(formData.loanAmount || '0'),
          term: parseInt(formData.term || '0'),
          purpose: formData.purpose || '',
          status: 'pending',
          // Add other fields as needed
          promissoryNoteAmount: parseFloat(formData.promissoryNoteAmount || '0'),
          promissoryNoteTerm: formData.promissoryNoteTerm || '',
          promissoryNotePaymentSchedule: formData.promissoryNotePaymentSchedule || '',
          promissoryNoteStartingOn: formData.promissoryNoteStartingOn || '',
          assignmentAmount: parseFloat(formData.assignmentAmount || '0'),
          assignmentPbNo: formData.assignmentPbNo || '',
          regularSavings: formData.regularSavings || '',
          ultimaSavings: formData.ultimaSavings || '',
          alkansyaSavings: formData.alkansyaSavings || '',
          timeDeposit: formData.timeDeposit || '',
          otherDeposits: formData.otherDeposits || '',
          shareCapital: formData.shareCapital || '',
          signatureDate: formData.signatureDate || '',
          makerName1: formData.makerName1 || '',
          makerName2: formData.makerName2 || '',
          coMakerName1: formData.coMakerName1 || '',
          coMakerName2: formData.coMakerName2 || '',
          witnessName1: formData.witnessName1 || '',
          witnessName2: formData.witnessName2 || '',
          assignmentMaker1: formData.assignmentMaker1 || '',
          assignmentMaker2: formData.assignmentMaker2 || '',
          assignmentCoMaker1: formData.assignmentCoMaker1 || '',
          assignmentCoMaker2: formData.assignmentCoMaker2 || '',
          assignmentWitness1: formData.assignmentWitness1 || '',
          assignmentWitness2: formData.assignmentWitness2 || '',
          makerSpouseName: formData.makerSpouseName || '',
          assignmentCoMakerName1: formData.assignmentCoMakerName1 || '',
          assignmentCoMakerName2: formData.assignmentCoMakerName2 || '',
          assignmentWitnessName1: formData.assignmentWitnessName1 || '',
          assignmentWitnessName2: formData.assignmentWitnessName2 || '',
          memberIncome: parseFloat(formData.memberIncome || '0'),
          spouseIncome: parseFloat(formData.spouseIncome || '0'),
          otherIncome: parseFloat(formData.otherIncome || '0'),
          businessIncome: parseFloat(formData.businessIncome || '0'),
          foodExpense: parseFloat(formData.foodExpense || '0'),
          clothingExpense: parseFloat(formData.clothingExpense || '0'),
          shelterExpense: parseFloat(formData.shelterExpense || '0'),
          educationExpense: parseFloat(formData.educationExpense || '0'),
          electricWaterExpense: parseFloat(formData.electricWaterExpense || '0'),
          helperExpense: parseFloat(formData.helperExpense || '0'),
          loanRepaymentExpense: parseFloat(formData.loanRepaymentExpense || '0'),
          miscellaneousExpense: parseFloat(formData.miscellaneousExpense || '0'),
          netIncome: parseFloat(formData.netIncome || '0'),
          committeeApproved: parseFloat(formData.committeeApproved || '0'),
          committeeReduced: parseFloat(formData.committeeReduced || '0'),
          receivedBy: formData.receivedBy || '',
          checkedBy: formData.checkedBy || '',
          approvedBy: formData.approvedBy || '',
          referenceNo: formData.referenceNo || '',
          loanTypeDisclosure: formData.loanTypeDisclosure || '',
          loanAmountDisclosure: parseFloat(formData.loanAmountDisclosure || '0'),
          charges: parseFloat(formData.charges || '0'),
          netProceeds: parseFloat(formData.netProceeds || '0'),
          effectiveInterestRate: parseFloat(formData.effectiveInterestRate || '0'),
          nominalInterestRate: parseFloat(formData.nominalInterestRate || '0'),
          penalty: parseFloat(formData.penalty || '0'),
          interestRate: parseFloat(formData.interestRate || '0'),
          voucherNo: formData.voucherNo || '',
          mop: formData.mop || '',
          processor: formData.processor || '',
        }
      });
      console.log('Loan application saved:', loanApplication?.id);
    } catch (dbError) {
      console.error('Database save error:', dbError);
      // Continue with PDF generation even if DB save fails
    }

    // Load the PDF template
    const pdfPath = path.join(process.cwd(), 'public', 'Form', 'NEW-Loan-Form-updated.pdf');
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
       name: { x: 90, y: 827, width: 200, height: 20 },
      pbNo: { x: 90, y: 810, width: 100, height: 20 },
      contactNo: { x: 355, y: 810, width: 150, height: 20 },
      address: { x: 100, y: 795, width: 300, height: 20 },
      loanType: { x: 355, y: 795, width: 150, height: 20 },
      loanAmount: { x: 468, y: 780, width: 100, height: 20 },
      term: { x: 80, y: 764, width: 50, height: 20 },
      purpose: { x: 350, y: 764, width: 300, height: 20 },

      // Promissory Note
      promissoryNoteAmount: { x: 120, y: 620, width: 100, height: 20 },
      promissoryNoteTerm: { x: 320, y: 620, width: 100, height: 20 },

      // Assignment of Deposit
      regularSavings: { x: 200, y: 550, width: 100, height: 20 },
      ultimaSavings: { x: 200, y: 530, width: 100, height: 20 },
      alkansyaSavings: { x: 200, y: 510, width: 100, height: 20 },
      timeDeposit: { x: 200, y: 490, width: 100, height: 20 },
      otherDeposits: { x: 200, y: 470, width: 100, height: 20 },
      shareCapital: { x: 200, y: 450, width: 100, height: 20 },

      // Monthly Disposable Income - Income
      memberIncome: { x: 250, y: 400, width: 100, height: 20 },
      spouseIncome: { x: 250, y: 380, width: 100, height: 20 },
      otherIncome: { x: 250, y: 360, width: 100, height: 20 },
      businessIncome: { x: 250, y: 340, width: 100, height: 20 },

      // Monthly Disposable Income - Expenses
      foodExpense: { x: 250, y: 300, width: 100, height: 20 },
      clothingExpense: { x: 250, y: 280, width: 100, height: 20 },
      shelterExpense: { x: 250, y: 260, width: 100, height: 20 },
      educationExpense: { x: 250, y: 240, width: 100, height: 20 },
      electricWaterExpense: { x: 250, y: 220, width: 100, height: 20 },
      helperExpense: { x: 250, y: 200, width: 100, height: 20 },
      loanRepaymentExpense: { x: 250, y: 180, width: 100, height: 20 },
      miscellaneousExpense: { x: 250, y: 160, width: 100, height: 20 },

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
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="filled-loan-application.pdf"',
      },
    });

  } catch (error) {
    console.error('Error filling PDF:', error);
    return NextResponse.json({ error: 'Failed to fill PDF' }, { status: 500 });
  }
}
