// Test with missing idType field
const testDataMissingIdType = {
  name: 'Test User 3',
  pbNo: 'PB123461',
  contactNo: '09123456789',
  address: '123 Test Street',
  loanType: 'Emergency',  // Different loan type to avoid duplicate
  loanAmount: '30000',
  term: '6',
  purpose: 'Emergency',
  branch: 'sanjose'
  // Note: idType is missing
};

fetch('https://sanjoseantiquempc.vercel.app/api/loan-applications', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ formData: testDataMissingIdType })
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
