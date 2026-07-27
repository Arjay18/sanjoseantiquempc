"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type StaffMemberProps = {
  image: string;
  name: string;
  position: string;
  /** Accessible alt override (defaults to `${name} portrait`) */
  alt?: string;
};

export default function StaffMember({ image, name, position, alt }: StaffMemberProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex h-full min-h-[320px] w-full flex-col items-center justify-start overflow-hidden rounded-[1.5rem] border border-[#E8ECEA] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      {/* Top brand-accent bar shown on card hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0B5D3B] via-[#D4A017] to-[#0B5D3B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Avatar Container */}
      <div className="relative mb-5 mt-2">
        {/* Soft background glow on hover */}
        <div className="absolute inset-0 scale-95 rounded-full bg-gradient-to-tr from-[#0B5D3B]/20 to-[#D4A017]/20 opacity-0 blur-md transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />

        {/* Double-border Ring styling */}
        <div className="relative rounded-full border-2 border-[#D4A017] bg-white p-1 shadow-sm transition-colors duration-300 group-hover:border-[#0B5D3B]">
          <div className="flex h-[132px] w-[132px] items-center justify-center overflow-hidden rounded-full border border-gray-50 bg-gray-50 sm:h-[140px] sm:w-[140px]">
            <Image
              src={image}
              alt={alt ?? `${name} portrait`}
              width={132}
              height={132}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Profile Details Container */}
      <div className="flex-grow flex flex-col justify-between w-full">
        <div>
          <h3 className="break-words text-xs font-extrabold uppercase leading-snug tracking-wide text-[#0B5D3B] transition-colors group-hover:text-[#06452C] sm:text-sm">
            {name}
          </h3>

          {/* Animated line indicator */}
          <div className="mx-auto my-3 h-0.5 w-6 bg-gray-100 transition-all duration-300 group-hover:w-10 group-hover:bg-[#D4A017]" />

          <p className="text-xs font-semibold leading-snug text-gray-500 transition-colors group-hover:text-[#D4A017] sm:text-sm">
            {position}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

