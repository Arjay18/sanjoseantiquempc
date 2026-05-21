"use client";

import React, { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, Save } from "lucide-react";

export default function LoanForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Example API call logic
      // const res = await fetch("/api/loan-applications", { method: "POST", ... });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulation
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
      <div className="flex items-center justify-between mb-8 max-w-xs mx-auto">
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
        <div className="min-h-[200px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg font-bold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
            </div>
          )}
          
          {step > 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center py-10 text-gray-500 italic">
              Step {step} fields (Loan, Financial, or Requirements) go here...
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
          
          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 shadow-lg shadow-green-200 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"} <Save className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}