# Branch Login System Implementation

## Database Schema Updates
- [x] Add User model for branch authentication
- [x] Add branch field to LoanApplication model
- [ ] Run database migration (requires DATABASE_URL setup)

## Authentication Updates
- [x] Extend auth.ts to support branch user logins
- [x] Add branch-specific credentials validation

## API Updates
- [x] Modify loan-applications GET to filter by branch for branch users
- [x] Add PUT/PATCH endpoint for approve/reject actions
- [x] Ensure admin sees all applications

## Branch Panel Creation
- [ ] Create /branch/[branch-name] routes for each branch (sanjose, miagao, oton, guimaras)
- [ ] Create login pages for each branch
- [ ] Create branch dashboards with loan management

## UI Components
- [ ] Branch login forms
- [ ] Restricted dashboards with approve/reject buttons
- [ ] Status update functionality

## Testing & Seeding
- [ ] Seed branch users in database
- [ ] Test branch logins and permissions
- [ ] Test approve/reject functionality
- [ ] Verify admin panel unchanged
