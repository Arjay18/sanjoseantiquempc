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

  // Seed branch users
  await prisma.user.createMany({
    data: [
      {
        username: 'miagao_admin',
        password: '$2b$10$gsTPwPwIE76QAmVc.MEKq.8X0UVC428ixjYnCgv3Z6DsJ2Me3X0xS',
        branch: 'miagao',
        role: 'branch'
      },
      {
        username: 'oton_admin',
        password: '$2b$10$0tFikMSW4YHfZEugRB1Qled50RoeQUhzIIO2lr79WeX9aj6p7RzCu',
        branch: 'oton',
        role: 'branch'
      },
      {
        username: 'guimaras_admin',
        password: '$2b$10$tbkC2td1c8VjNY1xmm4hnOb95vbNabDl1RsHpNkbfrhuiw4NH6Z1K',
        branch: 'guimaras',
        role: 'branch'
      },
      {
        username: 'sanjose_admin',
        password: '$2b$10$o0UvDwjLhCtdXyvB38icYesw7pQCtg97KyfoG2YEA4oefZg4N8tK6',
        branch: 'sanjose',
        role: 'branch'
      }
    ]
  });

  // Then insert seed data
  await prisma.newsPost.createMany({
    data: [
      {
        title: 'SJPMC Annual General Meeting 2024',
        content: 'Join us for our annual general meeting where we will discuss the cooperative\'s achievements and future plans.',
        status: 'published',
        slug: 'annual-general-meeting-2024',
        author: 'SJPMC Admin'
      },
      {
        title: 'New Loan Programs Now Available',
        content: 'We are excited to announce new loan programs designed to help our members achieve their financial goals.',
        status: 'published',
        slug: 'new-loan-programs-2024',
        author: 'SJPMC Admin'
      }
    ]
  });

  // Seed a test loan application
  await prisma.loanApplication.create({
    data: {
      name: 'Test User',
      pbNo: 'PB123456',
      contactNo: '09171234567',
      email: 'testuser@example.com',
      address: '123 Test St, Test City',
      branch: 'sanjose',
      loanType: 'personal',
      idType: 'passport',
      loanAmount: 10000,
      term: 12,
      purpose: 'Test loan application',
      // Optional fields can be omitted or set to null
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
