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
      className="group relative bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-start text-center h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 w-full overflow-hidden"
    >
      {/* Top brand-accent bar shown on card hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0B5D3B] via-[#D4A017] to-[#0B5D3B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Avatar Container */}
      <div className="relative mb-5 mt-2">
        {/* Soft background glow on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0B5D3B]/20 to-[#D4A017]/20 blur-md scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
        
        {/* Double-border Ring styling */}
        <div className="relative p-1 rounded-full border-2 border-[#D4A017] bg-white group-hover:border-[#0B5D3B] transition-colors duration-300 shadow-sm">
          <div className="h-[110px] w-[110px] rounded-full overflow-hidden border border-gray-50 bg-gray-50 flex items-center justify-center">
            <Image
              src={image}
              alt={alt ?? `${name} portrait`}
              width={110}
              height={110}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Profile Details Container */}
      <div className="flex-grow flex flex-col justify-between w-full">
        <div>
          <h3 className="text-[#0B5D3B] font-extrabold uppercase tracking-wide text-xs sm:text-sm leading-snug group-hover:text-[#06452C] transition-colors break-words">
            {name}
          </h3>
          
          {/* Animated line indicator */}
          <div className="w-6 h-0.5 bg-gray-100 mx-auto my-3 group-hover:w-10 group-hover:bg-[#D4A017] transition-all duration-300" />
          
          <p className="text-gray-500 group-hover:text-[#D4A017] font-semibold text-xs sm:text-sm leading-snug transition-colors">
            {position}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

