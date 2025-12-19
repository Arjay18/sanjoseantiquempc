# Database Migration to PostgreSQL

## Steps to Complete Migration

1. **Update .env file locally:**
   - Add or update the DATABASE_URL:
     ```
     DATABASE_URL="postgresql://postgres:Sjmpc@20251@db.slenvyyycqkqtajfcxmx.supabase.co:5432/postgres"
     ```

2. **Update Prisma Schema:**
   - Change datasource from SQLite to PostgreSQL (already done).

3. **Push Schema to Database:**
   - Run `npx prisma db push` to create tables in PostgreSQL.

4. **Set Environment Variable in Vercel:**
   - Go to Vercel dashboard > Project > Settings > Environment Variables
   - Add DATABASE_URL with the same value as above.

5. **Redeploy the Application:**
   - Push changes to GitHub to trigger a new deployment.

6. **Test News Posting:**
   - After deployment, try creating a news post on the live site.

## Notes
- SQLite was used locally, but PostgreSQL is required for Vercel deployment.
- All existing data in SQLite will not be migrated; start fresh with PostgreSQL.
