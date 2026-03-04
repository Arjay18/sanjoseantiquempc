'use client';

import Link from 'next/link';
import { ArrowRight, Calculator, PiggyBank, Wallet, CreditCard, Users, Award, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">Trusted Since 1971</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Building Wealth, <br />
              <span className="text-blue-600">Creating Futures</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              San Jose Municipal Cooperative is your partner in financial success. 
              Join thousands of satisfied members today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/online-application"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-600/25"
              >
                <PiggyBank className="mr-2 w-5 h-5" />
                Start Saving
              </Link>
              <Link
                href="/loan-packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-bold rounded-full border-2 border-blue-200 transition-all duration-300"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Get a Loan
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">10K+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">₱50M+ Loans</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">5 Branches</span>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <PiggyBank className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-blue-900 font-bold text-lg mb-2">Savings Account</h3>
              <p className="text-gray-500 text-sm mb-4">Safe and secure savings with competitive interest rates.</p>
              <Link href="/savings-product" className="text-blue-600 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-8">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-blue-900 font-bold text-lg mb-2">Quick Loans</h3>
              <p className="text-gray-500 text-sm mb-4">Fast approval loans to meet your financial needs.</p>
              <Link href="/loan-packages" className="text-green-600 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Wallet className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-blue-900 font-bold text-lg mb-2">Time Deposit</h3>
              <p className="text-gray-500 text-sm mb-4">Grow your money with higher interest rates.</p>
              <Link href="/savings-product" className="text-yellow-600 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-8">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Calculator className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-blue-900 font-bold text-lg mb-2">PMES Seminar</h3>
              <p className="text-gray-500 text-sm mb-4">Join our Pre-Membership Educational Seminar.</p>
              <Link href="/pre-membership-seminar" className="text-purple-600 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Mobile Service Cards - Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 border border-blue-100 min-w-[180px]">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <PiggyBank className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-blue-900 font-bold mb-1">Savings</h3>
                <p className="text-gray-500 text-xs">Safe savings</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-5 border border-green-100 min-w-[180px]">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-blue-900 font-bold mb-1">Quick Loans</h3>
                <p className="text-gray-500 text-xs">Fast approval</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-5 border border-yellow-100 min-w-[180px]">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                  <Wallet className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-blue-900 font-bold mb-1">Time Deposit</h3>
                <p className="text-gray-500 text-xs">High interest</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-5 border border-purple-100 min-w-[180px]">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <Calculator className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-blue-900 font-bold mb-1">PMES</h3>
                <p className="text-gray-500 text-xs">Join seminar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
