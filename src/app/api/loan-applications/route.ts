import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();

    // Debug: Log received data
    console.log('=== LOAN APPLICATION DEBUG ===');
    console.log('formData keys:', Object.keys(formData));
    console.log('=============================');

    // Backend validation for required fields and numeric types
    const requiredFields = [
      'name', 'pbNo', 'contactNo', 'address', 'loanType', 'loanAmount', 'term', 'purpose', 'branch'
    ];
    const missingFields = requiredFields.filter(field => {
      const value = formData[field];
      // Accept 0 for numeric fields, but not empty string or undefined
      if (value === undefined || value === null || value === '') return true;
      return false;
    });
    if (missingFields.length > 0) {
      return NextResponse.json({
        error: 'Missing required fields',
        details: `The following fields are required: ${missingFields.join(', ')}`,
        missingFields,
        receivedFields: Object.keys(formData)
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
        invalidFields: invalidNumeric,
        loanAmountValue: formData.loanAmount,
        termValue: formData.term
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
      
      // Debug: Log all received fields
      console.log('All received formData:', JSON.stringify(formData, null, 2));
      
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
          amountInWords: formData.amountInWords || null,
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
          // Assignment of Deposit - map frontend fields to backend
          assignmentAmount: formData.assignmentAmount ? parseFloat(formData.assignmentAmount) : null,
          regularSavings: formData.savingsDepositRegular || formData.regularSavings || null,
          ultimaSavings: formData.savingsDepositUltima || formData.ultimaSavings || null,
          alkansyaSavings: formData.savingsDepositAlkansya || formData.alkansyaSavings || null,
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
          // Income fields - map frontend names to backend
          memberIncome: formData.incomeMember ? parseFloat(formData.incomeMember) : null,
          spouseIncome: formData.incomeSpouse ? parseFloat(formData.incomeSpouse) : null,
          otherIncome: formData.otherIncome ? parseFloat(formData.otherIncome) : null,
          businessIncome: formData.incomeBusiness ? parseFloat(formData.incomeBusiness) : null,
          // Expense fields - map frontend names to backend
          foodExpense: formData.food ? parseFloat(formData.food) : null,
          clothingExpense: formData.clothing ? parseFloat(formData.clothing) : null,
          shelterExpense: formData.shelter ? parseFloat(formData.shelter) : null,
          educationExpense: formData.education ? parseFloat(formData.education) : null,
          electricWaterExpense: formData.electricWaterBills ? parseFloat(formData.electricWaterBills) : null,
          helperExpense: formData.helper ? parseFloat(formData.helper) : null,
          loanRepaymentExpense: formData.loanRepayments ? parseFloat(formData.loanRepayments) : null,
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
      // Handle unique constraint violation - check for the actual field names
      if (err.code === 'P2002' && err.meta && err.meta.target) {
        const target = err.meta.target;
        const hasPbNo = target.includes('pbNo');
        const hasBranch = target.includes('branch');
        const hasLoanType = target.includes('loanType');
        
        if (hasPbNo && hasBranch && hasLoanType) {
          return NextResponse.json({
            error: 'Duplicate application',
            message: 'A loan application with this passbook number, branch, and loan type already exists. Please use a different passbook number or loan type.'
          }, { status: 409 });
        }
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
          console.error(`Error Property [${key}]:`, (error as any)[key]);
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
