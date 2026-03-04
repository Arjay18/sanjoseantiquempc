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
    icon: <Star className="w-12 h-12" />,
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    features: ["Emergency financial assistance", "Reduced interest rates", "Flexible payment schedules"],
  },
  {
    title: "Salary Loan",
    description: "Loans based on regular salary income with fast processing.",
    icon: <Zap className="w-12 h-12" />,
    color: "from-yellow-500 to-amber-600",
    bgGradient: "from-yellow-50 to-amber-50",
    features: ["Based on salary income", "Fast processing", "Competitive rates"],
  },
  {
    title: "Pension Loan",
    description: "Special program for pensioners with competitive senior rates.",
    icon: <Heart className="w-12 h-12" />,
    color: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    features: ["Pension-backed security", "Competitive senior rates", "Flexible terms"],
  },
  {
    title: "Educational Loan",
    description: "Support for educational goals with flexible repayment options.",
    icon: <GraduationCap className="w-12 h-12" />,
    color: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
    features: ["Tuition and academic expenses", "Flexible repayment", "Co-maker options"],
  },
  {
    title: "Cellphone Loan",
    description: "Latest mobile devices financing with accessories included.",
    icon: <Smartphone className="w-12 h-12" />,
    color: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    features: ["Latest mobile devices", "Accessories included", "Flexible payment terms"],
  },
  {
    title: "Appliances Loan",
    description: "Home appliances financing with extended warranty options.",
    icon: <Home className="w-12 h-12" />,
    color: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-50 to-cyan-50",
    features: ["Home appliances", "Electronics financing", "Extended warranty options"],
  },
  {
    title: "Honorarium Loan",
    description: "Professional development financing for career advancement.",
    icon: <Award className="w-12 h-12" />,
    color: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-50 to-green-50",
    features: ["Professional development", "Certification courses", "Career advancement"],
  },
  {
    title: "Micro-Enterprise Loan",
    description: "Support for small businesses and micro-enterprises with comprehensive financing.",
    icon: <Briefcase className="w-12 h-12" />,
    color: "from-slate-500 to-zinc-600",
    bgGradient: "from-slate-50 to-zinc-50",
    features: ["Business startup capital", "Working capital financing", "Equipment and inventory"],
  },
  {
    title: "Agricultural Loan",
    description: "Specialized financing for farming and agricultural activities.",
    icon: <Tractor className="w-12 h-12" />,
    color: "from-lime-500 to-green-700",
    bgGradient: "from-lime-50 to-green-50",
    features: ["Crop production financing", "Livestock and poultry raising", "Farm equipment and machinery"],
  },
  {
    title: "Hospitalization/Burial Loan",
    description: "Financial support for medical emergencies and burial expenses with quick processing.",
    icon: <Hospital className="w-12 h-12" />,
    color: "from-red-500 to-rose-600",
    bgGradient: "from-red-50 to-rose-50",
    features: ["Coverage for hospitalization costs", "Burial and funeral expenses", "Quick emergency processing"],
  },
  {
    title: "Calamity Loan",
    description: "Assistance for members affected by natural disasters and calamities.",
    icon: <Wind className="w-12 h-12" />,
    color: "from-sky-500 to-blue-700",
    bgGradient: "from-sky-50 to-blue-50",
    features: ["Natural disaster support", "Emergency relief funding", "Reduced interest rates"],
  },
  {
    title: "Petty Cash Loan",
    description: "Small amount loans for daily operational expenses with fast approval.",
    icon: <Coins className="w-12 h-12" />,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    features: ["Quick processing", "Low interest rates", "Short repayment period"],
  },
  {
    title: "Rice Loan",
    description: "Seasonal loans for rice farming and related agricultural activities.",
    icon: <Wheat className="w-12 h-12" />,
    color: "from-yellow-600 to-amber-700",
    bgGradient: "from-yellow-50 to-amber-50",
    features: ["Seasonal financing", "Agricultural focus", "Harvest-based repayment"],
  },
];

export default function LoanPackagesCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c + 1) % loanPackages.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c - 1 + loanPackages.length) % loanPackages.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, current]);

  const pkg = loanPackages[current];

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Star className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Loan Packages</h3>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={prev}
            className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
          <button 
            onClick={next}
            className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 group"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>

      {/* Carousel Card */}
      <div className="relative overflow-hidden rounded-3xl">
        <div 
          className={`relative bg-gradient-to-br ${pkg.bgGradient} p-8 md:p-10 min-h-[320px] flex flex-col transition-all duration-500 ${isAnimating ? 'opacity-80 scale-[0.98]' : 'opacity-100 scale-100'}`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-xl text-white transform -rotate-6`}>
                {pkg.icon}
              </div>
              
              {/* Package Number */}
              <div className="text-sm font-medium text-gray-400">
                {current + 1} / {loanPackages.length}
              </div>
            </div>

            {/* Title & Description */}
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {pkg.title}
            </h4>
            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed max-w-2xl">
              {pkg.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              {pkg.features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl px-3 py-2 text-sm text-gray-700"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pkg.color}`} />
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <Link 
                href="/dashboard"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${pkg.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        {loanPackages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              idx === current 
                ? 'w-8 bg-gradient-to-r from-blue-500 to-indigo-600' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to package ${idx + 1}`}
          >
            {idx === current && (
              <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></span>
            )}
          </button>
        ))}
      </div>

      {/* Package Pills */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {loanPackages.slice(0, 7).map((pkg, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`text-xs px-3 py-1 rounded-full transition-all duration-200 ${
              idx === current
                ? 'bg-blue-600 text-white font-medium'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {pkg.title.split(' ')[0]}
          </button>
        ))}
        {loanPackages.length > 7 && (
          <span className="text-xs text-gray-400 self-center">+{loanPackages.length - 7} more</span>
        )}
      </div>
    </div>
  );
}
