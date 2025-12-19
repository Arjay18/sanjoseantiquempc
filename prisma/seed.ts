// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear previous data
  await prisma.newsPost.deleteMany();
  await prisma.successStory.deleteMany();
  await prisma.pMESSession.deleteMany();
  await prisma.memberRegistration.deleteMany();
  await prisma.statistic.deleteMany();

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
