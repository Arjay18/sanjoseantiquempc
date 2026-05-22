'use client';

import { PhilippinePeso, Heart, Clock, CheckCircle, BookOpen, Phone, Home, Award, Building2, Tractor, Shield, Wallet, Wheat, AlertTriangle } from 'lucide-react';

const LOAN_CATEGORIES = {
  multiPurpose: [
    {
      icon: Shield,
      title: "Providential Loan",
      description: "Special loan program for members facing financial difficulties with reduced rates.",
      features: ["Emergency financial assistance", "Reduced interest rates", "Flexible payment schedules"],
      borderColor: "border-green-500",
      iconGradient: "from-green-400 to-green-600",
      emoji: "★",
      iconColor: "text-green-500"
    },
    {
      icon: Wallet,
      title: "Salary Loan",
      description: "Loans based on regular salary income with fast processing.",
      features: ["Based on salary income", "Fast processing", "Competitive rates"],
      borderColor: "border-yellow-500",
      iconGradient: "from-yellow-400 to-yellow-600",
      emoji: "⚡",
      iconColor: "text-yellow-500"
    },
    {
      icon: Award,
      title: "Pension Loan",
      description: "Special program for pensioners with competitive senior rates.",
      features: ["Pension-backed security", "Competitive senior rates", "Flexible terms"],
      borderColor: "border-blue-500",
      iconGradient: "from-blue-400 to-blue-600",
      emoji: "👴",
      iconColor: "text-blue-500"
    },
    {
      icon: BookOpen,
      title: "Educational Loan",
      description: "Support for educational goals with flexible repayment options.",
      features: ["Tuition and academic expenses", "Flexible repayment", "Co-maker options"],
      borderColor: "border-green-500",
      iconGradient: "from-green-400 to-green-600",
      emoji: "📚",
      iconColor: "text-green-500"
    },
    {
      icon: Phone,
      title: "Cellphone Loan",
      description: "Latest mobile devices financing with accessories included.",
      features: ["Latest mobile devices", "Accessories included", "Flexible payment terms"],
      borderColor: "border-yellow-500",
      iconGradient: "from-yellow-400 to-yellow-600",
      emoji: "📱",
      iconColor: "text-yellow-500"
    },
    {
      icon: Home,
      title: "Appliances Loan",
      description: "Home appliances financing with extended warranty options.",
      features: ["Home appliances", "Electronics financing", "Extended warranty options"],
      borderColor: "border-blue-500",
      iconGradient: "from-blue-400 to-blue-600",
      emoji: "🏠",
      iconColor: "text-blue-500"
    },
    {
      icon: Award,
      title: "Honorarium Loan",
      description: "Professional development financing for career advancement.",
      features: ["Professional development", "Certification courses", "Career advancement"],
      borderColor: "border-green-500",
      iconGradient: "from-green-400 to-green-600",
      emoji: "🎓",
      iconColor: "text-green-500"
    }
  ],
  productive: [
    {
      icon: Building2,
      title: "Micro-Enterprise Loan",
      description: "Support for small businesses and micro-enterprises with comprehensive financing.",
      features: ["Business startup capital", "Working capital financing", "Equipment and inventory"],
      borderColor: "border-green-500",
      iconGradient: "from-green-400 to-green-600",
      emoji: "💼",
      iconColor: "text-green-500"
    },
    {
      icon: Tractor,
      title: "Agricultural Loan",
      description: "Specialized financing for farming and agricultural activities.",
      features: ["Crop production financing", "Livestock and poultry raising", "Farm equipment and machinery"],
      borderColor: "border-yellow-500",
      iconGradient: "from-yellow-400 to-yellow-600",
      emoji: "🚜",
      iconColor: "text-yellow-500"
    }
  ],
  emergency: [
    {
      icon: Heart,
      title: "Hospitalization/Burial Loan",
      description: "Financial support for medical emergencies and burial expenses with quick processing.",
      features: ["Coverage for hospitalization costs", "Burial and funeral expenses", "Quick emergency processing"],
      borderColor: "border-red-500",
      iconGradient: "from-red-400 to-red-600",
      emoji: "🏥",
      iconColor: "text-red-500"
    },
    {
      icon: AlertTriangle,
      title: "Calamity Loan",
      description: "Assistance for members affected by natural disasters and calamities.",
      features: ["Natural disaster support", "Emergency relief funding", "Reduced interest rates"],
      borderColor: "border-orange-500",
      iconGradient: "from-orange-400 to-orange-600",
      emoji: "🌪️",
      iconColor: "text-orange-500"
    }
  ],
  shortTerm: [
    {
      icon: PhilippinePeso,
      title: "Petty Cash Loan",
      description: "Small amount loans for daily operational expenses with fast approval.",
      features: ["Quick processing", "Low interest rates", "Short repayment period"],
      borderColor: "border-blue-500",
      iconGradient: "from-blue-400 to-blue-600",
      emoji: "💰",
      iconColor: "text-blue-500"
    },
    {
      icon: Wheat,
      title: "Rice Loan",
      description: "Seasonal loans for rice farming and related agricultural activities.",
      features: ["Seasonal financing", "Agricultural focus", "Harvest-based repayment"],
      borderColor: "border-yellow-500",
      iconGradient: "from-yellow-400 to-yellow-600",
      emoji: "🌾",
      iconColor: "text-yellow-500"
    }
  ]
};

