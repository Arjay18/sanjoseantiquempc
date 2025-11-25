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
      {/* Sticky Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-black text-brand-blue">SJPMC</div>
              <nav className="hidden md:flex space-x-6">
                {loanCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => scrollToSection(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                        activeSection === category.id
                          ? 'bg-brand-blue text-white shadow-lg'
                          : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue/10'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
            <button className="bg-gradient-to-r from-brand-blue to-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-brand-blue" />
            <span className="text-brand-blue font-semibold">Trusted Financial Partner</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-brand-blue mb-8 tracking-tight">
            LOAN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-yellow">
              PACKAGES
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Discover our comprehensive loan packages designed to meet your financial needs with competitive rates,
            flexible terms, and personalized service that puts you first.
          </p>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40">
              <div className="text-3xl font-black text-brand-blue mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Happy Members</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40">
              <div className="text-3xl font-black text-brand-green mb-2">₱2.5B</div>
              <div className="text-gray-600 font-medium">Total Loans Disbursed</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40">
              <div className="text-3xl font-black text-brand-yellow mb-2">98%</div>
              <div className="text-gray-600 font-medium">Approval Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40">
              <div className="text-3xl font-black text-red-500 mb-2">24hrs</div>
              <div className="text-gray-600 font-medium">Quick Processing</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-brand-blue to-brand-green text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-blue/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Explore Loans</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative bg-white/80 backdrop-blur-xl text-brand-blue px-12 py-5 rounded-2xl font-bold text-lg border border-brand-blue/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Contact Advisor</span>
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Detailed Loan Information */}
        <div className="space-y-20">
          {/* Multi-Purpose Loan Details */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow rounded-t-3xl"></div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-blue/20 to-brand-green/20 rounded-2xl mb-6">
                <PhilippinePeso className="w-10 h-10 text-brand-blue" />
              </div>
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
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-green/20 to-green-300/20 rounded-2xl mb-6">
                <Building2 className="w-10 h-10 text-brand-green" />
              </div>
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100/20 to-red-300/20 rounded-2xl mb-6">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-100/20 to-yellow-300/20 rounded-2xl mb-6">
                <Clock className="w-10 h-10 text-yellow-600" />
              </div>
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
