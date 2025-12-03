'use client';

import { useState, useEffect } from 'react';
import { PiggyBank, Clock, Coins, TrendingUp, Heart, Calendar, Gift, Plane, Home, AlertTriangle, Church, CheckCircle } from 'lucide-react';

export default function SavingsProduct() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.savings-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              SJMPC SAVINGS
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              Discover our Savings
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Build your financial future with our comprehensive savings products designed to help you achieve your goals with competitive rates and flexible terms.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Detailed Savings Information */}
        <div className="space-y-20">
          {/* Regular Savings Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow rounded-t-3xl"></div>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-brand-blue mb-6 tracking-tight">
                Regular Savings
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Essential savings accounts for all SJMPC members with flexible access and competitive interest rates
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Regular Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mr-4">
                        <PiggyBank className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Regular Savings</h3>
                        <span className="text-sm text-green-600 font-semibold">Member Requirement</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-600">💰</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A requirement for all SJMPC Members with P500.00 maintaining balance and P100 minimum deposit to earn interest. A liquid savings account with no contractual maturity and can be withdrawn anytime.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      P500 minimum maintaining balance
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      P100 minimum deposit
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Liquid account - anytime withdrawal
                    </div>
                  </div>
                  
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Time Deposit Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Time Deposit</h3>
                        <span className="text-sm text-yellow-600 font-semibold">High Interest</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-yellow-600">⏰</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A regular time deposit certificate issued to the member for every account opened. Interest on deposits varies depending on the amount, the longer the term and amount, the higher the interest rate.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      P5,000 minimum deposit
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Higher interest for longer terms
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Certificate issued for each account
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Alkansya Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                        <Coins className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Alkansya Savings</h3>
                        <span className="text-sm text-blue-600 font-semibold">2-Year Term</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-blue-600">💎</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A regular saving account for SJMPC members with term of 2 years but with no minimum amount pledge. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      2-year term
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      No minimum pledge amount
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Long Term Savings Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-green-500 to-green-600 rounded-t-3xl"></div>
            <div className="text-center mb-16">

              <h2 className="text-5xl font-black text-brand-green mb-6 tracking-tight">
                Long Term Savings
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Secure your future with our long-term savings programs designed for financial stability and retirement planning
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ultima Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Ultima Savings</h3>
                        <span className="text-sm text-green-600 font-semibold">5-10 Year Plan</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-600">📈</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A regular monthly savings for SJMPC member with the term of 5 years or 10 years based on your monthly pledge amount. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      5 or 10 year terms available
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Monthly pledge commitment
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Retirement Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mr-4">
                        <Heart className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Retirement Savings</h3>
                        <span className="text-sm text-yellow-600 font-semibold">5-Year Plan</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-yellow-600">🏖️</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A regular saving account for SJMPC members with term of 5 years with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      5-year retirement planning
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      P500 initial minimum deposit
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Special Purpose Savings Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-t-3xl"></div>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-purple-600 mb-6 tracking-tight">
                Special Purpose Savings
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Tailored savings programs for specific life goals and celebrations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Christmas Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mr-4">
                        <Gift className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Christmas Savings</h3>
                        <span className="text-sm text-red-600 font-semibold">Holiday Fund</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-red-600">🎄</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A special savings program for Christmas celebrations with flexible monthly deposits. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      Flexible monthly deposits
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      Christmas celebration fund
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-200/30 to-red-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Educational Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Educational Savings</h3>
                        <span className="text-sm text-blue-600 font-semibold">Education Fund</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-blue-600">🎓</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A savings program designed for educational expenses with flexible terms. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Flexible term options
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Educational expense planning
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Calamity Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Calamity Savings</h3>
                        <span className="text-sm text-orange-600 font-semibold">Emergency Fund</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-orange-600">🛡️</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">An emergency savings program for unexpected calamities and disasters. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      Emergency preparedness
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      Calamity protection fund
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-orange-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Travel Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mr-4">
                        <Plane className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Travel Savings</h3>
                        <span className="text-sm text-teal-600 font-semibold">Vacation Fund</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-teal-600">✈️</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A savings program for travel and vacation expenses with flexible monthly deposits. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                      Flexible monthly deposits
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                      Travel and vacation planning
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-teal-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Housing Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mr-4">
                        <Home className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Housing Savings</h3>
                        <span className="text-sm text-indigo-600 font-semibold">Home Fund</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-indigo-600">🏠</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A savings program for housing and home improvement expenses. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                      Housing expense planning
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                      Home improvement fund
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-200/30 to-indigo-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Church Savings Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-4">
                        <Church className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Church Savings</h3>
                        <span className="text-sm text-purple-600 font-semibold">Spiritual Fund</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-purple-600">⛪</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">A savings program for church-related expenses and spiritual activities. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                      Church expense planning
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                      Spiritual activities fund
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                      Principal & interest credited to regular savings
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-purple-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
