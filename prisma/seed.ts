import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample news posts
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

  // Create sample success stories
  await prisma.successStory.createMany({
    data: [
      {
        title: 'From Member to Entrepreneur',
        memberName: 'Maria Santos',
        category: 'Business Success',
        description: 'Maria Santos shares how SJPMC\'s loan program helped her start her own business.',
        status: 'published'
      },
      {
        title: 'Homeownership Dream Achieved',
        memberName: 'Juan dela Cruz',
        category: 'Home Loan',
        description: 'Juan shares his journey to homeownership with the help of SJPMC\'s housing loan program.',
        status: 'published'
      }
    ]
  });

  // Create sample PMES sessions
  await prisma.pMESSession.createMany({
    data: [
      {
        branch: 'SAN JOSE - MAIN OFFICE',
        date: new Date('2024-12-15'),
        time: '9:00 AM',
        capacity: 50,
        registered: 32,
        status: 'active'
      },
      {
        branch: 'MIAGAO OFFICE',
        date: new Date('2024-12-16'),
        time: '1:00 PM',
        capacity: 30,
        registered: 18,
        status: 'active'
      },
      {
        branch: 'OTON OFFICE',
        date: new Date('2024-12-18'),
        time: '9:30 AM',
        capacity: 35,
        registered: 22,
        status: 'active'
      },
      {
        branch: 'GUIMARAS OFFICE',
        date: new Date('2024-12-21'),
        time: '9:00 AM',
        capacity: 25,
        registered: 15,
        status: 'active'
      }
    ]
  });

  // Create sample member registrations
  await prisma.memberRegistration.createMany({
    data: [
      {
        name: 'Ana Garcia',
        email: 'ana.garcia@email.com',
        phone: '+63 917 123 4567',
        branch: 'SAN JOSE - MAIN OFFICE',
        status: 'approved'
      },
      {
        name: 'Carlos Reyes',
        email: 'carlos.reyes@email.com',
        phone: '+63 918 234 5678',
        branch: 'MIAGAO OFFICE',
        status: 'approved'
      },
      {
        name: 'Rosa Mendoza',
        email: 'rosa.mendoza@email.com',
        phone: '+63 919 345 6789',
        branch: 'OTON OFFICE',
        status: 'pending'
      },
      {
        name: 'Pedro Santos',
        email: 'pedro.santos@email.com',
        phone: '+63 920 456 7890',
        branch: 'GUIMARAS OFFICE',
        status: 'approved'
      }
    ]
  });

  // Create sample statistics
  await prisma.statistic.createMany({
    data: [
      {
        key: 'total_members',
        value: 2847,
        label: 'Total Members',
        description: 'Total number of approved members',
        category: 'members'
      },
      {
        key: 'seminars_conducted',
        value: 156,
        label: 'Seminars Conducted',
        description: 'Total PMES seminars conducted',
        category: 'pmes'
      },
      {
        key: 'average_rating',
        value: 48, // 4.8 * 10 for integer storage
        label: 'Average Rating',
        description: 'Average seminar rating out of 5',
        category: 'feedback'
      },
      {
        key: 'success_rate',
        value: 94,
        label: 'Success Rate',
        description: 'Percentage of approved registrations',
        category: 'registrations'
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
