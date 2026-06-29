"use client";

import React from 'react';

import { motion } from 'framer-motion';

import OfficerCard from './OfficerCard';


export type OfficerGridItem = {
  imageSrc: string;
  name: string;
  position: string;
};

export default function OfficersGrid({ items }: { items: OfficerGridItem[] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-wide text-[#004D2D]">MEET OUR OFFICERS</h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded bg-[#D4AF37]" aria-hidden="true" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.05, duration: 0.6, ease: 'easeOut' }}
            >
              <OfficerCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

