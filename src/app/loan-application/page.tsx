'use client';

import { useState, useEffect } from 'react';
import { PhilippinePeso, Building, Heart, Clock, CheckCircle, ArrowRight, BookOpen, Phone, Home, Award, Building2, Tractor, Shield, Wallet, Wheat, AlertTriangle, User, FileText, CreditCard, PenTool, ChevronRight, ChevronLeft } from 'lucide-react';

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    passbookNo: '',
    address: '',
    contactNo: '',
    loanType: '',
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
    assignmentPassbookNo: '',
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

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? (files?.[0] || null) : value
    }));
  };

  // Auto-compute Net Income
  useEffect(() => {
    const totalIncome = (parseFloat(formData.incomeMember || '0') +
                        parseFloat(formData.incomeSpouse || '0') +
                        parseFloat(formData.otherIncome || '0') +
                        parseFloat(formData.incomeBusiness || '0'));

    const totalExpenses = (parseFloat(formData.food || '0') +
                          parseFloat(formData.clothing || '0') +
                          parseFloat(formData.shelter || '0') +
                          parseFloat(formData.education || '0') +
                          parseFloat(formData.electricWaterBills || '0') +
                          parseFloat(formData.helper || '0') +
                          parseFloat(formData.loanRepayments || '0') +
                          parseFloat(formData.miscellaneousExpense || '0'));

    const netIncome = totalIncome - totalExpenses;

    setFormData(prev => ({
      ...prev,
      netIncome: netIncome.toFixed(2)
    }));
  }, [
    formData.incomeMember,
    formData.incomeSpouse,
    formData.otherIncome,
    formData.incomeBusiness,
    formData.food,
    formData.clothing,
    formData.shelter,
    formData.education,
    formData.electricWaterBills,
    formData.helper,
    formData.loanRepayments,
    formData.miscellaneousExpense
  ]);



  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields (update to match new formData)
    const requiredFields = [
      'name', 'passbookNo', 'contactNo', 'address', 'loanType', 'term', 'amountApplied', 'purpose'
    ];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Validate checkboxes
    if (!formData.declarationAccepted) {
      alert('Please accept the Declaration and Consent.');
      return;
    }

    if (!formData.termsAccepted) {
      alert('Please accept the Terms and Conditions.');
      return;
    }

    setIsSubmitting(true);

    try {

      console.log('Starting loan application submission...', {
        name: formData.name,
        passbookNo: formData.passbookNo,
        loanType: formData.loanType,
        amountApplied: formData.amountApplied
      });


      // Convert file to base64 if present (no idFile in new formData, so skip)
      const processedFormData = { ...formData } as Record<string, unknown>;

      // Generate PDF first with form data
      const pdfResponse = await fetch('/api/fill-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: processedFormData }),
      });

      if (!pdfResponse.ok) {
        alert('Failed to generate PDF. Please try again.');
        return;
      }

      const pdfBlob = await pdfResponse.blob();

      // Convert PDF blob to base64 for database storage
      const pdfBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = (reader.result as string).split(',')[1];
          resolve(base64String);
        };
        reader.readAsDataURL(pdfBlob);
      });

      // Add PDF to form data
      processedFormData.pdfFile = pdfBase64;

      // Submit loan application with PDF to database
      const submitResponse = await fetch('/api/loan-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: processedFormData }),
      });

      console.log('Submission response status:', submitResponse.status);

      if (submitResponse.ok) {
        const result = await submitResponse.json();
        console.log('Application submitted successfully:', result);
        
        // Get branch display name

        alert(`✅ Loan application submitted successfully!\n\nYour application is now pending review.\n\nApplication ID: ${result.id}\nName: ${formData.name}\nLoan Type: ${formData.loanType}\nAmount: ₱${formData.amountApplied}\n\nThank you for choosing San Jose Multi-Purpose Cooperative!`);

        // Reset form and go back to step 1
        setCurrentStep(1);
        setFormData({
          name: '',
          passbookNo: '',
          address: '',
          contactNo: '',
          loanType: '',
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
          assignmentPassbookNo: '',
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
          declarationAccepted: false,
          termsAccepted: false,
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const errorData = await submitResponse.json().catch(() => ({}));
        alert(`❌ Failed to submit application.\n\n${errorData.error || 'Please check your internet connection and try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Wizard navigation functions
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: User, description: 'Basic details' },
    { number: 2, title: 'Loan Details', icon: FileText, description: 'Loan information' },
    { number: 3, title: 'Financial Info', icon: PhilippinePeso, description: 'Income & expenses' },
    { number: 4, title: 'Review', icon: CheckCircle, description: 'Confirm & submit' }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            Loan <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Application</span>
          </h1>
          <p className="text-gray-600">San Jose Multi-Purpose Cooperative</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.number;
              const isCurrent = currentStep === step.number;
              
              return (
                <div key={step.number} className="flex-1 relative">
                  {/* Connector Line */}
                  {index !== steps.length - 1 && (
                    <div className={`absolute top-6 left-1/2 w-full h-1 -z-10 transition-all duration-500 ${
                      isCompleted ? 'bg-gradient-to-r from-blue-600 to-yellow-500' : 'bg-gray-200'
                    }`} />
                  )}
                  
                  {/* Step Circle */}
                  <button
                    onClick={() => goToStep(step.number)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2 ${
                      isCurrent 
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 scale-110' 
                        : isCompleted
                        ? 'bg-gradient-to-br from-yellow-500 to-yellow-600'
                        : 'bg-gray-200 group-hover:bg-gray-300'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className={`w-6 h-6 ${isCurrent || isCompleted ? 'text-white' : 'text-gray-500'}`} />
                      )}
                    </div>
                    <div className="text-center hidden md:block">
                      <div className={`text-xs font-bold ${
                        isCurrent ? 'text-blue-600' : isCompleted ? 'text-yellow-600' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-400">{step.description}</div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <form onSubmit={handleSubmitApplication}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                    <p className="text-gray-600">Tell us about yourself</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Passbook No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="passbookNo"
                      value={formData.passbookNo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="PB-12345"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="09XX-XXX-XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      // Email field removed (not in formData)
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="juan@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Branch <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="assignmentPassbookNo"
                      value={formData.assignmentPassbookNo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Select Branch</option>
                      <option value="sanjose">Main Office - San Jose</option>
                      <option value="miagao">Miagao Branch</option>
                      <option value="oton">Oton Branch</option>
                      <option value="guimaras">Guimaras Branch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Complete Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="House No., Street, Barangay, Municipality, Province"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Loan Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Loan Details</h2>
                    <p className="text-gray-600 dark:text-gray-300">Specify your loan requirements</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Loan Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Select Loan Type</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Educational Loan">Educational Loan</option>
                      <option value="Housing Loan">Housing Loan</option>
                      <option value="Emergency Loan">Emergency Loan</option>
                      <option value="Appliance Loan">Appliance Loan</option>
                      <option value="Livelihood Loan">Livelihood Loan</option>
                      <option value="Agricultural Loan">Agricultural Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Loan Amount <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></span>
                      <input
                        type="number"
                        name="amountApplied"
                        value={formData.amountApplied}
                        onChange={handleInputChange}
                        required
                        min="0"
                        step="0.01"
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="50,000.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Term (Months) <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="term"
                      value={formData.term}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Select Term</option>
                      <option value="6">6 Months</option>
                      <option value="12">12 Months</option>
                      <option value="18">18 Months</option>
                      <option value="24">24 Months</option>
                      <option value="36">36 Months</option>
                      <option value="48">48 Months</option>
                      <option value="60">60 Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Purpose of Loan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Describe the purpose of your loan..."
                  />
                </div>

                {/* Assignment of Deposit */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-100 dark:border-yellow-800">
                  <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-300 mb-4">Assignment of Deposit</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Assignment Amount</label>
                      <input
                        type="number"
                        name="otherDeposits"
                        value={formData.otherDeposits}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Assignment PB No.</label>
                      <input
                        type="text"
                        name="assignmentPassbookNo"
                        value={formData.assignmentPassbookNo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="PB-XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Regular Savings</label>
                      <input
                        type="number"
                        name="savingsDepositRegular"
                        value={formData.savingsDepositRegular}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Ultima Savings</label>
                      <input
                        type="number"
                        name="savingsDepositUltima"
                        value={formData.savingsDepositUltima}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Alkansya Savings</label>
                      <input
                        type="number"
                        name="savingsDepositAlkansya"
                        value={formData.savingsDepositAlkansya}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Time Deposit</label>
                      <input
                        type="number"
                        name="timeDeposit"
                        value={formData.timeDeposit}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Other Deposits</label>
                      <input
                        type="number"
                        name="otherDeposits"
                        value={formData.otherDeposits}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Share Capital</label>
                      <input
                        type="number"
                        name="shareCapital"
                        value={formData.shareCapital}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Financial Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <PhilippinePeso className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Information</h2>
                    <p className="text-gray-600 dark:text-gray-300">Monthly income and expenses</p>
                  </div>
                </div>

                {/* Income Section */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-100 dark:border-green-800">
                  <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-4">Monthly Income</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Member Income</label>
                      <input
                        type="number"
                        name="incomeMember"
                        value={formData.incomeMember}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Spouse Income</label>
                      <input
                        type="number"
                        name="incomeSpouse"
                        value={formData.incomeSpouse}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Other Income</label>
                      <input
                        type="number"
                        name="otherIncome"
                        value={formData.otherIncome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Business Income</label>
                      <input
                        type="number"
                        name="incomeBusiness"
                        value={formData.incomeBusiness}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>

                {/* Expenses Section */}
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-100 dark:border-red-800">
                  <h3 className="text-lg font-bold text-red-900 dark:text-red-300 mb-4">Monthly Expenses</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Food</label>
                      <input
                        type="number"
                        name="food"
                        value={formData.food}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Clothing</label>
                      <input
                        type="number"
                        name="clothing"
                        value={formData.clothing}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Shelter/Rent</label>
                      <input
                        type="number"
                        name="shelter"
                        value={formData.shelter}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Education</label>
                      <input
                        type="number"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Electricity/Water</label>
                      <input
                        type="number"
                        name="electricWaterBills"
                        value={formData.electricWaterBills}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Helper</label>
                      <input
                        type="number"
                        name="helper"
                        value={formData.helper}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Loan Repayment</label>
                      <input
                        type="number"
                        name="loanRepayments"
                        value={formData.loanRepayments}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Miscellaneous</label>
                      <input
                        type="number"
                        name="miscellaneousExpense"
                        value={formData.miscellaneousExpense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>

                {/* Net Income Display */}
                <div className="bg-gradient-to-r from-blue-50 to-yellow-50 dark:from-blue-900/20 dark:to-yellow-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Net Monthly Disposable Income</h3>
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
                      {formData.netIncome || '0.00'}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Review & Submit</h2>
                    <p className="text-gray-600 dark:text-gray-300">Review your application before submitting</p>
                  </div>
                </div>

                {/* Application Summary */}
                <div className="bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-blue-900/20 dark:to-yellow-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Application Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Name:</span>
                      <p className="text-gray-900 dark:text-white">{formData.name || 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">PB No.:</span>
                      <p className="text-gray-900 dark:text-white">{formData.passbookNo || 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Loan Type:</span>
                      <p className="text-gray-900 dark:text-white">{formData.loanType || 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Loan Amount:</span>
                      <p className="text-gray-900 dark:text-white">₱{formData.amountApplied || '0.00'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Term:</span>
                      <p className="text-gray-900 dark:text-white">{formData.term ? `${formData.term} months` : 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Branch:</span>
                      <p className="text-gray-900 dark:text-white">{formData.assignmentPassbookNo || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Declaration & Consent</h3>
                  <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>A.</strong> I hereby declare that the cooperative explained to me the meaning and implications of the terms and conditions
of the promissory note and such documents related to my membership and loan. And I hereby declare that aside
from reading them, I fully understand the terms and conditions of SJMPC Credit Programs and I agree to be bound
by them.
                    </p>
                    <p>
                      <strong>B.</strong> In accordance with the provisions of Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012, I
acknowledge that I have read and understood the SJMPC Privacy Policy. Further, I consent to the collection, use,
access, and processing of my personal and sensitive personal information by SJMPC to process my application for
the loan I availed including verification from the source of such information and for the establishment, exercise, or
defense of SJMPC' legal claim. Furthermore, I consent to the sharing of my personal and loan information to the
bank and its affiliates for the disbursement of said loan.
                    </p>
                    <p>
                      <strong>C.</strong> Pursuant to Republic Act No. 9510, or the Credit Information System Act, and its Implementing Rules and
Regulations (IRR), I am notified and acknowledge to:
1. The regular submission and disclosure of my basic credit data and any updates thereto to the Credit
Information Corporation (CIC); and</p>
<p>2. The sharing of my basic credit data with lenders authorized by the CIC, as well as credit reporting agencies and
accredited outsourced entities, in accordance with applicable laws and regulations.</p>
<p>I have read, understand and I agree with the above Declaration and Consent and Data Privacy Statement, and I
hereby agree to the Disclosure Statement, and Terms and Conditions of the Credit Program of SJMPC.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="declarationAccepted"
                        name="declarationAccepted"
                        checked={formData.declarationAccepted}
                        onChange={handleInputChange}
                        className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
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
                      />
                      <label htmlFor="termsAccepted" className="ml-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                        I have read, understand and agree to the Terms and Conditions of SJMPC <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Warning Notice */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border-2 border-yellow-200 dark:border-yellow-700">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">Before You Submit</p>
                      <p>Please review all information carefully. Once submitted, your application will be processed and a PDF will be generated for the cooperative's records.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t-2 border-gray-200 dark:border-gray-600">
              {/* Back Button */}
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}

              {/* Spacer */}
              <div className="flex-1"></div>

              {/* Next/Submit Button */}
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Next Step
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.declarationAccepted || !formData.termsAccepted}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Progress Indicator */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
}
