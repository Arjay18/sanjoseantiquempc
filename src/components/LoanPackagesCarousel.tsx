"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Zap, Heart, GraduationCap, Smartphone, Home, Award, Briefcase, Tractor, Hospital, Wind, Coins, Wheat, ArrowRight } from "lucide-react";

interface LoanPackage {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  features: string[];
}

const loanPackages: LoanPackage[] = [
  {
    title: "Providential Loan",
    description: "Special loan program for members facing financial difficulties with reduced rates.",
    icon: <Star className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    features: ["Emergency assistance", "Reduced rates", "Flexible payments"],
  },
  {
    title: "Salary Loan",
    description: "Loans based on regular salary income with fast processing.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500 to-amber-600",
    bgGradient: "from-yellow-50 to-amber-50",
    features: ["Salary-based", "Fast processing", "Competitive rates"],
  },
  {
    title: "Pension Loan",
    description: "Special program for pensioners with competitive senior rates.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    features: ["Pension-backed", "Senior rates", "Flexible terms"],
  },
  {
    title: "Educational Loan",
    description: "Support for educational goals with flexible repayment options.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    features: ["Tuition expenses", "Flexible repayment", "Co-maker options"],
  },
  {
    title: "Cellphone Loan",
    description: "Latest mobile devices financing with accessories included.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    features: ["Latest devices", "Accessories included", "Flexible terms"],
  },
  {
    title: "Appliances Loan",
    description: "Home appliances financing with extended warranty options.",
    icon: <Home className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-50 to-cyan-50",
    features: ["Home appliances", "Electronics financing", "Warranty options"],
  },
  {
    title: "Honorarium Loan",
    description: "Professional development financing for career advancement.",
    icon: <Award className="w-8 h-8" />,
    color: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-50 to-green-50",
    features: ["Professional development", "Certification courses", "Career advancement"],
  },
  {
    title: "Micro-Enterprise Loan",
    description: "Support for small businesses with comprehensive financing.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-slate-500 to-zinc-600",
    bgGradient: "from-slate-50 to-zinc-50",
    features: ["Startup capital", "Working capital", "Equipment & inventory"],
  },
  {
    title: "Agricultural Loan",
    description: "Specialized financing for farming and agricultural activities.",
    icon: <Tractor className="w-8 h-8" />,
    color: "from-lime-500 to-green-700",
    bgGradient: "from-lime-50 to-green-50",
    features: ["Crop production", "Livestock raising", "Farm equipment"],
  },
  {
    title: "Hospitalization Loan",
    description: "Financial support for medical emergencies with quick processing.",
    icon: <Hospital className="w-8 h-8" />,
    color: "from-red-500 to-rose-600",
    bgGradient: "from-red-50 to-rose-50",
    features: ["Hospital costs", "Funeral expenses", "Quick processing"],
  },
  {
    title: "Calamity Loan",
    description: "Assistance for members affected by natural disasters.",
    icon: <Wind className="w-8 h-8" />,
    color: "from-sky-500 to-teal-700",
    bgGradient: "from-sky-50 to-teal-50",
    features: ["Disaster support", "Emergency relief", "Reduced rates"],
  },
  {
    title: "Petty Cash Loan",
    description: "Small amount loans for daily expenses with fast approval.",
    icon: <Coins className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    features: ["Quick processing", "Low interest", "Short period"],
  },
  {
    title: "Rice Loan",
    description: "Seasonal loans for rice farming and agricultural activities.",
    icon: <Wheat className="w-8 h-8" />,
    color: "from-yellow-600 to-amber-700",
    bgGradient: "from-yellow-50 to-amber-50",
    features: ["Seasonal financing", "Agricultural focus", "Harvest repayment"],
  },
];

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(loanPackages.length / ITEMS_PER_PAGE);

export default function LoanPackagesCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((c) => (c + 1) % TOTAL_PAGES);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((c) => (c - 1 + TOTAL_PAGES) % TOTAL_PAGES);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getVisiblePackages = () => {
    const start = currentPage * ITEMS_PER_PAGE;
    return loanPackages.slice(start, start + ITEMS_PER_PAGE);
  };

  const visiblePackages = getVisiblePackages();

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <Star className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Loan Packages</h3>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 mr-2">
            {currentPage + 1} of {TOTAL_PAGES}
          </span>
          <button 
            onClick={prev}
            className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
          </button>
          <button 
            onClick={next}
            className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 group"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className={`relative overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-80' : 'opacity-100'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visiblePackages.map((pkg, idx) => (
            <div 
              key={idx}
              className="relative bg-gradient-to-br ${pkg.bgGradient} rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {pkg.icon}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {pkg.features.slice(0, 3).map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 text-xs text-gray-600"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pkg.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  href="/dashboard"
                  className={`inline-flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors group/btn`}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: TOTAL_PAGES }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentPage(idx);
                setTimeout(() => setIsAnimating(false), 300);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentPage 
                ? 'w-8 bg-gradient-to-r from-green-500 to-emerald-600' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
