// Test for duplicate application
const testDataDuplicate = {
  name: 'Test User',
  pbNo: 'PB123459',  // This was already used in first test
  contactNo: '09123456789',
  address: '123 Test Street',
  loanType: 'Regular',  // Same loan type
  loanAmount: '60000',
  term: '12',
  purpose: 'Business',
  branch: 'sanjose'  // Same branch
};

fetch('https://sanjoseantiquempc.vercel.app/api/loan-applications', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ formData: testDataDuplicate })
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
