import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // San Jose branch user
  await prisma.branchUser.upsert({
    where: { username: 'sanjose_admin' },
    update: {
      password: await bcrypt.hash('sanjoseadmin', 10),
      branch: 'sanjose',
      role: 'branch',
    },
    create: {
      username: 'sanjose_admin',
      password: await bcrypt.hash('sanjoseadmin', 10),
      branch: 'sanjose',
      role: 'branch',
    },
  });

  // Miagao branch user
  await prisma.branchUser.upsert({
    where: { username: 'miagao_admin' },
    update: {
      password: await bcrypt.hash('miagaoadmin', 10),
      branch: 'miagao',
      role: 'branch',
    },
    create: {
      username: 'miagao_admin',
      password: await bcrypt.hash('miagaoadmin', 10),
      branch: 'miagao',
      role: 'branch',
    },
  });

  console.log('San Jose and Miagao branch users added/updated successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
