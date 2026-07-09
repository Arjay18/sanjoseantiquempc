'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroSlide as HeroSlideType } from '@/data/heroSlides';

export type HeroSlideProps = {
  slide: HeroSlideType;
  isActive: boolean;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function HeroSlide({ slide, isActive }: HeroSlideProps) {
  return (
    <div className="relative min-h-[700px] lg:min-h-[88vh] w-full">
      {/* ── Background Image ── */}
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={isActive}
      />

      {/* ── Cinematic gradient layers ── */}
      {/* Left-to-right dark green wash for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003d22]/92 via-[#004D2D]/72 to-[#006B3F]/20" />
      {/* Top and bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      {/* Subtle noise texture feel via inner glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(0,107,63,0.18),transparent_65%)]" />

      {/* ── Slide Content ── */}
      <div className="relative z-10 flex items-center h-full min-h-[700px] lg:min-h-[88vh]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 w-full">
          <motion.div
            key={slide.id}
            variants={containerVariants}
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            className="max-w-2xl xl:max-w-3xl"
          >
            {/* Eyebrow label */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-0.5 w-10 bg-[#D4AF37] rounded-full" />
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs sm:text-sm">
                {slide.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-black text-white leading-[1.1] tracking-tight"
            >
              {slide.headline}
            </motion.h1>

            {/* Gold accent divider */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex items-center gap-2"
            >
              <div className="h-[2px] w-12 bg-[#D4AF37] rounded-full" />
              <div className="h-[2px] w-4 bg-white/20 rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col sm:flex-row items-start gap-4"
            >
              {/* Primary — gold solid */}
              <Link
                href={slide.ctas.primary.href}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#D4AF37] text-[#003d22] font-extrabold text-sm sm:text-base hover:bg-[#c9a130] active:scale-95 shadow-[0_8px_30px_rgba(212,175,55,0.35)] transition-all duration-200"
              >
                {slide.ctas.primary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Secondary — glass */}
              <Link
                href={slide.ctas.secondary.href}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white font-bold text-sm sm:text-base backdrop-blur-sm hover:bg-white/20 hover:border-white/40 active:scale-95 transition-all duration-200"
              >
                {slide.ctas.secondary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
