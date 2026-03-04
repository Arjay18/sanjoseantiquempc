'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Users, TrendingUp, HandHeart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">San Jose Municipal Cooperative</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Your Trusted <span className="text-yellow-400">Cooperative</span> for Financial Growth
            </h1>
            
            <p className="text-blue-100 text-lg md:text-xl mb-6 max-w-2xl mx-auto lg:mx-0">
              Join thousands of members who trust SJMPC for safe savings, affordable loans, and exceptional community service since 1971.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/online-application"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/10">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-blue-200 text-sm">Years of Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/10">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-green-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
              <div className="text-blue-200 text-sm">Active Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/10">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">₱50M+</div>
              <div className="text-blue-200 text-sm">Loans Granted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/10">
              <HandHeart className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Branch Offices</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
