'use client';

import { useState, useEffect } from 'react';
import { PhilippinePeso, Building, Heart, Clock, CheckCircle, ArrowRight, BookOpen, Phone, Home, Award, Building2, Tractor, Shield, Wallet, Wheat, AlertTriangle } from 'lucide-react';

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    pbNo: '',
    contactNo: '',
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



  const handleDownloadApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/fill-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'filled-loan-application.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Failed to generate PDF. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreviewApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/preview-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        window.URL.revokeObjectURL(url);
      } else {
        alert('Failed to generate PDF preview. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      'name', 'pbNo', 'contactNo', 'address', 'loanType', 'loanAmount', 'term', 'purpose', 'idType'
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
      // Convert file to base64 if present
      const processedFormData = { ...formData } as Record<string, unknown>;
      if (formData.idFile) {
        const base64 = await fileToBase64(formData.idFile);
        processedFormData.idFile = base64;
      }

      const response = await fetch('/api/admin/loan-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: processedFormData }),
      });

      if (response.ok) {
        alert('Loan application submitted successfully!');
        // Reset form or redirect
        setFormData({
          // Reset all form fields to initial state
          name: '',
          pbNo: '',
          contactNo: '',
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
      } else {
        alert('Failed to submit loan application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SAN JOSE MULTI-PURPOSE COOPERATIVE (SJMPC)</h1>
          <p className="text-sm text-gray-600">Tradetown Funda Dalipe, San Jose, Antique</p>
          <p className="text-sm text-gray-600">Email add: sanjosempc@yahoo.com | Telefax: 540-8209 | Cellphone No.: 0917-308-1505</p>
          <div className="text-xs text-gray-500 mt-2">
            <p>Branch Offices:</p>
            <p>Nochete Bldg., Tajanlangit St., Brgy. Tacas, Miagao, Iloilo | CP #s: 0917-127-9511, 0908-875-3239 | Telefax: (033)513-8925</p>
            <p>National Highway, San Antonio, Oton, Iloilo | CP #s: 0998-577-2173, 0939-344-5574 | Telefax: (033)510-8564</p>
            <p>Alejandro Heights, San Miguel, Jordan, Guimaras | CP #: 0968-885-4434, 0909-156-7857 | Telefax: (033)322-5149</p>
          </div>
        </div>

        {/* Form No */}
        <div className="text-right mb-4">
          <span className="text-sm">Form No.</span>
          <input
            type="text"
            className="border-b border-gray-400 ml-2 w-24 focus:border-blue-500 outline-none bg-transparent"
            placeholder=""
            suppressHydrationWarning={true}
          />
        </div>

        {/* Application Form */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg mb-6">
          <form className="space-y-6" onSubmit={handleSubmitApplication}>
            {/* Basic Information */}
            <div className="border-b border-gray-300 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Enter your full name"
                    suppressHydrationWarning={true}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PB No.:</label>
                  <input
                    type="text"
                    name="pbNo"
                    value={formData.pbNo}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Enter your passbook number"
                    suppressHydrationWarning={true}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact No.:</label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Enter your contact number"
                    suppressHydrationWarning={true}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type of Loan:</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                  >
                    <option value="">Select loan type</option>
                    <option value="Multi-Purpose Loan">Multi-Purpose Loan</option>
                    <option value="Salary Loan">Salary Loan</option>
                    <option value="Educational Loan">Educational Loan</option>
                    <option value="Agricultural Loan">Agricultural Loan</option>
                    <option value="Emergency Loan">Emergency Loan</option>
                    <option value="Micro-Enterprise Loan">Micro-Enterprise Loan</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={2}
                  className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent resize-none"
                  placeholder="Enter your complete address"
                />
              </div>



              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount Applied:</label>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Pesos Only (P</span>
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      required
                      min="1000"
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                      placeholder="0.00"
                      suppressHydrationWarning={true}
                    />
                    <span className="text-sm ml-1">)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Term:</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      name="term"
                      value={formData.term}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="60"
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                      placeholder="0"
                      suppressHydrationWarning={true}
                    />
                    <span className="text-sm ml-1">months</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purpose:</label>
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Enter loan purpose"
                    suppressHydrationWarning={true}
                  />
                </div>
              </div>
            </div>

            {/* Promissory Note */}
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">PROMISSORY NOTE</h3>
              <p className="text-sm text-gray-700 mb-4 text-center">
                For the value received, I/We, jointly and severally, promised to pay to the San Jose Multi-Purpose Cooperative, or its order, at its office, the sum of <input
                  type="number"
                  name="promissoryNoteAmount"
                  value={formData.promissoryNoteAmount}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-20"
                  placeholder="0.00"
                /> Pesos, (P <input
                  type="number"
                  name="promissoryNoteAmount"
                  value={formData.promissoryNoteAmount}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-20"
                  placeholder="0.00"
                /> ), Philippine Currency within/on or before <input
                  type="text"
                  name="promissoryNoteTerm"
                  value={formData.promissoryNoteTerm}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-32"
                  placeholder="Enter term"
                /> with interest at the rate of two percent (2%) per month based on the diminishing balance method payable every <input
                  type="text"
                  name="promissoryNotePaymentSchedule"
                  value={formData.promissoryNotePaymentSchedule}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-24"
                  placeholder="e.g., monthly"
                /> starting on <input
                  type="text"
                  name="promissoryNoteStartingOn"
                  value={formData.promissoryNoteStartingOn}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-24"
                  placeholder="e.g., date"
                /> until fully paid.
              </p>

              <p className="text-xs text-gray-600 text-center mb-4">
                Attached herewith is the amortization schedule, which forms part of this Note.
              </p>

              <p className="text-xs text-gray-600 text-center mb-4">
                In case of any default in the agreed payment schedule and/or any deviation of the loan proceeds, the payee or its assignee/endorsee is unconditionally entitled to declare all unpaid balance of the note immediately due and payable. Notice of dishonor is expressly authorized to set-off or apply any deposits in the cooperative in my name, account to the payment of the loan without need for prior notice or approval from the undersigned and/or co-maker.
              </p>

              <p className="text-xs text-gray-600 text-center mb-4">
                In case this Note is referred to an attorney for collection or legal action, I/We bind ourselves to pay attorney's fees equivalent to twenty percent (20%) of our outstanding obligation to any holder hereof, exclusive of costs and expenses of litigation; but in no case, less than Two Thousand Pesos (2,000.00). Any action on this instrument shall be brought before proper court in San Jose, Antique, Philippines.
              </p>

              <p className="text-xs text-gray-600 text-center mb-4">
                The contract of this document has been read and explained to me/us and I/We have fully and clearly understood the same and their consequences.
              </p>

              <p className="text-xs text-gray-600 text-center mb-4 font-semibold">
                In joint-several capacity:
              </p>

              {/* Signatures Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs">
                <div>
                  <p className="font-semibold">Name and Signature of Maker</p>
                  <div className="mt-2 space-y-1">
                    <p>1. <input
                      type="text"
                      name="makerName1"
                      value={formData.makerName1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p>2. <input
                      type="text"
                      name="makerName2"
                      value={formData.makerName2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Name and Signature of Co-Maker</p>
                  <div className="mt-2 space-y-1">
                    <p>1. <input
                      type="text"
                      name="coMakerName1"
                      value={formData.coMakerName1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p>2. <input
                      type="text"
                      name="coMakerName2"
                      value={formData.coMakerName2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Name and Signature of Witness</p>
                  <div className="mt-2 space-y-1">
                    <p><input
                      type="text"
                      name="witnessName1"
                      value={formData.witnessName1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p><input
                      type="text"
                      name="witnessName2"
                      value={formData.witnessName2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assignment of Deposit */}
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">ASSIGNMENT OF DEPOSIT AND/OR SHARE CAPITAL</h3>
              <p className="text-sm text-gray-700 mb-4 text-center">
                I/We, the undersigned, for and in consideration of the loan I obtained from San Jose Multi-Purpose Cooperative, San Jose, Antique, in the amount of <input
                  type="number"
                  name="assignmentAmount"
                  value={formData.assignmentAmount}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-20"
                  placeholder="0.00"
                /> Pesos Only (P <input
                  type="number"
                  name="assignmentAmount"
                  value={formData.assignmentAmount}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-20"
                  placeholder="0.00"
                /> ) as evidenced, do hereby assign in favor of the said Cooperative my; Savings Deposit Regular <input
                  type="text"
                  name="regularSavings"
                  value={formData.regularSavings}
                  onChange={handleInputChange}
                  className="border-b border-gray-400 w-20 mx-1 focus:border-blue-500 outline-none bg-transparent"
                  placeholder=""
                />, Savings Deposit Ultima <input
                  type="text"
                  name="ultimaSavings"
                  value={formData.ultimaSavings}
                  onChange={handleInputChange}
                  className="border-b border-gray-400 w-20 mx-1 focus:border-blue-500 outline-none bg-transparent"
                  placeholder=""
                />, Savings Deposit Alkansya <input
                  type="text"
                  name="alkansyaSavings"
                  value={formData.alkansyaSavings}
                  onChange={handleInputChange}
                  className="border-b border-gray-400 w-20 mx-1 focus:border-blue-500 outline-none bg-transparent"
                  placeholder=""
                />, Time Deposit <input
                  type="text"
                  name="timeDeposit"
                  value={formData.timeDeposit}
                  onChange={handleInputChange}
                  className="border-b border-gray-400 w-20 mx-1 focus:border-blue-500 outline-none bg-transparent"
                  placeholder=""
                />, and Other Deposits <input
                  type="text"
                  name="otherDeposits"
                  value={formData.otherDeposits}
                  onChange={handleInputChange}
                  className="border-b border-gray-400 w-20 mx-1 focus:border-blue-500 outline-none bg-transparent"
                  placeholder=""
                /> under my Passbook No. <input
                  type="text"
                  name="assignmentPbNo"
                  value={formData.assignmentPbNo}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-20"
                  placeholder=""
                /> including my Share Capital <input
                  type="text"
                  name="shareCapital"
                  value={formData.shareCapital}
                  onChange={handleInputChange}
                  className="border-b border-gray-400 w-20 mx-1 focus:border-blue-500 outline-none bg-transparent"
                  placeholder=""
                /> which I/We now have or thereafter may have, but which is limited only to such amount exceeding the required share capital of Five Hundred Pesos (P500.00) for me to remain a regular member of the cooperative.
              </p>

              <p className="text-xs text-gray-600 text-center mb-4">
                Therefore, I/We severally, empower and authorize the San Jose Multi-Purpose Cooperative at their option and without prior notice and demand to set-off or apply my savings/time deposit and share capital to the payment of my aforementioned loan together with its interest and penalty, in the event of my failure to pay the same after its maturity.
              </p>

              <p className="text-xs text-gray-600 text-center mb-4">
                IN WITNESS WHEREOF, I/We have hereto affixed my signature this day of <input
                  type="text"
                  name="signatureDate"
                  value={formData.signatureDate}
                  onChange={handleInputChange}
                  className="inline border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent w-24"
                  placeholder="date"
                /> , San Jose, Antique, Philippines.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs">
                <div>
                  <p className="font-semibold">Name and Signature of Maker</p>
                  <div className="mt-2 space-y-1">
                    <p>1. <input
                      type="text"
                      name="assignmentMaker1"
                      value={formData.assignmentMaker1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p>2. <input
                      type="text"
                      name="assignmentMaker2"
                      value={formData.assignmentMaker2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Name and Signature of Co-Maker</p>
                  <div className="mt-2 space-y-1">
                    <p>1. <input
                      type="text"
                      name="assignmentCoMaker1"
                      value={formData.assignmentCoMaker1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p>2. <input
                      type="text"
                      name="assignmentCoMaker2"
                      value={formData.assignmentCoMaker2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Name and Signature of Witness</p>
                  <div className="mt-2 space-y-1">
                    <p><input
                      type="text"
                      name="assignmentWitness1"
                      value={formData.assignmentWitness1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p><input
                      type="text"
                      name="assignmentWitness2"
                      value={formData.assignmentWitness2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs">
                <div>
                  <p className="font-semibold">Name and Signature of Makers Spouse</p>
                  <div className="mt-2 space-y-1">
                    <p><input
                      type="text"
                      name="makerSpouseName"
                      value={formData.makerSpouseName}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Name and Signature of Co-Maker</p>
                  <div className="mt-2 space-y-1">
                    <p>1. <input
                      type="text"
                      name="assignmentCoMakerName1"
                      value={formData.assignmentCoMakerName1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p>2. <input
                      type="text"
                      name="assignmentCoMakerName2"
                      value={formData.assignmentCoMakerName2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Name and Signature of Witness</p>
                  <div className="mt-2 space-y-1">
                    <p><input
                      type="text"
                      name="assignmentWitnessName1"
                      value={formData.assignmentWitnessName1}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                    <p><input
                      type="text"
                      name="assignmentWitnessName2"
                      value={formData.assignmentWitnessName2}
                      onChange={handleInputChange}
                      className="border-b border-gray-400 w-32 focus:border-blue-500 outline-none bg-transparent"
                      placeholder=""
                    /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Disposable Income */}
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">MONTHLY DISPOSABLE INCOME</h3>

              <div className="mb-6">
                <h4 className="text-md font-semibold text-gray-800 mb-3">1. Gross Family Income:</h4>
                <div className="ml-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      a. Income from Profession or Employment (Salary, Pension and Allotment)
                    </label>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-center">
                        <span className="text-sm w-32">i. Member-applicant</span>
                        <input
                          type="number"
                          name="memberIncome"
                          value={formData.memberIncome}
                          onChange={handleInputChange}
                          className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm w-32">ii. Spouse</span>
                        <input
                          type="number"
                          name="spouseIncome"
                          value={formData.spouseIncome}
                          onChange={handleInputChange}
                          className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm w-32">iii. Other members</span>
                        <input
                          type="number"
                          name="otherIncome"
                          value={formData.otherIncome}
                          onChange={handleInputChange}
                          className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      b. Income derived from Business
                    </label>
                    <input
                      type="number"
                      name="businessIncome"
                      value={formData.businessIncome}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-4"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-3">2. Family Expenses:</h4>
                <div className="ml-4 space-y-3">
                  <div className="flex items-center">
                    <span className="text-sm w-48">a. Food</span>
                    <input
                      type="number"
                      name="foodExpense"
                      value={formData.foodExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-48">b. Clothing</span>
                    <input
                      type="number"
                      name="clothingExpense"
                      value={formData.clothingExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-48">c. Shelter</span>
                    <input
                      type="number"
                      name="shelterExpense"
                      value={formData.shelterExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-48">d. Education</span>
                    <input
                      type="number"
                      name="educationExpense"
                      value={formData.educationExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-48">e. Electric and Water bills</span>
                    <input
                      type="number"
                      name="electricWaterExpense"
                      value={formData.electricWaterExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-48">f. Helper (Timbang)</span>
                    <input
                      type="number"
                      name="helperExpense"
                      value={formData.helperExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-48">g. Loan Repayments of members of the family</span>
                    <input
                      type="number"
                      name="loanRepaymentExpense"
                      value={formData.loanRepaymentExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm w-48">h. Miscellaneous Expense (Insurance, Leisure and Others)</span>
                    <input
                      type="number"
                      name="miscellaneousExpense"
                      value={formData.miscellaneousExpense}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent ml-2"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-3">3. Net Income:</h4>
                <input
                  type="number"
                  name="netIncome"
                  value={formData.netIncome}
                  readOnly
                  className="w-full border-b border-gray-400 bg-gray-50 outline-none ml-4"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Declaration */}
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">DECLARATION, CONSENT AND DATA PRIVACY STATEMENT</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2">
                    <strong>A.</strong> I hereby declare that I have read and fully understood the Terms and Conditions of SJMPC Credit Programs, and agree to be bound by them.
                  </p>
                  <p className="mb-2">
                    <strong>B.</strong> In accordance with the provisions of Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012, I acknowledge that I have read and understood the SJMPC Privacy Policy. Further, I consent to the collection, use, access, and processing of my personal and sensitive personal information by SJMPC to process my application for the loan I availed including verification from the source of such information and for the establishment, exercise, or defense of SJMPC' legal claim. Furthermore, I consent to the sharing of my personal and loan information to the bank and its affiliates for the disbursement of said loan.
                  </p>
                  <p className="mb-4">
                    <strong>C.</strong> Pursuant to Republic Act No. 9510, or the Credit Information System Act, and its Implementing Rules and Regulations (IRR), I acknowledge and give my consent to: 1. The regular submission and disclosure of my basic credit data and any updates thereto to the Credit Information Corporation (CIC); and 2. The sharing of my basic credit data with lenders authorized by the CIC, as well as credit reporting agencies and accredited outsourced entities, in accordance with applicable laws and regulations.
                  </p>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="declarationAccepted"
                    name="declarationAccepted"
                    checked={formData.declarationAccepted}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="declarationAccepted" className="ml-3 text-sm text-gray-700">
                    I have read, understand and I agree with the above Declaration and Consent and Data Privacy Statement, and Terms and Conditions of the Credit Program of SJMPC.
                  </label>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">TERMS AND CONDITIONS</h3>
              <div className="space-y-4 text-sm">
                <p className="text-gray-700">
                  By submitting this application, I agree to the following terms and conditions of the SJMPC loan program. I understand that all information provided is true and correct to the best of my knowledge. I authorize SJMPC to verify the information provided and to conduct necessary background checks.
                </p>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="termsAccepted" className="ml-3 text-sm text-gray-700">
                    I have read, understand and agree to the Terms and Conditions of SJMPC.
                  </label>
                </div>
              </div>
            </div>

            {/* ID Upload */}
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">ID UPLOAD</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Valid ID:</label>
                <select
                  name="idType"
                  value={formData.idType}
                  onChange={handleInputChange}
                  required
                  className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Valid ID:</label>
                <input
                  type="file"
                  name="idFile"
                  onChange={handleInputChange}
                  accept="image/*,.pdf"
                  className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent"
                  suppressHydrationWarning={true}
                />
                <p className="text-xs text-gray-500 mt-1">Please upload a clear image of your valid government-issued ID. PDF files are also accepted.</p>
              </div>
            </div>

            {/* Download and Submit Buttons */}
            <div className="text-center mt-6 space-x-4">
              <button
                type="button"
                onClick={handleDownloadApplication}
                disabled={isSubmitting}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Downloading...' : 'Download Application'}
              </button>
              <button
                type="button"
                onClick={handlePreviewApplication}
                disabled={isSubmitting}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Generating Preview...' : 'Preview Application'}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
