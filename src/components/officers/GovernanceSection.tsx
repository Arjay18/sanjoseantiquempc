"use client";

import React from 'react';
import { Scale, Eye, Leaf } from 'lucide-react';

import { motion } from 'framer-motion';

const ibelong = ['I', 'B', 'E', 'L', 'O', 'N', 'G'];


export default function GovernanceSection() {
  return (
<section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-b from-[#004D2D] to-[#006B3F] p-8 text-white shadow-sm"
          >
            <h2 className="text-2xl font-extrabold">Our Commitment</h2>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Our officers are committed to good governance, transparency, and continuous improvement to serve our members better.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[{ icon: Scale, label: 'Good Governance' }, { icon: Eye, label: 'Transparency & Accountability' }, { icon: Leaf, label: 'Sustainable Growth' }].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex flex-col items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="text-sm font-semibold">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E5E7EB]"
          >
            <h2 className="text-2xl font-extrabold text-[#004D2D]">Governed by Our Core Values</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our officers lead with the I-BELONG values that guide every decision we make.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-start gap-4" style={{ lineHeight: '1' }}>
{ibelong.map((letter) => (
                <div
                  key={letter}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#004D2D] ring-1 ring-[#006B3F]/30"
                  aria-label={`Value ${letter}`}
                >
                  <span className="text-lg font-extrabold text-white">{letter}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

