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
=======
# Database Migration to Render PostgreSQL

## Steps to Complete Migration

1. **Create Render PostgreSQL Database:**
   - Go to https://render.com and create an account
   - Create a new PostgreSQL service
   - Copy the "External Database URL" from the dashboard

2. **Update .env file locally:**
   - Copy `.env.example` to `.env`
   - Set DATABASE_URL with your Render PostgreSQL connection string:
     ```
     DATABASE_URL="postgresql://username:password@host:5432/database"
     ```

3. **Update Prisma Schema:**
   - Change datasource from SQLite to PostgreSQL (already done).

4. **Push Schema to Database:**
   - Run `npx prisma generate`
   - Run `npx prisma db push` to create tables in PostgreSQL.

5. **Set Environment Variable in Vercel:**
   - Go to Vercel dashboard > Project > Settings > Environment Variables
   - Add DATABASE_URL with the same Render connection string
   - Redeploy the application

6. **Test Database Connection:**
   - Test API endpoints locally with `npm run dev`
   - Verify data persistence after deployment

## Notes
- Render PostgreSQL provides connection pooling suitable for serverless environments
- Keep your Next.js frontend on Vercel for optimal performance
- Database will persist data across deployments unlike SQLite
- All existing SQLite data will not be migrated; start fresh with PostgreSQL
