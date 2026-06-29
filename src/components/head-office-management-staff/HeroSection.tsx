"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const COLORS = {
  primaryGreen: '#0B5D3B',
  darkGreen: '#06452C',
  gold: '#D4A017',
  lightGreen: '#EAF5EE',
  white: '#FFFFFF',
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, rgba(11,93,59,0.08), rgba(11,93,59,0) 55%), linear-gradient(180deg, rgba(234,245,238,0.65), rgba(255,255,255,0.95))',
        }}
      />

      <div className="absolute -right-20 top-10 h-[260px] w-[260px] rounded-full bg-[#D4A017]/15 blur-2xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#0B5D3B]">
                OUR PEOPLE
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Head Office
                <span className="block text-[#0B5D3B]">Management Staff</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#6B7280] max-w-xl leading-relaxed">
                Meet the dedicated professionals who drive our cooperative's operations and serve our community with excellence and commitment.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="mt-8"
              >
                <a
                  href="#team"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2 bg-[#D4A017] text-[#06452C] hover:brightness-105 shadow-sm"
                >
                  Meet Our Team
                </a>
              </motion.div>

              {/* Gold accent curve */}
              <div
                aria-hidden="true"
                className="absolute -left-8 -top-6 h-24 w-24 rounded-full border-[3px] border-[#D4A017] opacity-60"
                style={{ borderStyle: 'solid', borderColor: COLORS.gold }}
              />
            </motion.div>

            {/* Mobile floating elements */}
            <div aria-hidden="true" className="absolute -bottom-10 -left-5 h-16 w-16 rounded-2xl bg-[#0B5D3B]/10 blur-sm" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[320px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB]"
            >
              <Image
                src="/images/433653723_8032419583452138_6238720083292977796_n.jpg"
                alt="SJAMPC head office team photo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#06452C]/70 via-[#0B5D3B]/25 to-transparent"
              />
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4A017]/20 blur-2xl" />

              {/* Subtle floating dots */}
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-6 top-8 h-3 w-3 rounded-full bg-[#D4A017] opacity-70"
              />
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute right-10 bottom-14 h-2 w-2 rounded-full bg-[#EAF5EE] opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

