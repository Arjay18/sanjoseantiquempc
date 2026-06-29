"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Eye, ShieldCheck, Leaf, Building2 } from 'lucide-react';

export default function CommitmentSection() {
  const items = [
    { icon: Scale, label: 'Good Governance' },
    { icon: Eye, label: 'Transparency' },
    { icon: ShieldCheck, label: 'Accountability' },
    { icon: Leaf, label: 'Sustainable Growth' },
  ];

  return (
    <section className="py-18 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(6,69,44,0.98), rgba(11,93,59,0.92) 45%, rgba(6,69,44,0.98))',
        }}
      />
      <div aria-hidden="true" className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#D4A017]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#EAF5EE]">COOPERATIVE COMMITMENT</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              Together, We Serve Antiqueños Better
            </h2>
            <p className="mt-5 text-[#EAF5EE]/90 leading-relaxed">
              Our leadership is guided by principles that keep operations transparent, decisions accountable, and growth sustainable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-2 text-sm font-bold text-[#EAF5EE]">
                <Building2 className="h-4 w-4 mr-2" aria-hidden="true" />
                Member-first operations
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5"
                >
                  <div className="h-12 w-12 rounded-full bg-[#D4A017]/15 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#D4A017]" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-white font-bold">{it.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

