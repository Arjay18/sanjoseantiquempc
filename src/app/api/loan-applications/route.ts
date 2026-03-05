import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();

    // Backend validation for required fields and numeric types
    const requiredFields = [
      'name', 'pbNo', 'contactNo', 'address', 'loanType', 'loanAmount', 'term', 'purpose', 'branch'
    ];
    const missingFields = requiredFields.filter(field => {
      // Accept 0 for numeric fields, but not empty string or undefined
      if (formData[field] === undefined || formData[field] === null || formData[field] === '') return true;
      return false;
    });
    if (missingFields.length > 0) {
      return NextResponse.json({
        error: 'Missing required fields',
        details: `The following fields are required: ${missingFields.join(', ')}`,
        formData
      }, { status: 400 });
    }

    // Validate numeric fields
    const numericFields = [
      { key: 'loanAmount', label: 'loanAmount' },
      { key: 'term', label: 'term' }
    ];
    const invalidNumeric = numericFields.filter(f => {
      const value = formData[f.key];
      return value === '' || value === null || value === undefined || isNaN(Number(value));
    });
    if (invalidNumeric.length > 0) {
      return NextResponse.json({
        error: 'Invalid numeric fields',
        details: `The following fields must be valid numbers: ${invalidNumeric.map(f => f.label).join(', ')}`,
        formData
      }, { status: 400 });
    }

    console.log('Received loan application:', {
      name: formData.name,
      branch: formData.branch,
      loanType: formData.loanType,
      loanAmount: formData.loanAmount,
      email: formData.email
    });

    let application;
    try {
      // Normalize branch value
      const normalizedBranch = (formData.branch || 'sanjose').trim().toLowerCase();
      application = await prisma.loanApplication.create({
        data: {
          name: formData.name,
          pbNo: formData.pbNo,
          contactNo: formData.contactNo,
          email: formData.email,
          address: formData.address,
          branch: normalizedBranch,
          loanType: formData.loanType,
          idType: formData.idType || 'Other',
          idFile: formData.idFile || null,
          loanAmount: parseFloat(formData.loanAmount),
          term: parseInt(formData.term),
          purpose: formData.purpose,
          promissoryNoteAmount: formData.promissoryNoteAmount ? parseFloat(formData.promissoryNoteAmount) : null,
          promissoryNoteTerm: formData.promissoryNoteTerm,
          promissoryNotePaymentSchedule: formData.promissoryNotePaymentSchedule,
          promissoryNoteStartingOn: formData.promissoryNoteStartingOn,
          makerName1: formData.makerName1,
          makerName2: formData.makerName2,
          coMakerName1: formData.coMakerName1,
          coMakerName2: formData.coMakerName2,
          witnessName1: formData.witnessName1,
          witnessName2: formData.witnessName2,
          assignmentAmount: formData.assignmentAmount ? parseFloat(formData.assignmentAmount) : null,
          regularSavings: formData.regularSavings,
          ultimaSavings: formData.ultimaSavings,
          alkansyaSavings: formData.alkansyaSavings,
          timeDeposit: formData.timeDeposit,
          otherDeposits: formData.otherDeposits,
          assignmentPbNo: formData.assignmentPbNo,
          shareCapital: formData.shareCapital,
          signatureDate: formData.signatureDate,
          assignmentMaker1: formData.assignmentMaker1,
          assignmentMaker2: formData.assignmentMaker2,
          assignmentCoMaker1: formData.assignmentCoMaker1,
          assignmentCoMaker2: formData.assignmentCoMaker2,
          assignmentWitness1: formData.assignmentWitness1,
          assignmentWitness2: formData.assignmentWitness2,
          makerSpouseName: formData.makerSpouseName,
          assignmentCoMakerName1: formData.assignmentCoMakerName1,
          assignmentCoMakerName2: formData.assignmentCoMakerName2,
          assignmentWitnessName1: formData.assignmentWitnessName1,
          assignmentWitnessName2: formData.assignmentWitnessName2,
          memberIncome: formData.memberIncome ? parseFloat(formData.memberIncome) : null,
          spouseIncome: formData.spouseIncome ? parseFloat(formData.spouseIncome) : null,
          otherIncome: formData.otherIncome ? parseFloat(formData.otherIncome) : null,
          businessIncome: formData.businessIncome ? parseFloat(formData.businessIncome) : null,
          foodExpense: formData.foodExpense ? parseFloat(formData.foodExpense) : null,
          clothingExpense: formData.clothingExpense ? parseFloat(formData.clothingExpense) : null,
          shelterExpense: formData.shelterExpense ? parseFloat(formData.shelterExpense) : null,
          educationExpense: formData.educationExpense ? parseFloat(formData.educationExpense) : null,
          electricWaterExpense: formData.electricWaterExpense ? parseFloat(formData.electricWaterExpense) : null,
          helperExpense: formData.helperExpense ? parseFloat(formData.helperExpense) : null,
          loanRepaymentExpense: formData.loanRepaymentExpense ? parseFloat(formData.loanRepaymentExpense) : null,
          miscellaneousExpense: formData.miscellaneousExpense ? parseFloat(formData.miscellaneousExpense) : null,
          netIncome: formData.netIncome ? parseFloat(formData.netIncome) : null,
          committeeApproved: formData.committeeApproved ? parseFloat(formData.committeeApproved) : null,
          committeeReduced: formData.committeeReduced ? parseFloat(formData.committeeReduced) : null,
          receivedBy: formData.receivedBy,
          checkedBy: formData.checkedBy,
          approvedBy: formData.approvedBy,
          referenceNo: formData.referenceNo,
          loanTypeDisclosure: formData.loanTypeDisclosure,
          loanAmountDisclosure: formData.loanAmountDisclosure ? parseFloat(formData.loanAmountDisclosure) : null,
          charges: formData.charges ? parseFloat(formData.charges) : null,
          netProceeds: formData.netProceeds ? parseFloat(formData.netProceeds) : null,
          effectiveInterestRate: formData.effectiveInterestRate ? parseFloat(formData.effectiveInterestRate) : null,
          nominalInterestRate: formData.nominalInterestRate ? parseFloat(formData.nominalInterestRate) : null,
          penalty: formData.penalty ? parseFloat(formData.penalty) : null,
          interestRate: formData.interestRate ? parseFloat(formData.interestRate) : null,
          voucherNo: formData.voucherNo,
          mop: formData.mop,
          processor: formData.processor,
          pdfFile: formData.pdfFile || null,
          depositSlipOrEwallet: formData.depositSlipOrEwallet || null,
          memberWithIDAndSlip: formData.memberWithIDAndSlip || null,
        },
      });
    } catch (err: any) {
      // Handle unique constraint violation
      if (err.code === 'P2002' && err.meta && err.meta.target && err.meta.target.includes('pbNo_branch_loanType')) {
        return NextResponse.json({
          error: 'Duplicate application',
          message: 'A loan application for this member, branch, and loan type already exists.'
        }, { status: 409 });
      }
      throw err;
    }

    console.log('Loan application created successfully:', {
      id: application.id,
      name: application.name,
      branch: application.branch,
      status: application.status
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    // Improved error logging: print the full error object
    console.error('Error creating loan application:', error);
    if (error && typeof error === 'object') {
      for (const key in error) {
        if (Object.prototype.hasOwnProperty.call(error, key)) {
          console.error(`Error property [${key}]:`, (error as any)[key]);
        }
      }
    }
    // For debugging: return the error stack and all error properties in the response
    return NextResponse.json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      errorObject: error
    }, { status: 500 });
  }
}
