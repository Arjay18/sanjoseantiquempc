const fetch = require('node-fetch');

async function testStatsAPI() {
  console.log('Testing Stats API...');

  try {
    const response = await fetch('http://localhost:3000/api/admin/stats');
    const data = await response.json();

    if (response.ok) {
      console.log('✅ Stats API is working!');
      console.log('Response:', JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Stats API returned error:', response.status);
      console.log('Error:', data);
    }
  } catch (error) {
    console.log('❌ Failed to connect to Stats API:', error.message);
    console.log('Make sure the development server is running with: npm run dev');
  }
}

testStatsAPI();
