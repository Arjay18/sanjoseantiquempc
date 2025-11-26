'use client';

import { useState, useEffect } from 'react';
import { PhilippinePeso, Building, Heart, Clock, CheckCircle, ArrowRight, BookOpen, Phone, Home, Award, Building2, Tractor, Shield, Wallet, Wheat, AlertTriangle, ChevronDown, Sparkles, Zap, Target, Users } from 'lucide-react';

export default function LoanPackages() {
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

    const sections = document.querySelectorAll('.loan-section');
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

  const loanCategories = [
    { id: 'multi-purpose', label: 'Multi-Purpose', icon: PhilippinePeso },
    { id: 'productive', label: 'Productive', icon: Building2 },
    { id: 'emergency', label: 'Emergency', icon: Heart },
    { id: 'short-term', label: 'Short Term', icon: Clock }
  ];

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              SJMPC SERVICES
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              Discover our Latest
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Loan Packages
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Discover the latest announcements, financial insights, community initiatives, and industry developments
              that are shaping the future of cooperative banking in our region.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Detailed Loan Information */}
        <div className="space-y-20">
          {/* Multi-Purpose Loan Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow rounded-t-3xl"></div>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-brand-blue mb-6 tracking-tight">
                Multi-Purpose Loans
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Flexible financing solutions tailored to your personal and professional needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Providential Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Providential</h3>
                        <span className="text-sm text-green-600 font-semibold">Emergency Aid</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-600">★</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Special loan program for members facing financial difficulties with reduced rates.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Emergency financial assistance
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Reduced interest rates
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Flexible payment schedules
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              {/* Salary Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mr-4">
                        <Wallet className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Salary Loan</h3>
                        <span className="text-sm text-yellow-600 font-semibold">Income-Based</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-yellow-600">⚡</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Loans based on regular salary income with fast processing.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Based on salary income
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Fast processing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Competitive rates
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              {/* Pension Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Pension Loan</h3>
                        <span className="text-sm text-blue-600 font-semibold">Senior Program</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-blue-600">👴</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Special program for pensioners with competitive senior rates.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Pension-backed security
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Competitive senior rates
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Flexible terms
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Educational Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Educational</h3>
                        <span className="text-sm text-green-600 font-semibold">Learning Support</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-600">📚</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Support for educational goals with flexible repayment options.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Tuition and academic expenses
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Flexible repayment
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Co-maker options
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Cellphone Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Cellphone</h3>
                        <span className="text-sm text-yellow-600 font-semibold">Tech Financing</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-yellow-600">📱</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Latest mobile devices financing with accessories included.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Latest mobile devices
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Accessories included
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Flexible payment terms
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Appliances Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Appliances</h3>
                        <span className="text-sm text-blue-600 font-semibold">Home Upgrade</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-blue-600">🏠</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Home appliances financing with extended warranty options.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Home appliances
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Electronics financing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Extended warranty options
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Honorarium Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Honorarium</h3>
                        <span className="text-sm text-green-600 font-semibold">Professional Growth</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-600">🎓</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Professional development financing for career advancement.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Professional development
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Certification courses
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Career advancement
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Productive Loan Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-green-500 to-green-600 rounded-t-3xl"></div>
            <div className="text-center mb-16">
              
              <h2 className="text-5xl font-black text-brand-green mb-6 tracking-tight">
                Productive Loans
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Empowering entrepreneurs and farmers with business growth financing
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Micro-Enterprise Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mr-4">
                        <Building2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Micro-Enterprise</h3>
                        <span className="text-sm text-green-600 font-semibold">Business Growth</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-600">💼</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Support for small businesses and micro-enterprises with comprehensive financing.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Business startup capital
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Working capital for existing businesses
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Equipment and inventory financing
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Agricultural Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mr-4">
                        <Tractor className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Agricultural</h3>
                        <span className="text-sm text-yellow-600 font-semibold">Farm Financing</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-yellow-600">🚜</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Specialized financing for farming and agricultural activities.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Crop production financing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Livestock and poultry raising
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Farm equipment and machinery
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Emergency Loan Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-t-3xl"></div>
            <div className="text-center mb-16">
              
              <h2 className="text-5xl font-black text-red-600 mb-6 tracking-tight">
                Emergency Loans
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Critical financial support when you need it most during emergencies
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Hospitalization/Burial Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mr-4">
                        <Heart className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Hospitalization/Burial</h3>
                        <span className="text-sm text-red-600 font-semibold">Medical Support</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-red-600">🏥</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Financial support for medical emergencies and burial expenses with quick processing.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      Coverage for hospitalization costs
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      Burial and funeral expenses
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      Quick processing during emergencies
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      Flexible payment arrangements
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-200/30 to-red-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Calamity Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Calamity</h3>
                        <span className="text-sm text-orange-600 font-semibold">Disaster Relief</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-orange-600">🌪️</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Assistance for members affected by natural disasters and calamities.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      Support during natural disasters
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      Emergency relief funding
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      Reconstruction assistance
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      Reduced interest rates
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-orange-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Short Term Loan Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-t-3xl"></div>
            <div className="text-center mb-16">
              
              <h2 className="text-5xl font-black text-yellow-600 mb-6 tracking-tight">
                Short Term Loans
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Quick and flexible financing solutions for immediate financial needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Petty Cash Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                        <PhilippinePeso className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Petty Cash</h3>
                        <span className="text-sm text-blue-600 font-semibold">Quick Access</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-blue-600">💰</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Small amount loans for daily operational expenses with fast approval.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Quick processing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Low interest rates
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      Short repayment period
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>

              {/* Rice Loan Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mr-4">
                        <Wheat className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Rice Loan</h3>
                        <span className="text-sm text-yellow-600 font-semibold">Agricultural Support</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-yellow-600">🌾</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">Seasonal loans for rice farming and related agricultural activities.</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Seasonal financing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Agricultural focus
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      Flexible harvest-based repayment
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow text-black rounded-3xl p-16 mt-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6">Ready to Apply?</h3>
            <p className="mb-10 text-xl opacity-90 font-light leading-relaxed max-w-2xl mx-auto">
              Contact us today to discuss your loan requirements and get started with your application.
            </p>
            <button className="group relative bg-blue-400 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
