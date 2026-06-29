"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] shadow-sm bg-white"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#0B5D3B]/10 via-transparent to-[#D4A017]/10" />
          <div aria-hidden="true" className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#D4A017]/15 blur-3xl" />

          <div className="relative px-6 sm:px-10 py-12 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#0B5D3B]">GET INVOLVED</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#06452C]">
                  Join our cooperative. Grow with trust.
                </h2>
                <p className="mt-4 text-[#6B7280] leading-relaxed max-w-xl">
                  Become a member or apply for a loan with guidance from professionals who support your goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
                <Link
                  href="/registration"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2 bg-[#D4A017] text-[#06452C] hover:brightness-105"
                >
                  Become a Member
                </Link>
                <Link
                  href="/loan-application"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 border border-white bg-transparent text-white hover:bg-white/10"
                  style={{
                    background: 'rgba(6,69,44,0.08)',
                  }}
                >
                  Apply for a Loan
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

