"use client";

import Image from 'next/image';
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
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="h-full rounded-2xl bg-white shadow-sm ring-1 ring-transparent transition-colors duration-200"
    >
      <div className="flex h-full items-stretch gap-4 p-5">
        <div className="relative flex shrink-0 items-center justify-center">
          <div className="absolute -inset-1 rounded-full border-2 border-[#D4AF37]" aria-hidden="true" />
          <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gray-50">
            <Image
              src={imageSrc}
              alt={`${name} portrait`}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3 className="text-lg font-bold text-[#004D2D]">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-[#D4AF37]">{position}</p>
          <div className="mt-3 h-px w-12 bg-[#006B3F]" aria-hidden="true" />
        </div>
      </div>
    </motion.article>
  );
}

