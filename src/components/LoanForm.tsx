"use client";

import React, { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, Save, Upload, FileText } from "lucide-react";

interface LoanFormData {
  // Step 1: Personal
  name: string;
  email: string;
  contactNo: string;
  pbNo: string;
  address: string;
  // Step 2: Loan
  loanType: string;
  loanAmount: string;
  term: string;
  purpose: string;
  branch: string;
  // Step 3: Financial
  memberIncome: string;
  employmentStatus: string;
  // Step 4: Requirements (Base64 strings)
  idFile: string;
  depositSlipOrEwallet: string;
  memberWithIDAndSlip: string;
}

export default function LoanForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<LoanFormData>({
    name: "",
    email: "",
    contactNo: "",
    pbNo: "",
    address: "",
    loanType: "",
    loanAmount: "",
    term: "",
    purpose: "",
    branch: "",
    memberIncome: "",
    employmentStatus: "",
    idFile: "",
    depositSlipOrEwallet: "",
    memberWithIDAndSlip: "",
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof LoanFormData) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, [fieldName]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Convert numeric fields from strings to numbers before sending to API
      const payload = {
        ...formData,
        loanAmount: parseFloat(formData.loanAmount) || 0,
        term: parseInt(formData.term) || 0,
        memberIncome: parseFloat(formData.memberIncome) || 0,
      };

      const res = await fetch("/api/loan-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
        <p className="text-gray-600">Your loan application has been received and is being processed.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {i}
            </div>
            {i < 4 && <div className={`w-8 h-1 transition-colors ${step > i ? 'bg-blue-600' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step Content */}
        <div className="min-h-[300px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg font-bold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Juan Dela Cruz" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="juan@example.com" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Contact Number *</label>
                  <input type="tel" name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder="09123456789" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Passbook (PB) Number</label>
                  <input type="text" name="pbNo" value={formData.pbNo} onChange={handleChange} placeholder="PB-12345" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Complete Address *</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="House No, Street, Brgy, Town, Province" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg font-bold mb-4">Loan Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Loan Type</label>
                  <select name="loanType" value={formData.loanType} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select Type</option>
                    <option value="Salary Loan">Salary Loan</option>
                    <option value="Providential Loan">Providential Loan</option>
                    <option value="Agricultural Loan">Agricultural Loan</option>
                    <option value="Educational Loan">Educational Loan</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Desired Amount (₱)</label>
                  <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} placeholder="50000" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Term (Months)</label>
                  <input type="number" name="term" value={formData.term} onChange={handleChange} placeholder="12" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Preferred Branch</label>
                  <select name="branch" value={formData.branch} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select Branch</option>
                    <option value="main">Main Office</option>
                    <option value="miagao">Miagao Branch</option>
                    <option value="oton">Oton Branch</option>
                    <option value="guimaras">Guimaras Branch</option>
                  </select>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Purpose of Loan *</label>
                  <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="e.g. Business Capital, Hospitalization, Tuition" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg font-bold mb-4">Financial Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Monthly Gross Income (₱)</label>
                  <input type="number" name="memberIncome" value={formData.memberIncome} onChange={handleChange} placeholder="25000" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Employment Status</label>
                  <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select Status</option>
                    <option value="Regular">Regular / Permanent</option>
                    <option value="Contractual">Contractual</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Government">Government Employee</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg font-bold mb-4">Upload Requirements</h3>
              <div className="space-y-4">
                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-400 transition-colors">
                  <label className="flex flex-col items-center cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-600">Valid ID</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "idFile")} className="hidden" />
                    {formData.idFile && <span className="text-xs text-green-600 mt-1 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> File selected</span>}
                  </label>
                </div>
                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-400 transition-colors">
                  <label className="flex flex-col items-center cursor-pointer">
                    <FileText className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-600">Deposit Slip / E-wallet Receipt</span>
                    <input type="file" accept="image/*,application/pdf" onChange={(e) => handleFileChange(e, "depositSlipOrEwallet")} className="hidden" />
                    {formData.depositSlipOrEwallet && <span className="text-xs text-green-600 mt-1 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> File selected</span>}
                  </label>
                </div>
                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-400 transition-colors">
                  <label className="flex flex-col items-center cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-600">Member Photo with ID</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "memberWithIDAndSlip")} className="hidden" />
                    {formData.memberWithIDAndSlip && <span className="text-xs text-green-600 mt-1 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> File selected</span>}
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex justify-between pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 1 || isSubmitting}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center gap-2 px-6 py-2 text-white rounded-lg transition shadow-lg ${
              step === 4 ? "bg-green-600 hover:bg-green-700 shadow-green-200" : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
            } disabled:opacity-50`}
          >
            {step === 4 ? (
              <>{isSubmitting ? "Submitting..." : "Submit Application"} <Save className="w-4 h-4" /></>
            ) : (
              <>Next <ArrowRight className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}