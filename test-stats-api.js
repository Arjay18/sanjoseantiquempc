const fetch = require('node-fetch');

async function testStatsAPI() {
  try {
    console.log('Testing stats API...');
    const response = await fetch('http://localhost:3001/api/admin/stats');
    const data = await response.json();

    if (response.ok) {
      console.log('✅ Stats API is working!');
      console.log('Response:', JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Stats API failed:', response.status, data);
    }
  } catch (error) {
    console.error('❌ Error testing stats API:', error.message);
  }
}

testStatsAPI();
