'use client';

import { useState, useEffect } from 'react';
import { PhilippinePeso, Building, Heart, Clock, CheckCircle, ArrowRight, BookOpen, Phone, Home, Award, Building2, Tractor, Shield, Wallet, Wheat, AlertTriangle, User, FileText, CreditCard, DollarSign, PenTool, ChevronRight, ChevronLeft } from 'lucide-react';

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    pbNo: '',
    contactNo: '',
    email: '',
    branch: '',
    address: '',
    loanType: '',
    loanAmount: '',
    term: '',
    purpose: '',

    // ID Upload
    idType: '',
    idFile: null as File | null,

    // Promissory Note
    promissoryNoteAmount: '',
    promissoryNoteTerm: '',
    promissoryNotePaymentSchedule: '',
    promissoryNoteStartingOn: '',

    // Assignment of Deposit
    assignmentAmount: '',
    assignmentPbNo: '',
    regularSavings: '',
    ultimaSavings: '',
    alkansyaSavings: '',
    timeDeposit: '',
    otherDeposits: '',
    shareCapital: '',

    // Assignment Signatures - First Set
    assignmentMaker1: '',
    assignmentMaker2: '',
    assignmentCoMaker1: '',
    assignmentCoMaker2: '',
    assignmentWitness1: '',
    assignmentWitness2: '',

    // Signatures - Promissory Note
    makerName1: '',
    makerName2: '',
    coMakerName1: '',
    coMakerName2: '',
    witnessName1: '',
    witnessName2: '',

    // Signatures - Assignment of Deposit
    makerSpouseName: '',
    assignmentCoMakerName1: '',
    assignmentCoMakerName2: '',
    assignmentWitnessName1: '',
    assignmentWitnessName2: '',

    // Monthly Disposable Income - Income
    memberIncome: '',
    spouseIncome: '',
    otherIncome: '',
    businessIncome: '',

    // Monthly Disposable Income - Expenses
    foodExpense: '',
    clothingExpense: '',
    shelterExpense: '',
    educationExpense: '',
    electricWaterExpense: '',
    helperExpense: '',
    loanRepaymentExpense: '',
    miscellaneousExpense: '',

    // Monthly Disposable Income - Net Income
    netIncome: '',

    // Declaration
    declarationAccepted: false,

    // Credit Committee
    committeeApproved: '',
    committeeReduced: '',
    committeeRejected: '',
    committeeDeferred: '',
    committeeReasons: '',

    // Coop Use
    receivedBy: '',
    checkedBy: '',
    approvedBy: '',
    dateReceived: '',

    // Disclosure Statement
    referenceNo: '',
    loanTypeDisclosure: '',
    loanAmountDisclosure: '',
    charges: '',
    netProceeds: '',
    effectiveInterestRate: '',
    nominalInterestRate: '',
    penalty: '',
    interestRate: '',

    // Terms and Conditions
    termsAccepted: false,

    // Signature Date
    signatureDate: '',

    // Additional fields for PDF generation
    dateRelease: '',
    voucherNo: '',
    mop: '',
    processor: ''
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
    const totalIncome = (parseFloat(formData.memberIncome || '0') +
                        parseFloat(formData.spouseIncome || '0') +
                        parseFloat(formData.otherIncome || '0') +
                        parseFloat(formData.businessIncome || '0'));

    const totalExpenses = (parseFloat(formData.foodExpense || '0') +
                          parseFloat(formData.clothingExpense || '0') +
                          parseFloat(formData.shelterExpense || '0') +
                          parseFloat(formData.educationExpense || '0') +
                          parseFloat(formData.electricWaterExpense || '0') +
                          parseFloat(formData.helperExpense || '0') +
                          parseFloat(formData.loanRepaymentExpense || '0') +
                          parseFloat(formData.miscellaneousExpense || '0'));

    const netIncome = totalIncome - totalExpenses;

    setFormData(prev => ({
      ...prev,
      netIncome: netIncome.toFixed(2)
    }));
  }, [
    formData.memberIncome,
    formData.spouseIncome,
    formData.otherIncome,
    formData.businessIncome,
    formData.foodExpense,
    formData.clothingExpense,
    formData.shelterExpense,
    formData.educationExpense,
    formData.electricWaterExpense,
    formData.helperExpense,
    formData.loanRepaymentExpense,
    formData.miscellaneousExpense
  ]);



  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      'name', 'pbNo', 'contactNo', 'email', 'address', 'loanType', 'loanAmount', 'term', 'purpose', 'idType'
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

    // Validate branch selection
    if (!formData.branch) {
      alert('Please select a branch.');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Starting loan application submission...', {
        name: formData.name,
        branch: formData.branch,
        loanType: formData.loanType,
        loanAmount: formData.loanAmount
      });

      // Convert file to base64 if present
      const processedFormData = { ...formData } as Record<string, unknown>;
      if (formData.idFile) {
        const base64 = await fileToBase64(formData.idFile);
        processedFormData.idFile = base64;
      }

      // Ensure branch is present
      processedFormData.branch = formData.branch;

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
        const branchNames: Record<string, string> = {
          'sanjose': 'Main Office - San Jose',
          'miagao': 'Miagao Branch',
          'oton': 'Oton Branch',
          'guimaras': 'Guimaras Branch'
        };
        const branchDisplay = branchNames[formData.branch] || formData.branch;
        
        alert(`✅ Loan application submitted successfully!\n\nYour application has been sent to the ${branchDisplay} and is now pending review.\n\nApplication ID: ${result.id}\nName: ${formData.name}\nLoan Type: ${formData.loanType}\nAmount: ₱${formData.loanAmount}\n\nThank you for choosing San Jose Multi-Purpose Cooperative!`);

        // Reset form and go back to step 1
        setCurrentStep(1);
        setFormData({
              // Reset all form fields to initial state
              name: '',
              pbNo: '',
              contactNo: '',
              email: '',
              branch: '',
              address: '',
              loanType: '',
              loanAmount: '',
              term: '',
              purpose: '',
              idType: '',
              idFile: null,
              promissoryNoteAmount: '',
              promissoryNoteTerm: '',
              promissoryNotePaymentSchedule: '',
              promissoryNoteStartingOn: '',
              assignmentAmount: '',
              assignmentPbNo: '',
              regularSavings: '',
              ultimaSavings: '',
              alkansyaSavings: '',
              timeDeposit: '',
              otherDeposits: '',
              shareCapital: '',
              assignmentMaker1: '',
              assignmentMaker2: '',
              assignmentCoMaker1: '',
              assignmentCoMaker2: '',
              assignmentWitness1: '',
              assignmentWitness2: '',
              makerName1: '',
              makerName2: '',
              coMakerName1: '',
              coMakerName2: '',
              witnessName1: '',
              witnessName2: '',
              makerSpouseName: '',
              assignmentCoMakerName1: '',
              assignmentCoMakerName2: '',
              assignmentWitnessName1: '',
              assignmentWitnessName2: '',
              memberIncome: '',
              spouseIncome: '',
              otherIncome: '',
              businessIncome: '',
              foodExpense: '',
              clothingExpense: '',
              shelterExpense: '',
              educationExpense: '',
              electricWaterExpense: '',
              helperExpense: '',
              loanRepaymentExpense: '',
              miscellaneousExpense: '',
              netIncome: '',
              declarationAccepted: false,
              committeeApproved: '',
              committeeReduced: '',
              committeeRejected: '',
              committeeDeferred: '',
              committeeReasons: '',
              receivedBy: '',
              checkedBy: '',
              approvedBy: '',
              dateReceived: '',
              referenceNo: '',
              loanTypeDisclosure: '',
              loanAmountDisclosure: '',
              charges: '',
              netProceeds: '',
              effectiveInterestRate: '',
              nominalInterestRate: '',
              penalty: '',
              termsAccepted: false,
              dateRelease: '',
              interestRate: '',
              voucherNo: '',
              mop: '',
              processor: '',
              signatureDate: ''
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
    { number: 3, title: 'Financial Info', icon: DollarSign, description: 'Income & expenses' },
    { number: 4, title: 'Documents', icon: CreditCard, description: 'ID & verification' },
    { number: 5, title: 'Signatures', icon: PenTool, description: 'Sign documents' },
    { number: 6, title: 'Review', icon: CheckCircle, description: 'Confirm & submit' }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
            Loan <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Application</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">San Jose Multi-Purpose Cooperative</p>
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
          <form onSubmit={handleSubmitApplication}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
                    <p className="text-gray-600 dark:text-gray-300">Tell us about yourself</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Passbook No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pbNo"
                      value={formData.pbNo}
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
                      name="email"
                      value={formData.email}
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
                      name="branch"
                      value={formData.branch}
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
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">â‚±</span>
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
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

                {/* Promissory Note Details */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-100 dark:border-blue-800">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">Promissory Note Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Amount</label>
                      <input
                        type="number"
                        name="promissoryNoteAmount"
                        value={formData.promissoryNoteAmount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Term</label>
                      <input
                        type="text"
                        name="promissoryNoteTerm"
                        value={formData.promissoryNoteTerm}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="12 months"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Payment Schedule</label>
                      <input
                        type="text"
                        name="promissoryNotePaymentSchedule"
                        value={formData.promissoryNotePaymentSchedule}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Monthly"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Starting Date</label>
                      <input
                        type="date"
                        name="promissoryNoteStartingOn"
                        value={formData.promissoryNoteStartingOn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Assignment of Deposit */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-100 dark:border-yellow-800">
                  <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-300 mb-4">Assignment of Deposit</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Assignment Amount</label>
                      <input
                        type="number"
                        name="assignmentAmount"
                        value={formData.assignmentAmount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Assignment PB No.</label>
                      <input
                        type="text"
                        name="assignmentPbNo"
                        value={formData.assignmentPbNo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="PB-XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Regular Savings</label>
                      <input
                        type="number"
                        name="regularSavings"
                        value={formData.regularSavings}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Ultima Savings</label>
                      <input
                        type="number"
                        name="ultimaSavings"
                        value={formData.ultimaSavings}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Alkansya Savings</label>
                      <input
                        type="number"
                        name="alkansyaSavings"
                        value={formData.alkansyaSavings}
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
                    <DollarSign className="w-6 h-6 text-white" />
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
                        name="memberIncome"
                        value={formData.memberIncome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Spouse Income</label>
                      <input
                        type="number"
                        name="spouseIncome"
                        value={formData.spouseIncome}
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
                        name="businessIncome"
                        value={formData.businessIncome}
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
                        name="foodExpense"
                        value={formData.foodExpense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Clothing</label>
                      <input
                        type="number"
                        name="clothingExpense"
                        value={formData.clothingExpense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Shelter/Rent</label>
                      <input
                        type="number"
                        name="shelterExpense"
                        value={formData.shelterExpense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Education</label>
                      <input
                        type="number"
                        name="educationExpense"
                        value={formData.educationExpense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Electricity/Water</label>
                      <input
                        type="number"
                        name="electricWaterExpense"
                        value={formData.electricWaterExpense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Helper</label>
                      <input
                        type="number"
                        name="helperExpense"
                        value={formData.helperExpense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Loan Repayment</label>
                      <input
                        type="number"
                        name="loanRepaymentExpense"
                        value={formData.loanRepaymentExpense}
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
                      â‚±{formData.netIncome || '0.00'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Documents */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Document Upload</h2>
                    <p className="text-gray-600 dark:text-gray-300">Upload your valid ID</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border-2 border-blue-100 dark:border-blue-800 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Valid Government ID</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Please upload a clear photo or scan of your ID</p>
                  
                  <div className="max-w-md mx-auto">
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left">
                        Type of Valid ID <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="idType"
                        value={formData.idType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="">Select ID type</option>
                        <option value="Driver's License">Driver's License</option>
                        <option value="Passport">Passport</option>
                        <option value="SSS ID">SSS ID</option>
                        <option value="GSIS ID">GSIS ID</option>
                        <option value="PhilHealth ID">PhilHealth ID</option>
                        <option value="Voter's ID">Voter's ID</option>
                        <option value="PRC ID">PRC ID</option>
                        <option value="National ID">National ID</option>
                        <option value="Postal ID">Postal ID</option>
                        <option value="Barangay ID">Barangay ID</option>
                        <option value="Other Government ID">Other Government ID</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left">
                        Upload ID Image
                      </label>
                      <input
                        type="file"
                        name="idFile"
                        onChange={handleInputChange}
                        accept="image/*,.pdf"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer hover:file:bg-blue-700"
                      />
                      <p className="text-xs text-gray-500 mt-2 text-left">Accepted formats: JPG, PNG, PDF (Max 5MB)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Signatures */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Signature Details</h2>
                    <p className="text-gray-600 dark:text-gray-300">Enter names for digital signatures</p>
                  </div>
                </div>

                {/* Maker Signatures */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-100 dark:border-blue-800">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">Maker/Borrower</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Maker Name 1</label>
                      <input
                        type="text"
                        name="makerName1"
                        value={formData.makerName1}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Maker Name 2 (if applicable)</label>
                      <input
                        type="text"
                        name="makerName2"
                        value={formData.makerName2}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                </div>

                {/* Co-Maker Signatures */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-100 dark:border-yellow-800">
                  <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-300 mb-4">Co-Maker(s)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Co-Maker Name 1</label>
                      <input
                        type="text"
                        name="coMakerName1"
                        value={formData.coMakerName1}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Co-Maker Name 2 (if applicable)</label>
                      <input
                        type="text"
                        name="coMakerName2"
                        value={formData.coMakerName2}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                </div>

                {/* Witness Signatures */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Witness(es)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Witness Name 1</label>
                      <input
                        type="text"
                        name="witnessName1"
                        value={formData.witnessName1}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Witness Name 2 (if applicable)</label>
                      <input
                        type="text"
                        name="witnessName2"
                        value={formData.witnessName2}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                </div>

                {/* Signature Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Signature Date</label>
                  <input
                    type="date"
                    name="signatureDate"
                    value={formData.signatureDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            )}

            {/* Step 6: Review & Submit */}
            {currentStep === 6 && (
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
                      <p className="text-gray-900 dark:text-white">{formData.pbNo || 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Loan Type:</span>
                      <p className="text-gray-900 dark:text-white">{formData.loanType || 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Loan Amount:</span>
                      <p className="text-gray-900 dark:text-white">â‚±{formData.loanAmount || '0.00'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Term:</span>
                      <p className="text-gray-900 dark:text-white">{formData.term ? `${formData.term} months` : 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Branch:</span>
                      <p className="text-gray-900 dark:text-white">{formData.branch || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Declaration & Consent</h3>
                  <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>A.</strong> I hereby declare that I have read and fully understood the Terms and Conditions of SJMPC Credit Programs, and agree to be bound by them.
                    </p>
                    <p>
                      <strong>B.</strong> In accordance with the provisions of Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012, I acknowledge that I have read and understood the SJMPC Privacy Policy.
                    </p>
                    <p>
                      <strong>C.</strong> Pursuant to Republic Act No. 9510, or the Credit Information System Act, I acknowledge and give my consent to the regular submission and disclosure of my basic credit data.
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
