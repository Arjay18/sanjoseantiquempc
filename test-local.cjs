const fetch = require('node-fetch');

const testData = {
  name: 'Test User',
  pbNo: 'PB123457',
  contactNo: '09123456789',
  address: '123 Test Street',
  loanType: 'Regular',
  loanAmount: '50000',
  term: '12',
  purpose: 'Business',
  branch: 'sanjose'
};

fetch('http://localhost:3000/api/loan-applications', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ formData: testData })
})
.then(res => res.json())
.then(data => console.log('Success:', JSON.stringify(data, null, 2)))
.catch(err => console.error('Error:', err));
