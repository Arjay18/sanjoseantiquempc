// Test creating branch users
const branchUsers = [
  { username: 'sanjose_admin', password: 'sanjoseadmin', branch: 'sanjose' },
  { username: 'miagao_admin', password: 'miagaoadmin', branch: 'miagao' },
  { username: 'oton_admin', password: 'otonadmin', branch: 'oton' },
  { username: 'guimaras_admin', password: 'guimarasadmin', branch: 'guimaras' },
];

async function createBranchUsers() {
  for (const user of branchUsers) {
    console.log(`Creating branch user: ${user.username} for ${user.branch}...`);
    const res = await fetch('https://sanjoseantiquempc.vercel.app/api/admin/create-branch-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log('Result:', data);
  }
}

async function listBranchUsers() {
  console.log('Listing branch users...');
  const res = await fetch('https://sanjoseantiquempc.vercel.app/api/admin/create-branch-user');
  const data = await res.json();
  console.log('Branch users:', data);
}

createBranchUsers().then(() => listBranchUsers()).catch(console.error);
