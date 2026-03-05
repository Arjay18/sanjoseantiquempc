// This mimics what the frontend loan-application form sends
const testDataFromFrontend = {
  // Basic Information
  name: 'Test User',
  passbookNo: 'PB123460',
  pbNo: 'PB123460',  // frontend maps passbookNo to pbNo
  address: '123 Test Street',
  email: 'test@email.com',
  contactNo: '09123456789',
  loanType: 'Regular',
  idType: '',
  term: '12',
  amountApplied: '50000',
  pesosOnly: '',
  purpose: 'Business',
  amountInWords: '',
  amountInPesos: '',
  savingsDepositRegular: '',
  savingsDepositUltima: '',
  savingsDepositAlkansya: '',
  timeDeposit: '',
  otherDeposits: '',
  branch: 'sanjose',
  shareCapital: '',
  incomeMember: '',
  incomeSpouse: '',
  incomeOtherFamily: '',
  incomeBusiness: '',
  otherIncome: '',
  totalFamilyIncome: '',
  food: '',
  clothing: '',
  shelter: '',
  education: '',
  electricWaterBills: '',
  helper: '',
  loanRepayments: '',
  miscellaneousExpense: '',
  totalFamilyExpenses: '',
  netIncome: '',
  // Declaration
  declarationAccepted: true,
  termsAccepted: true,
  // Requirements file uploads - these are null from frontend
  validIDsAndSignatures: null,
  depositSlipOrEwallet: null,
  memberWithIDAndSlip: null,
  // This is what frontend adds
  loanAmount: '50000',  // This overrides amountApplied in the payload
};

fetch('https://sanjoseantiquempc.vercel.app/api/loan-applications', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ formData: testDataFromFrontend })
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
