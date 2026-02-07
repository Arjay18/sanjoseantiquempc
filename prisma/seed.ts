// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  // Clear previous data, ignore errors if tables do not exist
  try { await prisma.newsPost.deleteMany(); } catch (e) { console.warn('newsPost table not found, skipping.'); }
  try { await prisma.successStory.deleteMany(); } catch (e) { console.warn('successStory table not found, skipping.'); }
  try { await prisma.pMESSession.deleteMany(); } catch (e) { console.warn('pMESSession table not found, skipping.'); }
  try { await prisma.memberRegistration.deleteMany(); } catch (e) { console.warn('memberRegistration table not found, skipping.'); }
  try { await prisma.statistic.deleteMany(); } catch (e) { console.warn('statistic table not found, skipping.'); }
  try { await prisma.user.deleteMany(); } catch (e) { console.warn('user table not found, skipping.'); }
  try { await prisma.loanApplication.deleteMany(); } catch (e) { console.warn('loanApplication table not found, skipping.'); }

    data: [
      {
        title: 'SJPMC Annual General Meeting 2024',
        status: 'published',
        slug: 'annual-general-meeting-2024',
        author: 'SJPMC Admin'
      },
      {
        title: 'New Loan Programs Now Available',
        status: 'published',
        slug: 'new-loan-programs-2024',
        author: 'SJPMC Admin'
      }
    ]
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
