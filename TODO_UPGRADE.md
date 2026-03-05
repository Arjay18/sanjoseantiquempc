# Loan Application System Upgrade - TODO List

## 1. Frontend Form Updates (src/app/dashboard/page.tsx)
- [ ] Add "Amount in Words" field to Step 2 (Loan Details)
- [ ] Add "Amount in Pesos Only" field to Step 2 (Loan Details)  
- [ ] Add "Income Other Family Member" to Step 3 (Income section)
- [ ] Add "Helper (Timbangan)" to Step 3 (Expenses section)
- [ ] Add new Step 5: Assignment of Deposit and Share Capital
- [ ] Add Assignment fields: passbook number, regular savings, ultima savings, alkansya, time deposit, other deposits
- [ ] Update totalSteps from 4 to 5
- [ ] Update progress steps to include new step
- [ ] Add all new fields to form submission payload

## 2. Backend API Updates (src/app/api/loan-applications/route.ts)
- [ ] Ensure all new fields are accepted and stored

## 3. Branch Officer Review (src/app/branch/review/page.tsx)
- [ ] Add ability to view full application details
- [ ] Add remarks/notes field when approving/rejecting
- [ ] Add "Under Review" status option

## 4. Admin Loan Applications (src/app/admin/loan-applications/page.tsx)
- [ ] Add filter by status
- [ ] Add filter by branch
- [ ] Add view full details modal

## Status: IN PROGRESS
