import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fixBranchData() {
  try {
    console.log('Checking loan applications...\n');
    
    // Get all loan applications
    const applications = await prisma.loanApplication.findMany({
      select: {
        id: true,
        name: true,
        branch: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('Total applications:', applications.length);
    console.log('\nApplications by branch:');
    
    const byBranch = {};
    applications.forEach(app => {
      if (!byBranch[app.branch]) {
        byBranch[app.branch] = [];
      }
      byBranch[app.branch].push(app);
    });

    Object.keys(byBranch).forEach(branch => {
      console.log(`\n${branch.toUpperCase()}: ${byBranch[branch].length} applications`);
      byBranch[branch].forEach(app => {
        console.log(`  - ${app.name} (${app.id}) - ${app.createdAt.toISOString()}`);
      });
    });

    console.log('\n---\nIf you see an application in the wrong branch, note its ID and we can fix it.\n');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixBranchData();
