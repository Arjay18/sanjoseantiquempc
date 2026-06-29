"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

const values = [
  {
    title: 'Teamwork',
    description: 'We work as one cooperative—united in vision and action.',
    Icon: Handshake,
  },
  {
    title: 'Integrity',
    description: 'We lead with honesty, fairness, and ethical decision-making.',
    Icon: ShieldCheck,
  },
  {
    title: 'Commitment',
    description: 'We stay accountable to members and communities we serve.',
    Icon: HeartHandshake,
  },
  {
    title: 'Excellence',
    description: 'We pursue continuous improvement in every process.',
    Icon: Sparkles,
  },
] as const;

export default function CoreValues() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-col sm:flex-row">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#0B5D3B]">
              CORE VALUES
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#06452C]">Built on trust. Driven by service.</h2>
          </div>
          <div className="h-px w-full sm:w-64 bg-gradient-to-r from-[#D4A017] via-[#0B5D3B] to-transparent" aria-hidden="true" />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.Icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="rounded-2xl bg-white shadow-sm border border-[#E5E7EB] p-7 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#0B5D3B]/10 border border-[#0B5D3B]/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#0B5D3B]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#06452C]">{v.title}</h3>
                </div>
                <p className="mt-4 text-[#6B7280] leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

