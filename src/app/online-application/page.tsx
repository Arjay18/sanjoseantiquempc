"use client";

import Link from "next/link";

export default function OnlineApplicationPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 uppercase tracking-tight">
          Online Loan Application
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          The online application form is currently unavailable.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8">
        <div className="text-gray-700 text-base leading-relaxed">
          Please visit our branch offices or contact us for assistance with your application.
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}

