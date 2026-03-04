'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calculator, PiggyBank, Wallet, CreditCard, Users, Award, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">Trusted Since 1971</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Building Wealth, <br />
              <span className="text-yellow-400">Creating Futures</span>
            </h1>
            
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              San Jose Municipal Cooperative is your partner in financial success. 
              Join thousands of satisfied members today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/online-application"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
              >
                <PiggyBank className="mr-2 w-5 h-5" />
                Start Saving
              </Link>
              <Link
                href="/loan-packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border-2 border-white/30 transition-all duration-300"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Get a Loan
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">10K+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">₱50M+ Loans</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">5 Branches</span>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <PiggyBank className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Savings Account</h3>
              <p className="text-blue-200 text-sm mb-4">Safe and secure savings with competitive interest rates.</p>
              <Link href="/savings-product" className="text-yellow-400 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 mt-8">
              <div className="w-14 h-14 bg-green-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <CreditCard className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Quick Loans</h3>
              <p className="text-blue-200 text-sm mb-4">Fast approval loans to meet your financial needs.</p>
              <Link href="/loan-packages" className="text-green-400 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Time Deposit</h3>
              <p className="text-blue-200 text-sm mb-4">Grow your money with higher interest rates.</p>
              <Link href="/savings-product" className="text-blue-400 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 mt-8">
              <div className="w-14 h-14 bg-purple-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">PMES Seminar</h3>
              <p className="text-blue-200 text-sm mb-4">Join our Pre-Membership Educational Seminar.</p>
              <Link href="/pre-membership-seminar" className="text-purple-400 font-semibold text-sm flex items-center hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Mobile Service Cards - Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 min-w-[200px]">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-3">
                  <PiggyBank className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-white font-bold mb-1">Savings</h3>
                <p className="text-blue-200 text-xs">Safe savings</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 min-w-[200px]">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mb-3">
                  <CreditCard className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-white font-bold mb-1">Quick Loans</h3>
                <p className="text-blue-200 text-xs">Fast approval</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 min-w-[200px]">
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mb-3">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-1">Time Deposit</h3>
                <p className="text-blue-200 text-xs">High interest</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 min-w-[200px]">
                <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center mb-3">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-1">PMES</h3>
                <p className="text-blue-200 text-xs">Join seminar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
