-- Add pdfFile column to LoanApplication table
ALTER TABLE "LoanApplication" ADD COLUMN IF NOT EXISTS "pdfFile" TEXT;

-- Add comment to the column
COMMENT ON COLUMN "LoanApplication"."pdfFile" IS 'Base64 encoded PDF file';
