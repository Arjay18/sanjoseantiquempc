'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Shield, Smartphone, Users, BookOpen, Video, Calendar, FileText, CreditCard, Award } from 'lucide-react';

export default function OnlineApplication() {
  const [activeTab, setActiveTab] = useState<'loans' | 'pmes'>('loans');

  const loanFeatures = [
    {
      icon: FileText,
      title: "Complete Online Forms",
      description: "Fill out comprehensive loan application forms with guided assistance and auto-save functionality."
    },
    {
      icon: Shield,
      title: "Secure Document Upload",
      description: "Upload and store your documents securely with bank-level encryption and privacy protection."
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Track your application status in real-time with instant notifications and progress updates."
    },
    {
      icon: CheckCircle,
      title: "Instant Preliminary Approval",
      description: "Receive instant preliminary approval for qualified applications with immediate next steps."
    },
    {
      icon: CreditCard,
      title: "Multiple Loan Types",
      description: "Apply for various loan products including personal, business, educational, and agricultural loans."
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "Complete your application seamlessly on any device - desktop, tablet, or mobile phone."
    }
  ];

  const pmesFeatures = [
    {
      icon: Video,
      title: "Virtual Seminars",
      description: "Attend interactive online PMES sessions from the comfort of your home via Zoom or our platform."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from multiple session times and dates that fit your schedule, including weekends."
    },
    {
      icon: Users,
      title: "Live Interaction",
      description: "Engage with cooperative experts and fellow participants through live Q&A and discussions."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Learn about cooperative principles, membership benefits, and financial products in detail."
    },
    {
      icon: Award,
      title: "Certificate of Completion",
      description: "Receive a digital certificate upon completion, required for membership application."
    },
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Access recorded sessions and supplementary materials for flexible learning pace."
    }
  ];

  const loanProcess = [
    { step: 1, title: "Create Account", description: "Register with your basic information and contact details." },
    { step: 2, title: "Fill Application", description: "Complete the detailed loan application form with all required information." },
    { step: 3, title: "Upload Documents", description: "Securely upload required documents like ID, income proof, and collateral details." },
    { step: 4, title: "Review & Submit", description: "Review your application, accept terms, and submit for processing." },
    { step: 5, title: "Track Progress", description: "Monitor your application status and receive real-time updates." },
    { step: 6, title: "Approval & Disbursement", description: "Receive approval notification and proceed with loan disbursement." }
  ];

  const pmesProcess = [
    { step: 1, title: "Register Online", description: "Sign up for PMES through our online portal with your contact information." },
    { step: 2, title: "Choose Session", description: "Select your preferred date and time from available virtual sessions." },
    { step: 3, title: "Receive Access", description: "Get Zoom meeting details and access links via email and SMS." },
    { step: 4, title: "Attend Seminar", description: "Join the interactive session and participate in discussions and Q&A." },
    { step: 5, title: "Complete Assessment", description: "Take a short quiz to demonstrate understanding of cooperative principles." },
    { step: 6, title: "Get Certificate", description: "Receive your digital certificate of completion for membership application." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Now Available Online
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Online Applications
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Experience the future of cooperative services with our comprehensive online platform.
              Apply for loans and attend PMES seminars from anywhere, anytime.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/30">
              <button
                onClick={() => setActiveTab('loans')}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'loans'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                Online Loan Application
              </button>
              <button
                onClick={() => setActiveTab('pmes')}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'pmes'
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                Online PMES
              </button>
            </div>
          </div>

          {/* Loan Application Content */}
          {activeTab === 'loans' && (
            <div className="space-y-16">
              {/* Hero Section for Loans */}
              <div className="text-center bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Online Loan Application
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Apply for loans online with our secure, user-friendly platform. Experience fast processing,
                  real-time tracking, and instant preliminary approvals for qualified applications.
                </p>
                <Link
                  href="/loan-application"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Loan Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Online Loan Application?</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {loanFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Simple 6-Step Process</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {loanProcess.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white rounded-3xl p-12 shadow-2xl">
                <h3 className="text-4xl font-black mb-6">Ready to Apply for a Loan?</h3>
                <p className="mb-10 text-xl opacity-90 font-light leading-relaxed max-w-2xl mx-auto">
                  Start your online loan application today and experience the convenience of digital banking with SJMPC.
                </p>
                <Link
                  href="/loan-application"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

          {/* PMES Content */}
          {activeTab === 'pmes' && (
            <div className="space-y-16">
              {/* Hero Section for PMES */}
              <div className="text-center bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                  Online PMES
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Attend our Pre-Membership Education Seminar online from anywhere. Learn about cooperative principles,
                  membership benefits, and financial services through interactive virtual sessions.
                </p>
                <Link
                  href="/online-pmes"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Register for PMES
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits of Online PMES</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pmesFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PMES Process */}
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Your PMES Journey</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pmesProcess.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-gradient-to-r from-green-600 via-blue-600 to-green-600 text-white rounded-3xl p-12 shadow-2xl">
                <h3 className="text-4xl font-black mb-6">Start Your Cooperative Journey</h3>
                <p className="mb-10 text-xl opacity-90 font-light leading-relaxed max-w-2xl mx-auto">
                  Join our online PMES and discover how cooperative membership can benefit you and your community.
                </p>
                <Link
                  href="/online-pmes"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

          {/* Bottom CTA Section */}
          <div className="text-center mt-20 bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Need Help Getting Started?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to assist you with your online applications. Contact us for support and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 bg-white/50 backdrop-blur-sm font-semibold rounded-2xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
