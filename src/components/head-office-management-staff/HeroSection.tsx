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
    <section className="relative overflow-hidden bg-[#EFF9F0]">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, rgba(11,93,59,0.08), rgba(11,93,59,0) 55%), linear-gradient(180deg, rgba(234,245,238,0.65), rgba(255,255,255,0.95))',
        }}
      />

      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_50%),radial-gradient(circle_at_top_right,rgba(11,93,59,0.10),transparent_50%)] pointer-events-none" />
      <div className="absolute -right-20 top-10 h-[260px] w-[260px] rounded-full bg-[#D4A017]/15 blur-2xl" aria-hidden="true" />
      <div className="absolute left-8 top-28 h-28 w-28 rounded-full bg-[#0B5D3B]/10 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 items-center">
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

              <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#06452C]">
                Head Office
                <span className="block text-[#0B5D3B]">Management Staff</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#374151] leading-relaxed">
                Discover the leadership team that ensures cooperative excellence, member-centered service, and strong community support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#team"
                  className="inline-flex items-center justify-center rounded-xl bg-[#D4A017] px-6 py-4 text-sm font-bold text-[#06452C] shadow-lg shadow-[#D4A017]/20 transition duration-200 hover:brightness-105"
                >
                  Meet Our Team
                </a>
                <a
                  href="#team"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B5D3B] bg-white px-6 py-4 text-sm font-bold text-[#0B5D3B] transition duration-200 hover:bg-[#F3F9F3]"
                >
                  Explore Departments
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Leadership', value: 'Trusted decision-making' },
                  { label: 'Support', value: 'Member-first service' },
                  { label: 'Growth', value: 'Community impact' },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-[#D4A017]/20 bg-white/90 p-4 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div aria-hidden="true" className="absolute -bottom-10 -left-5 h-20 w-20 rounded-2xl bg-[#0B5D3B]/10 blur-sm" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[320px] sm:h-[380px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-[#E5E7EB]"
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
                className="absolute inset-0 bg-gradient-to-t from-[#06452C]/75 via-[#0B5D3B]/30 to-transparent"
              />
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4A017]/20 blur-2xl" />

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

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl backdrop-blur-sm sm:left-auto sm:w-[calc(100%-4rem)] lg:w-[20rem] lg:right-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B5D3B]">
                  Head Office Highlights
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-[#F3F9F3] p-3">
                    <p className="text-sm font-semibold text-[#06452C]">Member-centered leadership</p>
                  </div>
                  <div className="rounded-2xl bg-[#F3F9F3] p-3">
                    <p className="text-sm font-semibold text-[#06452C]">Operational excellence</p>
                  </div>
                  <div className="rounded-2xl bg-[#F3F9F3] p-3">
                    <p className="text-sm font-semibold text-[#06452C]">Trusted local support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

