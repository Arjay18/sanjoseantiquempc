"use client";

import LoanForm from "@/components/LoanForm";

export default function OnlineApplicationPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-900 sm:text-4xl uppercase tracking-tight">
          Online Loan Application
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Please complete the 4-step process below to submit your application.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <LoanForm />
      </div>
    </div>
  );
}