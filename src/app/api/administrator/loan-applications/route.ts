import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Allow an administrator to view all branches; branch-role users see only their branch.
    // Administrators can optionally filter by `branch` query param when needed.
    const branchParam = searchParams.get('branch');

    console.log('Loan applications query:', {
      userRole: session.user.role,
      userBranch: (session.user as any).branch,
      branchParam,
      status
    });


    const userBranch = (session.user as any)?.branch?.trim().toLowerCase();
    
    const where: any = {};
    if (status && status !== 'all') {
      where.status = status;
    }
    if (session.user.role === 'admin') {
      // Admins: if branchParam is present, filter strictly by branch
      if (branchParam && ['sanjose', 'miagao', 'oton', 'guimaras'].includes(branchParam.trim().toLowerCase())) {
        where.branch = branchParam.trim().toLowerCase();
      }
    } else if (session.user.role === 'branch' && userBranch) {
      // Branch users can see their own branch OR applications with no branch (legacy data)
      // This ensures older applications without branch field are still visible
      where.OR = [
        { branch: userBranch },
        { branch: null },
        { branch: '' }
      ];
    }

    console.log('Query where clause:', where);
    console.log('Filtering by branch?', session.user.role === 'branch');
    console.log('Branch value:', (session.user as any).branch);

    const [applications, total] = await Promise.all([
      prisma.loanApplication.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.loanApplication.count({ where }),
    ]);

    console.log('Returned applications:', applications.map(app => ({ 
      id: app.id, 
      name: app.name, 
      branch: app.branch 
    })));

    return NextResponse.json({
      applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching loan applications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();

    // Debug: Log received data
    console.log('=== LOAN APPLICATION DEBUG ===');
    console.log('formData keys:', Object.keys(formData));
    console.log('branch:', formData.branch);
    console.log('idFile present:', !!formData.idFile);
    console.log('depositSlipOrEwallet present:', !!formData.depositSlipOrEwallet);
    console.log('memberWithIDAndSlip present:', !!formData.memberWithIDAndSlip);
    console.log('=============================');

    // Validate required fields
    if (!formData.branch) {
      console.warn('No branch provided, defaulting to sanjose');
    }

    // Normalize branch value
    const normalizedBranch = (formData.branch || 'sanjose').trim().toLowerCase();

    const application = await prisma.loanApplication.create({
      data: {
        name: formData.name,
        pbNo: formData.pbNo,
        contactNo: formData.contactNo,
        email: formData.email,
        address: formData.address,
        branch: normalizedBranch, // Make sure branch is saved
        loanType: formData.loanType,
        idType: formData.idType || 'Other',
        // Store file data directly (not JSON stringified)
        idFile: formData.idFile || null,
        depositSlipOrEwallet: formData.depositSlipOrEwallet || null,
        memberWithIDAndSlip: formData.memberWithIDAndSlip || null,
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
      },
    });

    console.log('Loan application created successfully:', {
      id: application.id,
      name: application.name,
      branch: application.branch,
      hasIdFile: !!application.idFile,
      hasDepositSlip: !!application.depositSlipOrEwallet,
      hasMemberPhoto: !!application.memberWithIDAndSlip
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error('Error creating loan application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
