const fetch = require('node-fetch');

async function testLoanApplicationAPI() {
  try {
    console.log('Testing loan application submission...');

    // Test data for loan application
    const testFormData = {
      name: 'John Doe',
      pbNo: 'PB123456',
      contactNo: '09123456789',
      address: '123 Test Street, Test City',
      loanType: 'Multi-Purpose Loan',
      loanAmount: '50000',
      term: '12',
      purpose: 'Business expansion',
      idType: 'Driver\'s License',
      promissoryNoteAmount: '50000',
      promissoryNoteTerm: '12 months',
      promissoryNotePaymentSchedule: 'monthly',
      promissoryNoteStartingOn: '2024-01-01',
      assignmentAmount: '50000',
      assignmentPbNo: 'PB123456',
      regularSavings: '10000',
      ultimaSavings: '5000',
      alkansyaSavings: '2000',
      timeDeposit: '15000',
      otherDeposits: '3000',
      shareCapital: '1000',
      signatureDate: '2024-01-01',
      memberIncome: '25000',
      spouseIncome: '15000',
      otherIncome: '5000',
      businessIncome: '10000',
      foodExpense: '8000',
      clothingExpense: '2000',
      shelterExpense: '5000',
      educationExpense: '3000',
      electricWaterExpense: '1500',
      helperExpense: '2000',
      loanRepaymentExpense: '5000',
      miscellaneousExpense: '3000',
      declarationAccepted: true,
      termsAccepted: true
    };

    // Test POST request to submit loan application
    console.log('Submitting loan application...');
    const submitResponse = await fetch('http://localhost:3001/api/admin/loan-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData: testFormData }),
    });

    if (submitResponse.ok) {
      const submitData = await submitResponse.json();
      console.log('✅ Loan application submitted successfully!');
      console.log('Application ID:', submitData.id);

      // Test GET request to fetch loan applications
      console.log('Fetching loan applications...');
      const getResponse = await fetch('http://localhost:3001/api/admin/loan-applications');
      if (getResponse.ok) {
        const getData = await getResponse.json();
        console.log('✅ Loan applications fetched successfully!');
        console.log('Total applications:', getData.applications.length);
        console.log('First application:', JSON.stringify(getData.applications[0], null, 2));
      } else {
        console.log('❌ Failed to fetch loan applications:', getResponse.status);
      }

    } else {
      const errorData = await submitResponse.json();
      console.log('❌ Loan application submission failed:', submitResponse.status, errorData);
    }

  } catch (error) {
    console.error('❌ Error testing loan application API:', error.message);
  }
}

testLoanApplicationAPI();
