'use client';

import { PhilippinePeso, Heart, Clock, CheckCircle, BookOpen, Phone, Home, Award, Building2, Tractor, Shield, Wallet, Wheat, AlertTriangle } from 'lucide-react';

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
          {/* Loan Card - Providential */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">★</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Providential Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Special loan program for members facing financial difficulties with reduced rates.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Emergency financial assistance</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Reduced interest rates</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible payment schedules</span>
              </div>
            </div>
          </div>

          {/* Loan Card - Salary */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Salary Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Loans based on regular salary income with fast processing.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Based on salary income</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Fast processing</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Competitive rates</span>
              </div>
            </div>
          </div>

          {/* Loan Card - Pension */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">👴</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pension Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Special program for pensioners with competitive senior rates.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Pension-backed security</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Competitive senior rates</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible terms</span>
              </div>
            </div>
          </div>

          {/* Loan Card - Educational */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Support for educational goals with flexible repayment options.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Tuition and academic expenses</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible repayment</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Co-maker options</span>
              </div>
            </div>
          </div>

          {/* Loan Card - Cellphone */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cellphone Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Latest mobile devices financing with accessories included.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Latest mobile devices</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Accessories included</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible payment terms</span>
              </div>
            </div>
          </div>

          {/* Loan Card - Appliances */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Appliances Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Home appliances financing with extended warranty options.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Home appliances</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Electronics financing</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Extended warranty options</span>
              </div>
            </div>
          </div>

          {/* Loan Card - Honorarium */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Honorarium Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Professional development financing for career advancement.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Professional development</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Certification courses</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Career advancement</span>
              </div>
            </div>
          </div>
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
          {/* Micro-Enterprise */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Micro-Enterprise Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Support for small businesses and micro-enterprises with comprehensive financing.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Business startup capital</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Working capital financing</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Equipment and inventory</span>
              </div>
            </div>
          </div>

          {/* Agricultural */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Tractor className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">🚜</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Agricultural Loan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Specialized financing for farming and agricultural activities.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Crop production financing</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Livestock and poultry raising</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Farm equipment and machinery</span>
        </div>
            </div>
          </div>
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
          {/* Hospitalization/Burial */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hospitalization/Burial Loan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Financial support for medical emergencies and burial expenses with quick processing.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Coverage for hospitalization costs</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Burial and funeral expenses</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Quick emergency processing</span>
              </div>
            </div>
          </div>

          {/* Calamity */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">🌪️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Calamity Loan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Assistance for members affected by natural disasters and calamities.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Natural disaster support</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Emergency relief funding</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Reduced interest rates</span>
              </div>
            </div>
          </div>
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
          {/* Petty Cash */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <PhilippinePeso className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Petty Cash Loan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Small amount loans for daily operational expenses with fast approval.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Quick processing</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Low interest rates</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Short repayment period</span>
              </div>
            </div>
          </div>

          {/* Rice Loan */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">🌾</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Rice Loan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Seasonal loans for rice farming and related agricultural activities.</p>
            <div className="space-y-2">
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Seasonal financing</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Agricultural focus</span>
              </div>
              <div className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Harvest-based repayment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-blue-100">Get started with your loan application today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/loan-application" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
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
