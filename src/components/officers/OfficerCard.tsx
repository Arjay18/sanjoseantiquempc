"use client";

import { motion } from 'framer-motion';


export type OfficerCardProps = {
  imageSrc: string;
  name: string;
  position: string;
  roleDescription?: string;
};

export default function OfficerCard({
  imageSrc,
  name,
  position,
}: OfficerCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group h-full rounded-[1.25rem] border border-[#E8ECEA] bg-white p-5 text-left shadow-[0_10px_30px_-18px_rgba(6,69,44,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B5D3B]/40 hover:shadow-[0_16px_40px_-18px_rgba(6,69,44,0.45)]"
    >
      <div className="flex h-full items-stretch">
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#004D2D] transition-colors group-hover:text-[#0B5D3B]">{name}</h3>
          <div className="my-3 h-0.5 w-10 bg-[#E5E7EB] transition-all duration-300 group-hover:w-16 group-hover:bg-[#D4A017]" />
          <p className="text-sm font-semibold leading-snug text-gray-600 transition-colors group-hover:text-[#D4A017]">{position}</p>
        </div>
      </div>
    </motion.article>
  );
}

