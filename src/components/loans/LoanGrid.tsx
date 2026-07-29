"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Banknote, Sparkles, Clock } from "lucide-react";
import { LOAN_PRODUCTS } from "./loanData";

export default function LoanGrid() {
  return (
    <div className="w-full bg-white">
      {/* Introduction Header */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-[#006B3F] font-bold tracking-wide uppercase text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Our Loan Products & Packages
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#004D2D] tracking-tight">
            Financing Solutions Tailored to You
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover flexible, affordable, and community-first loan packages designed to empower your business, family, and personal endeavors.
          </p>
        </div>
      </section>

      {/* Alternating Per-Section Loan Products */}
      <div className="divide-y divide-gray-100">
        {LOAN_PRODUCTS.map((product, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <section
              key={product.id || product.name}
              id={product.id || `loan-${idx}`}
              className={`py-16 sm:py-24 ${isEven ? 'bg-white' : 'bg-[#F7FAF8]'} transition-colors overflow-hidden relative`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  
                  {/* Image Column */}
                  {/* Even Index: Image on LEFT (lg:order-1) | Odd Index: Image on RIGHT (lg:order-2) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group h-[320px] xs:h-[380px] sm:h-[420px] lg:h-[460px] w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#004D2D] font-bold text-xs shadow-md uppercase tracking-wider">
                          <product.Icon className="w-4 h-4 text-[#D4AF37]" />
                          {product.category || "SJMPC Loan Package"}
                        </span>
                      </div>

                      {/* Floating Loan Limit Info Box */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#004D2D] text-[#D4AF37] flex items-center justify-center flex-shrink-0 font-black text-sm">
                            #{String(idx + 1).padStart(2, '0')}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider truncate">Maximum Financing</p>
                            <p className="text-sm font-extrabold text-[#004D2D] truncate">{product.loanAmount}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  {/* Even Index: Content on RIGHT (lg:order-2) | Odd Index: Content on LEFT (lg:order-1) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    {/* Eyebrow & Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-1.5 w-8 bg-[#D4AF37] rounded-full" />
                      <span className="text-[#006B3F] font-extrabold text-xs uppercase tracking-widest">
                        {product.category || "Loan Package"}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-3xl sm:text-4xl font-black text-[#004D2D] tracking-tight leading-tight">
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    {product.tagline && (
                      <p className="mt-1 text-sm font-bold text-[#D4AF37] uppercase tracking-wide">
                        {product.tagline}
                      </p>
                    )}

                    {/* Short Description */}
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Loan Amount & Term Cards */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                          <Banknote className="w-4 h-4 text-[#006B3F]" />
                          Loan Amount Limit
                        </p>
                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {product.loanAmount}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-100">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#D4AF37]" />
                          Repayment Term & Interest
                        </p>
                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {product.repaymentTerm} • {product.interestInformation}
                        </p>
                      </div>
                    </div>

                    {/* Key Benefits List */}
                    <div className="mt-6">
                      <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3">
                        Key Advantages & Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.keyBenefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#006B3F] mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href="/loan-application"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#004D2D] text-white font-extrabold text-sm hover:bg-[#003d22] active:scale-95 transition-all shadow-md hover:shadow-xl"
                      >
                        Apply for {product.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}


