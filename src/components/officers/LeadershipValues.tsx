"use client";

import React from 'react';
import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Users,
    title: 'Member-Focused',
    description: 'Putting the needs of our members first.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Upholding honesty, transparency, and trust.',
  },
  {
    icon: Award,
    title: 'Commitment',
    description: 'Dedicated to the growth and welfare of our members.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'Continuously improving for a better future.',
  },
];

export default function LeadershipValues() {
  return (
    <section className="pb-10 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.55, ease: 'easeOut' }}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:ring-[#E5E7EB]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#006B3F] text-white shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#004D2D]">{v.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


