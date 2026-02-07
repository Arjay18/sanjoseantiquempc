const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const username = 'sanjose_admin';
  const password = 'sanjoseadmin';
  const branch = 'sanjose';
  const role = 'branch';

  const hashedPassword = await bcrypt.hash(password, 10);

  // Upsert to avoid duplicates
  await prisma.branchUser.upsert({
    where: { username },
    update: {
      password: hashedPassword,
      branch,
      role,
    },
    create: {
      username,
      password: hashedPassword,
      branch,
      role,
    },
  });

  console.log('San Jose branch user added/updated successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
