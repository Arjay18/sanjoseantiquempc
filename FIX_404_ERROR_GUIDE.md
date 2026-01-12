# Fix for 404 Error When Viewing Loan Applications

## Problem
When submitting loan applications, the PDF was being generated but not saved to the database, causing 404 errors when trying to view the submitted applications.

## Solution Implemented

### 1. Database Schema Update
Added `pdfFile` field to store the PDF in base64 format:
- File: `prisma/schema.prisma`
- Field: `pdfFile String?` (nullable text field for base64 encoded PDF)

### 2. API Route Update
Updated the loan application submission API to save the PDF:
- File: `src/app/api/loan-applications/route.ts`
- Added: `pdfFile: formData.pdfFile || null` to the Prisma create operation

### 3. New PDF Viewing Endpoint
Created API endpoint to serve PDFs from the database:
- File: `src/app/api/administrator/loan-applications/[id]/pdf/route.ts`
- Endpoint: `GET /api/administrator/loan-applications/{id}/pdf`
- Converts base64 to PDF and serves with appropriate headers

### 4. UI Update
Added "View PDF" button to loan application detail page:
- File: `src/app/administrator/loan-applications/[id]/page.tsx`
- Button opens PDF in new tab

## Migration Required

⚠️ **IMPORTANT**: You need to apply the database migration before the fix will work.

### Option 1: Automatic Migration (when database is available)
```powershell
npx prisma migrate dev --name add_pdf_file_field
```

### Option 2: Manual SQL (if automatic fails)
Run this SQL directly in your PostgreSQL database:
```sql
ALTER TABLE "LoanApplication" ADD COLUMN IF NOT EXISTS "pdfFile" TEXT;
COMMENT ON COLUMN "LoanApplication"."pdfFile" IS 'Base64 encoded PDF file';
```

The SQL file is available at: `prisma/migrations/add_pdf_file_manual.sql`

## Testing

After applying the migration:

1. **Submit a new loan application**
   - Fill out the form at `/loan-application`
   - Submit and note the success message

2. **View from branch dashboard**
   - Login to your branch (e.g., `/branch/sanjose/login`)
   - Click "View Details" on any application
   - Click the "View PDF" button in the header
   - PDF should open in a new tab

3. **View from administrator panel**
   - Login as administrator at `/administrator/login`
   - Navigate to loan applications
   - Click on any application
   - Click "View PDF" button

## Important Notes

- **Existing applications**: Applications submitted BEFORE this fix won't have PDFs stored. Only new submissions will have the PDF available.
- **PDF size**: PDFs are stored as base64 in the database. Consider file size limits.
- **Database connection**: Make sure your Render PostgreSQL database is accessible before running migrations.

## If You Still Get 404 Errors

1. **Check if migration was applied**:
   ```powershell
   npx prisma db push
   ```

2. **Verify the pdfFile column exists**:
   Connect to your database and run:
   ```sql
   SELECT column_name FROM information_schema.columns 
   WHERE table_name = 'LoanApplication' AND column_name = 'pdfFile';
   ```

3. **Check if PDF was saved**:
   ```sql
   SELECT id, name, pdfFile IS NOT NULL as has_pdf 
   FROM "LoanApplication" 
   ORDER BY "createdAt" DESC 
   LIMIT 10;
   ```

4. **Test with a fresh submission**:
   Submit a brand new loan application and check if the PDF appears.

## File Changes Summary

✅ `prisma/schema.prisma` - Added pdfFile field
✅ `src/app/api/loan-applications/route.ts` - Save PDF on submission
✅ `src/app/api/administrator/loan-applications/[id]/pdf/route.ts` - NEW: PDF viewing endpoint
✅ `src/app/administrator/loan-applications/[id]/page.tsx` - Added "View PDF" button
✅ `prisma/migrations/add_pdf_file_manual.sql` - NEW: Manual migration SQL

## Next Steps

1. Apply the database migration (see "Migration Required" section above)
2. Restart your development server: `npm run dev`
3. Test by submitting a new loan application
4. Verify the "View PDF" button works on the detail page
