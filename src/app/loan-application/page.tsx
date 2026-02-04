'use client';

import { useState, useEffect } from 'react';
import { PhilippinePeso, Building, Heart, Clock, CheckCircle, ArrowRight, BookOpen, Phone, Home, Award, Building2, Tractor, Shield, Wallet, Wheat, AlertTriangle, User, FileText, CreditCard, PenTool, ChevronRight, ChevronLeft } from 'lucide-react';

export default function LoanApplication() {
  // Removed wizard step logic for single form

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
      // Special mapping for passbookNo to pbNo
      if (name === 'passbookNo') {
        return {
          ...prev,
          passbookNo: value,
          pbNo: value
        };
      }
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : type === 'file' ? (files?.[0] || null) : value
      };
    });
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
  }, [formData.incomeMember, formData.incomeSpouse, formData.otherIncome, formData.incomeBusiness, formData.food, formData.clothing, formData.shelter, formData.education, formData.electricWaterBills, formData.helper, formData.loanRepayments, formData.miscellaneousExpense]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Application submitted successfully!');
    }, 2000);
  };

  // Removed step navigation and progress bar for single form

  // Main return block: single form, all fields visible
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            Loan <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Application</span>
          </h1>
          <p className="text-gray-600">San Jose Multi-Purpose Cooperative</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow">
          {/* Basic Information */}
          <h2 className="text-xl font-bold mb-2">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="input input-bordered" required />
            <input name="passbookNo" value={formData.passbookNo} onChange={handleInputChange} placeholder="Passbook No." className="input input-bordered" required />
            <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="input input-bordered" required />
            <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="input input-bordered" type="email" required />
            <input name="contactNo" value={formData.contactNo} onChange={handleInputChange} placeholder="Contact No." className="input input-bordered" required />
            <input name="branch" value={formData.branch} onChange={handleInputChange} placeholder="Branch" className="input input-bordered" required />
          </div>
          {/* Loan Details */}
          <h2 className="text-xl font-bold mb-2">Loan Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="loanType" value={formData.loanType} onChange={handleInputChange} placeholder="Loan Type" className="input input-bordered" required />
            <input name="term" value={formData.term} onChange={handleInputChange} placeholder="Term" className="input input-bordered" required />
            <input name="amountApplied" value={formData.amountApplied} onChange={handleInputChange} placeholder="Amount Applied" className="input input-bordered" required />
            <input name="purpose" value={formData.purpose} onChange={handleInputChange} placeholder="Purpose" className="input input-bordered" required />
          </div>
          {/* Financial Information */}
          <h2 className="text-xl font-bold mb-2">Financial Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="incomeMember" value={formData.incomeMember} onChange={handleInputChange} placeholder="Income (Member)" className="input input-bordered" />
            <input name="incomeSpouse" value={formData.incomeSpouse} onChange={handleInputChange} placeholder="Income (Spouse)" className="input input-bordered" />
            <input name="incomeOtherFamily" value={formData.incomeOtherFamily} onChange={handleInputChange} placeholder="Other Family Income" className="input input-bordered" />
            <input name="incomeBusiness" value={formData.incomeBusiness} onChange={handleInputChange} placeholder="Business Income" className="input input-bordered" />
            <input name="otherIncome" value={formData.otherIncome} onChange={handleInputChange} placeholder="Other Income" className="input input-bordered" />
            <input name="totalFamilyIncome" value={formData.totalFamilyIncome} onChange={handleInputChange} placeholder="Total Family Income" className="input input-bordered" />
            <input name="food" value={formData.food} onChange={handleInputChange} placeholder="Food" className="input input-bordered" />
            <input name="clothing" value={formData.clothing} onChange={handleInputChange} placeholder="Clothing" className="input input-bordered" />
            <input name="shelter" value={formData.shelter} onChange={handleInputChange} placeholder="Shelter" className="input input-bordered" />
            <input name="education" value={formData.education} onChange={handleInputChange} placeholder="Education" className="input input-bordered" />
            <input name="electricWaterBills" value={formData.electricWaterBills} onChange={handleInputChange} placeholder="Electric/Water Bills" className="input input-bordered" />
            <input name="helper" value={formData.helper} onChange={handleInputChange} placeholder="Helper" className="input input-bordered" />
            <input name="loanRepayments" value={formData.loanRepayments} onChange={handleInputChange} placeholder="Loan Repayments" className="input input-bordered" />
            <input name="miscellaneousExpense" value={formData.miscellaneousExpense} onChange={handleInputChange} placeholder="Miscellaneous Expense" className="input input-bordered" />
            <input name="totalFamilyExpenses" value={formData.totalFamilyExpenses} onChange={handleInputChange} placeholder="Total Family Expenses" className="input input-bordered" />
            <input name="netIncome" value={formData.netIncome} readOnly placeholder="Net Income (auto)" className="input input-bordered bg-gray-100" />
          </div>
          {/* Requirements file uploads */}
          <h2 className="text-xl font-bold mb-2">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Scanned copy of 2 Valid IDs with 3 specimen signatures</label>
              <input type="file" name="validIDsAndSignatures" onChange={handleInputChange} className="input input-bordered" />
            </div>
            <div>
              <label className="block mb-1">Scanned copy of validated deposit slip or screenshot of verified e-wallet account</label>
              <input type="file" name="depositSlipOrEwallet" onChange={handleInputChange} className="input input-bordered" />
            </div>
            <div>
              <label className="block mb-1">Picture of member borrower holding valid ID and validated deposit slip</label>
              <input type="file" name="memberWithIDAndSlip" onChange={handleInputChange} className="input input-bordered" />
            </div>
          </div>
          {/* Declarations */}
          <div className="flex items-start">
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
          <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}

