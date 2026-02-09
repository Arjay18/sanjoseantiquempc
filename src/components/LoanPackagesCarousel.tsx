"use client";
import { useState } from "react";
import Link from "next/link";


interface LoanPackage {
  title: string;
  description: string;
  icon: string; // emoji or icon string
  features: string[];
}

const loanPackages: LoanPackage[] = [
  {
    title: "Providential Loan",
    description: "Special loan program for members facing financial difficulties with reduced rates.",
    icon: "★",
    features: [
      "Emergency financial assistance",
      "Reduced interest rates",
      "Flexible payment schedules",
    ],
  },
  {
    title: "Salary Loan",
    description: "Loans based on regular salary income with fast processing.",
    icon: "⚡",
    features: [
      "Based on salary income",
      "Fast processing",
      "Competitive rates",
    ],
  },
  {
    title: "Pension Loan",
    description: "Special program for pensioners with competitive senior rates.",
    icon: "👴",
    features: [
      "Pension-backed security",
      "Competitive senior rates",
      "Flexible terms",
    ],
  },
  {
    title: "Educational Loan",
    description: "Support for educational goals with flexible repayment options.",
    icon: "📚",
    features: [
      "Tuition and academic expenses",
      "Flexible repayment",
      "Co-maker options",
    ],
  },
  {
    title: "Cellphone Loan",
    description: "Latest mobile devices financing with accessories included.",
    icon: "📱",
    features: [
      "Latest mobile devices",
      "Accessories included",
      "Flexible payment terms",
    ],
  },
  {
    title: "Appliances Loan",
    description: "Home appliances financing with extended warranty options.",
    icon: "🏠",
    features: [
      "Home appliances",
      "Electronics financing",
      "Extended warranty options",
    ],
  },
  {
    title: "Honorarium Loan",
    description: "Professional development financing for career advancement.",
    icon: "🎓",
    features: [
      "Professional development",
      "Certification courses",
      "Career advancement",
    ],
  },
  {
    title: "Micro-Enterprise Loan",
    description: "Support for small businesses and micro-enterprises with comprehensive financing.",
    icon: "💼",
    features: [
      "Business startup capital",
      "Working capital financing",
      "Equipment and inventory",
    ],
  },
  {
    title: "Agricultural Loan",
    description: "Specialized financing for farming and agricultural activities.",
    icon: "🚜",
    features: [
      "Crop production financing",
      "Livestock and poultry raising",
      "Farm equipment and machinery",
    ],
  },
  {
    title: "Hospitalization/Burial Loan",
    description: "Financial support for medical emergencies and burial expenses with quick processing.",
    icon: "🏥",
    features: [
      "Coverage for hospitalization costs",
      "Burial and funeral expenses",
      "Quick emergency processing",
    ],
  },
  {
    title: "Calamity Loan",
    description: "Assistance for members affected by natural disasters and calamities.",
    icon: "🌪️",
    features: [
      "Natural disaster support",
      "Emergency relief funding",
      "Reduced interest rates",
    ],
  },
  {
    title: "Petty Cash Loan",
    description: "Small amount loans for daily operational expenses with fast approval.",
    icon: "💰",
    features: [
      "Quick processing",
      "Low interest rates",
      "Short repayment period",
    ],
  },
  {
    title: "Rice Loan",
    description: "Seasonal loans for rice farming and related agricultural activities.",
    icon: "🌾",
    features: [
      "Seasonal financing",
      "Agricultural focus",
      "Harvest-based repayment",
    ],
  },
];

export default function LoanPackagesCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % loanPackages.length);
  const prev = () => setCurrent((c) => (c - 1 + loanPackages.length) % loanPackages.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-8 px-2 md:px-6">
        <button onClick={prev} className="p-3 bg-gradient-to-tr from-blue-200 to-blue-400 text-blue-900 rounded-full shadow-lg hover:scale-110 hover:bg-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">&#8592;</button>
        <h3 className="text-3xl font-extrabold text-blue-900 tracking-tight">Tailored Loan Solutions</h3>
        <button onClick={next} className="p-3 bg-gradient-to-tr from-blue-200 to-blue-400 text-blue-900 rounded-full shadow-lg hover:scale-110 hover:bg-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">&#8594;</button>
      </div>
      <div className="relative flex justify-center items-center min-h-[380px]">
        <div className="w-full max-w-xl bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-blue-200 animate-slide-in hover:shadow-blue-300 transition-shadow duration-300">
          <div className="text-6xl mb-4 drop-shadow-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 text-transparent bg-clip-text animate-bounce">{loanPackages[current].icon}</div>
          <h4 className="text-2xl font-bold mb-2 text-center text-blue-800 tracking-tight">{loanPackages[current].title}</h4>
          <p className="text-gray-700 mb-6 text-center font-medium text-lg">{loanPackages[current].description}</p>
          <ul className="mb-8 text-blue-900 text-base list-disc list-inside text-left w-full max-w-xs mx-auto space-y-2">
            {loanPackages[current].features.map((feature, i) => (
              <li key={i} className="pl-2">{feature}</li>
            ))}
          </ul>
          <Link href="/loan-application" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 text-lg">Apply Now</Link>
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-3">
        {loanPackages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full border-2 ${idx === current ? "bg-blue-600 border-blue-600 scale-125 shadow-lg" : "bg-gray-300 border-blue-200"} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            aria-label={`Go to package ${idx + 1}`}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.7s cubic-bezier(.4,0,.2,1);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce {
          animation: bounce 1.2s infinite;
        }
      `}</style>
    </div>
  );
}
