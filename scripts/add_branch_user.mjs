import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding branch users...');

  // Create branch users with hashed passwords
  const branchUsers = [
    {
      username: 'sanjose_admin',
      password: 'sanjoseadmin',
      branch: 'sanjose',
      role: 'branch',
    },
    {
      username: 'miagao_admin',
      password: 'miagaoadmin',
      branch: 'miagao',
      role: 'branch',
    },
    {
      username: 'oton_admin',
      password: 'otonadmin',
      branch: 'oton',
      role: 'branch',
    },
    {
      username: 'guimaras_admin',
      password: 'guimarasadmin',
      branch: 'guimaras',
      role: 'branch',
    },
  ];

  for (const user of branchUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    
    try {
      const existing = await prisma.branchUser.findUnique({
        where: { username: user.username },
      });

      if (existing) {
        console.log(`User ${user.username} already exists, updating...`);
        await prisma.branchUser.update({
          where: { username: user.username },
          data: {
            password: hashedPassword,
            branch: user.branch,
            role: user.role,
          },
        });
      } else {
        await prisma.branchUser.create({
          data: {
            username: user.username,
            password: hashedPassword,
            branch: user.branch,
            role: user.role,
          },
        });
      }
      console.log(`Created/updated branch user: ${user.username} for ${user.branch} branch`);
    } catch (error) {
      console.error(`Error creating user ${user.username}:`, error);
    }
  }

  console.log('Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
