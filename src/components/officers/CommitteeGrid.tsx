"use client";

import React from 'react';

import { motion } from 'framer-motion';

import CommitteeCard from './CommitteeCard';
import { committees } from '@/data/committees';

export default function CommitteeGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-wide text-[#004D2D]">COMMITTEE OFFICERS</h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded bg-[#D4AF37]" aria-hidden="true" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {committees.map((c, idx) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.03, ease: 'easeOut' }}
            >
              <CommitteeCard committee={c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

