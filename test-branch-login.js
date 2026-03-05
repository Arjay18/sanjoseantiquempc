const fetch = require('node-fetch');

// Test branch login
async function testBranchLogin() {
  console.log('Testing branch login...');
  
  // First, try to sign in
  const loginResponse = await fetch('https://sanjoseantiquempc.vercel.app/api/auth/callback/credentials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'sanjose_admin',
      password: 'sanjoseadmin',
      redirect: false,
    }),
  });
  
  const loginData = await loginResponse.json();
  console.log('Login response:', loginData);
  
  // Try to get session
  const sessionResponse = await fetch('https://sanjoseantiquempc.vercel.app/api/auth/session');
  const sessionData = await sessionResponse.json();
  console.log('Session:', sessionData);
}

testBranchLogin().catch(console.error);