interface LoanCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  borderColor: string;
  iconGradient: string;
  emoji: string;
  iconColor: string;
}

const LoanCard = ({ icon: Icon, title, description, features, borderColor, iconGradient, emoji, iconColor }: LoanCardProps) => (
  <div className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 ${borderColor}`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 bg-gradient-to-br ${iconGradient} rounded-xl flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl">{emoji}</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start text-sm">
          <CheckCircle className={`w-4 h-4 ${iconColor} mr-2 mt-0.5 flex-shrink-0`} />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function LoanPackages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-6">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <span className="text-sm font-semibold text-gray-900">FLEXIBLE FINANCING SOLUTIONS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Loan Packages for
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
              Every Need
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From personal goals to business growth, we offer comprehensive loan solutions tailored to your unique financial needs with competitive rates and flexible terms.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">13+</div>
              <div className="text-sm text-gray-600">Loan Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">₱500M+</div>
              <div className="text-sm text-gray-600">Loans Disbursed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">24-48hrs</div>
              <div className="text-sm text-gray-600">Fast Approval</div>
            </div>
          </div>

          {/* Quick category navigation */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#multi-purpose" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Multi-Purpose
            </a>
            <a href="#productive" className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Productive
            </a>
            <a href="#emergency" className="px-6 py-3 bg-gradient-to-r from-blue-700 to-yellow-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Emergency
            </a>
            <a href="#short-term" className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Short Term
            </a>
          </div>
        </div>
      </section>

      {/* Multi-Purpose Loans Section */}
      <section id="multi-purpose" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full mb-4">
            <PhilippinePeso className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600">MULTI-PURPOSE LOANS</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Flexible Personal Financing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored loan solutions for your personal and professional needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOAN_CATEGORIES.multiPurpose.map((loan, index) => (
            <LoanCard key={index} {...loan} />
          ))}
        </div>
      </section>

      {/* Productive Loans Section */}
      <section id="productive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-full mb-4">
            <Building2 className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-semibold text-green-600">PRODUCTIVE LOANS</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Business Growth Financing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering entrepreneurs and farmers with capital for business expansion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {LOAN_CATEGORIES.productive.map((loan, index) => (
            <LoanCard key={index} {...loan} />
          ))}
        </div>
      </section>

      {/* Emergency Loans Section */}
      <section id="emergency" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-full mb-4">
            <Heart className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-sm font-semibold text-red-600">EMERGENCY LOANS</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Emergency Financial Support
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Critical financial support when you need it most during life's unexpected moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {LOAN_CATEGORIES.emergency.map((loan, index) => (
            <LoanCard key={index} {...loan} />
          ))}
        </div>
      </section>

      {/* Short Term Loans Section */}
      <section id="short-term" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-full mb-4">
            <Clock className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="text-sm font-semibold text-yellow-600">SHORT TERM LOANS</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Quick Access Financing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fast and flexible financing solutions for immediate financial needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {LOAN_CATEGORIES.shortTerm.map((loan, index) => (
            <LoanCard key={index} {...loan} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-blue-100">Get started with your loan application today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Apply Online
            </a>
            <a href="/contact" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-semibold hover:bg-white/30 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
