'use client';

import { useState, useEffect } from 'react';
import { Wallet, AlertTriangle, User, FileText, CreditCard, Home, Building2 } from 'lucide-react';

export default function LoanApplication() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [fileNames, setFileNames] = useState({
    validIDsAndSignatures: '',
    depositSlipOrEwallet: '',
    memberWithIDAndSlip: '',
  });
  // Wizard step logic
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    passbookNo: '',
    pbNo: '', // for backend mapping
    address: '',
    email: '',
    contactNo: '',
    loanType: '',
    idType: '',
    term: '',
    amountApplied: '',
    pesosOnly: '',
    purpose: '',
    amountInWords: '',
    amountInPesos: '',
    savingsDepositRegular: '',
    savingsDepositUltima: '',
    savingsDepositAlkansya: '',
    timeDeposit: '',
    otherDeposits: '',
    branch: '',
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
    declarationAccepted: false,
    termsAccepted: false,
    // Requirements file uploads
    validIDsAndSignatures: null, // Scanned copy of 2 Valid IDs with 3 specimen signatures
    depositSlipOrEwallet: null, // Scanned copy of validated deposit slip or screenshot of verified e-wallet account
    memberWithIDAndSlip: null, // Picture of member borrower holding valid ID and validated deposit slip
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const files = (e.target as HTMLInputElement).files;

    setFormData(prev => {
      if (name === 'passbookNo') {
        return {
          ...prev,
          passbookNo: value,
          pbNo: value
        };
      }
      if (type === 'file') {
        setFileNames(f => ({ ...f, [name]: files && files[0] ? files[0].name : '' }));
      }
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : type === 'file' ? (files?.[0] || null) : value
      };
    });
  };

  // Auto-compute Total Family Income, Expenses, and Net Income
  useEffect(() => {
    const totalIncome =
      (parseFloat(formData.incomeMember || '0') || 0) +
      (parseFloat(formData.incomeSpouse || '0') || 0) +
      (parseFloat(formData.incomeOtherFamily || '0') || 0) +
      (parseFloat(formData.incomeBusiness || '0') || 0) +
      (parseFloat(formData.otherIncome || '0') || 0);

    const totalExpenses =
      (parseFloat(formData.food || '0') || 0) +
      (parseFloat(formData.clothing || '0') || 0) +
      (parseFloat(formData.shelter || '0') || 0) +
      (parseFloat(formData.education || '0') || 0) +
      (parseFloat(formData.electricWaterBills || '0') || 0) +
      (parseFloat(formData.helper || '0') || 0) +
      (parseFloat(formData.loanRepayments || '0') || 0) +
      (parseFloat(formData.miscellaneousExpense || '0') || 0);

    const netIncome = totalIncome - totalExpenses;

    setFormData(prev => ({
      ...prev,
      totalFamilyIncome: totalIncome ? totalIncome.toFixed(2) : '',
      totalFamilyExpenses: totalExpenses ? totalExpenses.toFixed(2) : '',
      netIncome: netIncome ? netIncome.toFixed(2) : '',
    }));
  }, [
    formData.incomeMember,
    formData.incomeSpouse,
    formData.incomeOtherFamily,
    formData.incomeBusiness,
    formData.otherIncome,
    formData.food,
    formData.clothing,
    formData.shelter,
    formData.education,
    formData.electricWaterBills,
    formData.helper,
    formData.loanRepayments,
    formData.miscellaneousExpense
  ]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Application submitted successfully!');
    }, 2000);
  };

  // Step navigation handlers
  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const goToStep = (n: number) => setCurrentStep(n);

  // Steps definition for progress bar
  const steps = [
    { number: 1, title: 'Personal', description: 'Personal Info', icon: User },
    { number: 2, title: 'Loan', description: 'Loan Details', icon: CreditCard },
    { number: 3, title: 'Financial', description: 'Income & Expenses', icon: Wallet },
    { number: 4, title: 'Requirements', description: 'Upload & Review', icon: FileText },
  ];

  // Main return block: single form, all fields visible
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-yellow-100 py-12">
      <div className="max-w-2xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight">
            <span className="inline-block align-middle mr-2"><FileText className="inline w-8 h-8 text-blue-600" /></span>
            Loan <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Application</span>
          </h1>
          <p className="text-gray-600 text-lg">San Jose Multi-Purpose Cooperative</p>
        </div>
        {submitMessage && (
          <div className="mb-4 p-3 rounded-xl bg-green-100 text-green-800 text-center font-semibold border border-green-300 shadow">
            {submitMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-10 bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-100">
          {/* Basic Information */}
          <div>
            // Main return block: multi-step wizard
            return (
              <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-yellow-100 py-12">
                <div className="max-w-2xl mx-auto px-2 sm:px-4">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight">
                      <span className="inline-block align-middle mr-2"><FileText className="inline w-8 h-8 text-blue-600" /></span>
                      Loan <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Application</span>
                    </h1>
                    <p className="text-gray-600 text-lg">San Jose Multi-Purpose Cooperative</p>
                  </div>
                  {/* Progress Steps */}
                  <div className="flex items-center gap-4 mb-8 justify-center">
                    {steps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${currentStep > index + 1 ? 'border-green-500' : 'border-gray-300'} bg-white`}>
                          {currentStep > index + 1 ? (
                            <span className="text-green-500 font-bold">&#10003;</span>
                          ) : (
                            <span className="text-gray-400 font-bold">{index + 1}</span>
                          )}
                        </div>
                        <div className="mt-1 text-xs text-gray-700 text-center w-20">{step.title}</div>
                      </div>
                    ))}
                  </div>
                  {submitMessage && (
                    <div className="mb-4 p-3 rounded-xl bg-green-100 text-green-800 text-center font-semibold border border-green-300 shadow">
                      {submitMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-8 bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-100">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <User className="w-6 h-6 text-blue-500" />
                          <h2 className="text-lg font-bold text-blue-900">Basic Information</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="input input-bordered bg-blue-50 focus:bg-white" required />
                          <input name="passbookNo" value={formData.passbookNo} onChange={handleInputChange} placeholder="Passbook No. (as in passbook)" className="input input-bordered bg-blue-50 focus:bg-white" required />
                          <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="input input-bordered bg-blue-50 focus:bg-white" required />
                          <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email (e.g. you@email.com)" className="input input-bordered bg-blue-50 focus:bg-white" type="email" required />
                          <input name="contactNo" value={formData.contactNo} onChange={handleInputChange} placeholder="Contact No. (09xx...)" className="input input-bordered bg-blue-50 focus:bg-white" required />
                          <input name="branch" value={formData.branch} onChange={handleInputChange} placeholder="Branch (e.g. San Jose)" className="input input-bordered bg-blue-50 focus:bg-white" required />
                        </div>
                      </div>
                    )}
                    {/* Step 2: Loan Details */}
                    {currentStep === 2 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2 mt-6">
                          <CreditCard className="w-6 h-6 text-yellow-500" />
                          <h2 className="text-lg font-bold text-yellow-900">Loan Details</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input name="loanType" value={formData.loanType} onChange={handleInputChange} placeholder="Loan Type (e.g. Regular, Emergency)" className="input input-bordered bg-yellow-50 focus:bg-white" required />
                          <input name="term" value={formData.term} onChange={handleInputChange} placeholder="Term (months)" className="input input-bordered bg-yellow-50 focus:bg-white" required />
                          <input name="amountApplied" value={formData.amountApplied} onChange={handleInputChange} placeholder="Amount Applied (₱)" className="input input-bordered bg-yellow-50 focus:bg-white" required />
                          <input name="purpose" value={formData.purpose} onChange={handleInputChange} placeholder="Purpose of Loan" className="input input-bordered bg-yellow-50 focus:bg-white" required />
                        </div>
                      </div>
                    )}
                    {/* Step 3: Financial Information */}
                    {currentStep === 3 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2 mt-6">
                          <Wallet className="w-6 h-6 text-green-600" />
                          <h2 className="text-lg font-bold text-green-900">Financial Information</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input name="incomeMember" value={formData.incomeMember} onChange={handleInputChange} placeholder="Income (Member)" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="incomeSpouse" value={formData.incomeSpouse} onChange={handleInputChange} placeholder="Income (Spouse)" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="incomeOtherFamily" value={formData.incomeOtherFamily} onChange={handleInputChange} placeholder="Other Family Income" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="incomeBusiness" value={formData.incomeBusiness} onChange={handleInputChange} placeholder="Business Income" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="otherIncome" value={formData.otherIncome} onChange={handleInputChange} placeholder="Other Income" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="totalFamilyIncome" value={formData.totalFamilyIncome} readOnly placeholder="Total Family Income (auto)" className="input input-bordered bg-gray-100 font-semibold" />
                          <input name="food" value={formData.food} onChange={handleInputChange} placeholder="Food" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="clothing" value={formData.clothing} onChange={handleInputChange} placeholder="Clothing" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="shelter" value={formData.shelter} onChange={handleInputChange} placeholder="Shelter" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="education" value={formData.education} onChange={handleInputChange} placeholder="Education" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="electricWaterBills" value={formData.electricWaterBills} onChange={handleInputChange} placeholder="Electric/Water Bills" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="helper" value={formData.helper} onChange={handleInputChange} placeholder="Helper" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="loanRepayments" value={formData.loanRepayments} onChange={handleInputChange} placeholder="Loan Repayments" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="miscellaneousExpense" value={formData.miscellaneousExpense} onChange={handleInputChange} placeholder="Miscellaneous Expense" className="input input-bordered bg-green-50 focus:bg-white" />
                          <input name="totalFamilyExpenses" value={formData.totalFamilyExpenses} readOnly placeholder="Total Family Expenses (auto)" className="input input-bordered bg-gray-100 font-semibold" />
                          <input name="netIncome" value={formData.netIncome} readOnly placeholder="Net Income (auto)" className="input input-bordered bg-gray-100 font-semibold" />
                        </div>
                      </div>
                    )}
                    {/* Step 4: Requirements & Declaration */}
                    {currentStep === 4 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2 mt-6">
                          <Building2 className="w-6 h-6 text-purple-600" />
                          <h2 className="text-lg font-bold text-purple-900">Requirements</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                            <label className="block mb-1 font-medium">Scanned copy of 2 Valid IDs with 3 specimen signatures</label>
                            <input type="file" name="validIDsAndSignatures" onChange={handleInputChange} className="input input-bordered" />
                            {fileNames.validIDsAndSignatures && <div className="text-xs text-gray-500 mt-1">Selected: {fileNames.validIDsAndSignatures}</div>}
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                            <label className="block mb-1 font-medium">Scanned copy of validated deposit slip or screenshot of verified e-wallet account</label>
                            <input type="file" name="depositSlipOrEwallet" onChange={handleInputChange} className="input input-bordered" />
                            {fileNames.depositSlipOrEwallet && <div className="text-xs text-gray-500 mt-1">Selected: {fileNames.depositSlipOrEwallet}</div>}
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100 sm:col-span-2">
                            <label className="block mb-1 font-medium">Picture of member borrower holding valid ID and validated deposit slip</label>
                            <input type="file" name="memberWithIDAndSlip" onChange={handleInputChange} className="input input-bordered" />
                            {fileNames.memberWithIDAndSlip && <div className="text-xs text-gray-500 mt-1">Selected: {fileNames.memberWithIDAndSlip}</div>}
                          </div>
                        </div>
                        {/* Declaration and Consent */}
                        <div className="space-y-4 mt-8">
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-gray-700 shadow-sm">
                            <h3 className="font-bold mb-2 text-blue-900 flex items-center gap-2"><FileText className="w-5 h-5 text-blue-500" /> Declaration and Consent</h3>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>I hereby declare that the information provided in this application is true and correct to the best of my knowledge.</li>
                              <li>I authorize San Jose Multi-Purpose Cooperative to verify any information provided in this form.</li>
                              <li>I consent to the collection, use, and processing of my personal data for the purpose of evaluating my loan application, in accordance with the Data Privacy Act of 2012.</li>
                              <li>I understand that any false statement may result in the denial or cancellation of my loan application.</li>
                            </ul>
                          </div>
                          <div className="flex items-start mt-2">
                            <input
                              type="checkbox"
                              id="declarationAccepted"
                              name="declarationAccepted"
                              checked={formData.declarationAccepted}
                              onChange={handleInputChange}
                              className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                              required
                            />
                            <label htmlFor="declarationAccepted" className="ml-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                              I have read, understand and I agree with the above Declaration and Consent and Data Privacy Statement <span className="text-red-500">*</span>
                            </label>
                          </div>
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              id="termsAccepted"
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleInputChange}
                              className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                              required
                            />
                            <label htmlFor="termsAccepted" className="ml-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                              I have read, understand and agree to the Terms and Conditions of SJMPC <span className="text-red-500">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      {currentStep > 1 ? (
                        <button type="button" className="btn btn-secondary" onClick={prevStep}>
                          Previous
                        </button>
                      ) : <div />}
                      {currentStep < totalSteps ? (
                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                          Next
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                      )}
                    </div>
                  </form>

                </div>
              </div>
            );
          }
        </div>
      </div>
    </div>
  );
}

