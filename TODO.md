# Task: Move Loan Application Form to User Dashboard

## Plan:
1. [x] Create new API endpoint for users to delete their own loan applications
2. [x] Modify dashboard page to include loan application form and management
3. [x] Modify online-application page to redirect users to dashboard

## Files created:
- `src/app/api/loan-applications/user/[id]/route.ts` - DELETE endpoint for user's own applications

## Files modified:
- `src/app/dashboard/page.tsx` - Added loan application form and management
- `src/app/online-application/page.tsx` - Redirected to dashboard for loan application
