/*
  Warnings:

  - A unique constraint covering the columns `[passbookNo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `passbookNo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LoanApplication" ADD COLUMN     "depositSlipOrEwallet" TEXT,
ADD COLUMN     "memberWithIDAndSlip" TEXT;

-- AlterTable
ALTER TABLE "SuccessStory" ADD COLUMN     "idFile" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "memberCategory" TEXT,
ADD COLUMN     "passbookNo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "username" TEXT,
    "action" TEXT NOT NULL,
    "target" TEXT,
    "details" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fileName" TEXT,
    "mimeType" TEXT,
    "data" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "loanApplicationId" TEXT NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_passbookNo_key" ON "User"("passbookNo");

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_loanApplicationId_fkey" FOREIGN KEY ("loanApplicationId") REFERENCES "LoanApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
