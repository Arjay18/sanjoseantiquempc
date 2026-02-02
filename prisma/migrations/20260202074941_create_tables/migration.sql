-- CreateTable
CREATE TABLE "NewsPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "author" TEXT,
    "category" TEXT,
    "caption" TEXT,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuccessStory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "memberName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "videoFile" TEXT,
    "thumbnail" TEXT,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuccessStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Statistic" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL DEFAULT 'general',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Statistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PMESSession" (
    "id" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 50,
    "registered" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'active',
    "zoomMeetingId" TEXT,
    "zoomPassword" TEXT,
    "zoomJoinUrl" TEXT,
    "zoomStartUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PMESSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberRegistration" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "branch" TEXT NOT NULL,
    "pmesSessionId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanApplication" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pbNo" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT NOT NULL,
    "branch" TEXT NOT NULL DEFAULT 'sanjose',
    "loanType" TEXT NOT NULL,
    "idType" TEXT NOT NULL,
    "idFile" TEXT,
    "loanAmount" DOUBLE PRECISION NOT NULL,
    "term" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,
    "promissoryNoteAmount" DOUBLE PRECISION,
    "promissoryNoteTerm" TEXT,
    "promissoryNotePaymentSchedule" TEXT,
    "promissoryNoteStartingOn" TEXT,
    "makerName1" TEXT,
    "makerName2" TEXT,
    "coMakerName1" TEXT,
    "coMakerName2" TEXT,
    "witnessName1" TEXT,
    "witnessName2" TEXT,
    "assignmentAmount" DOUBLE PRECISION,
    "regularSavings" TEXT,
    "ultimaSavings" TEXT,
    "alkansyaSavings" TEXT,
    "timeDeposit" TEXT,
    "otherDeposits" TEXT,
    "assignmentPbNo" TEXT,
    "shareCapital" TEXT,
    "signatureDate" TEXT,
    "assignmentMaker1" TEXT,
    "assignmentMaker2" TEXT,
    "assignmentCoMaker1" TEXT,
    "assignmentCoMaker2" TEXT,
    "assignmentWitness1" TEXT,
    "assignmentWitness2" TEXT,
    "makerSpouseName" TEXT,
    "assignmentCoMakerName1" TEXT,
    "assignmentCoMakerName2" TEXT,
    "assignmentWitnessName1" TEXT,
    "assignmentWitnessName2" TEXT,
    "memberIncome" DOUBLE PRECISION,
    "spouseIncome" DOUBLE PRECISION,
    "otherIncome" DOUBLE PRECISION,
    "businessIncome" DOUBLE PRECISION,
    "foodExpense" DOUBLE PRECISION,
    "clothingExpense" DOUBLE PRECISION,
    "shelterExpense" DOUBLE PRECISION,
    "educationExpense" DOUBLE PRECISION,
    "electricWaterExpense" DOUBLE PRECISION,
    "helperExpense" DOUBLE PRECISION,
    "loanRepaymentExpense" DOUBLE PRECISION,
    "miscellaneousExpense" DOUBLE PRECISION,
    "netIncome" DOUBLE PRECISION,
    "committeeApproved" DOUBLE PRECISION,
    "committeeReduced" DOUBLE PRECISION,
    "receivedBy" TEXT,
    "checkedBy" TEXT,
    "approvedBy" TEXT,
    "referenceNo" TEXT,
    "loanTypeDisclosure" TEXT,
    "loanAmountDisclosure" DOUBLE PRECISION,
    "charges" DOUBLE PRECISION,
    "netProceeds" DOUBLE PRECISION,
    "effectiveInterestRate" DOUBLE PRECISION,
    "nominalInterestRate" DOUBLE PRECISION,
    "penalty" DOUBLE PRECISION,
    "interestRate" DOUBLE PRECISION,
    "voucherNo" TEXT,
    "mop" TEXT,
    "processor" TEXT,
    "pdfFile" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoanApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "inquiryType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "respondedBy" TEXT,
    "respondedAt" TIMESTAMP(3),
    "response" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactInquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "branch" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsPost_slug_key" ON "NewsPost"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Statistic_key_key" ON "Statistic"("key");

-- CreateIndex
CREATE UNIQUE INDEX "LoanApplication_pbNo_branch_loanType_key" ON "LoanApplication"("pbNo", "branch", "loanType");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
