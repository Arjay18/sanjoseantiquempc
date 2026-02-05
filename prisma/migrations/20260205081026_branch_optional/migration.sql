/*
  Warnings:

  - Added the required column `branch` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PMESSession" ALTER COLUMN "branch" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "branch" TEXT;
