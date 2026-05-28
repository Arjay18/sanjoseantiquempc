# TODO_SECURITY_HARDENING

## Scope
Security + privacy hardening for member data and anti-hacking.

## Steps
1. Make document upload storage private
   - Update `src/app/api/upload/route.ts` to use private blob access
   - Ensure uploaded content is not publicly accessible via URL

2. Add protected document download
   - Create an authenticated route that returns documents only after role + authorization checks
   - Use row-level authorization (branch/member ownership)

3. Add row-level authorization for loan application endpoints
   - For branch endpoints: only allow access to records where `loanApplication.branch` matches session branch
   - For member endpoints: only allow access to records where the record belongs to the authenticated user

4. Restrict API responses
   - Replace `return NextResponse.json(application)` with safe DTO responses
   - Ensure sensitive fields (IDs, attachments base64, etc.) are excluded by default

5. Add rate limiting / throttling
   - Add rate limiting for login/auth routes and upload routes
   - Add basic flood protection for write endpoints

6. Add monitoring & auditing
   - Record key security events to `AuditLog`
   - Ensure logs don’t print sensitive payloads

## Done tracking
- [x] 1. Private uploads
- [ ] 2. Protected download
- [ ] 3. Row-level authorization
- [ ] 4. Safe DTO responses
- [ ] 5. Rate limiting
- [ ] 6. Monitoring/audit

