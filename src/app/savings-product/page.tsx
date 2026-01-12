'use client';

import { useState, useEffect } from 'react';
import { PiggyBank, Clock, Coins, TrendingUp, Heart, Calendar, Gift, Plane, Home, AlertTriangle, Church, CheckCircle, Target } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-yellow-900/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-blue-900/50 dark:to-yellow-900/50 text-blue-800 dark:text-blue-300 text-sm font-semibold mb-8 shadow-lg">
              <PiggyBank className="w-5 h-5 mr-2" />
              SAVINGS PRODUCTS
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              Build Your Future with
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
                Smart Savings
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive savings solutions designed to help you achieve your financial goals with competitive rates and flexible terms.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Detailed Savings Information */}
        <div className="space-y-16">
          {/* Regular Savings Details */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
                <PiggyBank className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-600">ESSENTIAL SAVINGS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Regular Savings
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Essential savings accounts for all SJMPC members with flexible access and competitive interest rates
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Regular Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Regular Savings</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-4">Member Requirement</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">A requirement for all SJMPC Members with ₱500.00 maintaining balance and ₱100 minimum deposit to earn interest. Liquid account with anytime withdrawal.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">₱500 minimum maintaining balance</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">₱100 minimum deposit</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Anytime withdrawal</span>
                  </div>
                </div>
              </div>

              {/* Time Deposit Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Time Deposit</h3>
                <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-semibold rounded-full mb-4">High Interest</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Certificate issued for every account opened. Interest varies by amount and term - longer terms and higher amounts earn better rates.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">₱5,000 minimum deposit</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Higher interest for longer terms</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Certificate for each account</span>
                  </div>
                </div>
              </div>

              {/* Alkansya Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Alkansya Savings</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-4">2-Year Term</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Regular savings account with 2-year term and no minimum pledge. Principal and interest credited to regular savings when matured.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">2-year term</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">No minimum pledge amount</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest to regular savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Long Term Savings Details */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-full mb-4">
                <TrendingUp className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-sm font-semibold text-yellow-600">LONG-TERM SAVINGS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Long Term Savings
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Secure your future with our long-term savings programs designed for financial stability and retirement planning
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ultima Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ultima Savings</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-6">5-10 Year Plan</span>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">A regular monthly savings for SJMPC member with the term of 5 years or 10 years based on your monthly pledge amount. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">5 or 10 year terms available</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Monthly pledge commitment</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>

              {/* Retirement Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl">🏖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Retirement Savings</h3>
                <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-semibold rounded-full mb-6">5-Year Plan</span>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">A regular saving account for SJMPC members with term of 5 years with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">5-year retirement planning</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">P500 initial minimum deposit</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Purpose Savings Details */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-blue-900/50 dark:to-yellow-900/50 rounded-full mb-4">
                <Target className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-600">SPECIAL PURPOSE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Special Purpose Savings
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tailored savings programs for specific life goals and celebrations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Christmas Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">🎄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Christmas Savings</h3>
                <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-semibold rounded-full mb-4">Holiday Fund</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">A special savings program for Christmas celebrations with flexible monthly deposits. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Flexible monthly deposits</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Christmas celebration fund</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>

              {/* Educational Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Educational Savings</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-4">Education Fund</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">A savings program designed for educational expenses with flexible terms. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Flexible term options</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Educational expense planning</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>

              {/* Calamity Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-yellow-500 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Calamity Savings</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-4">Emergency Fund</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">An emergency savings program for unexpected calamities and disasters. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Emergency preparedness</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Calamity protection fund</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>

              {/* Travel Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Travel Savings</h3>
                <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-semibold rounded-full mb-4">Vacation Fund</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">A savings program for travel and vacation expenses with flexible monthly deposits. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Flexible monthly deposits</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Travel and vacation planning</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>

              {/* Housing Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Housing Savings</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-4">Home Fund</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">A savings program for housing and home improvement expenses. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Housing expense planning</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Home improvement fund</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>

              {/* Church Savings Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Church className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">⛪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Church Savings</h3>
                <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-semibold rounded-full mb-4">Spiritual Fund</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">A savings program for church-related expenses and spiritual activities. Principal and Interest earn will be credited to your regular saving account when matured.</p>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Church expense planning</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Spiritual activities fund</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Principal & interest credited to regular savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
