'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { HeroSlide as HeroSlideType } from '@/data/heroSlides';

export type HeroSlideProps = {
  slide: HeroSlideType;
  isActive: boolean;
};

export default function HeroSlide({ slide, isActive }: HeroSlideProps) {
  return (
    <div className="min-h-[85vh] bg-[var(--sjmpc-light-gray)]">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-14">
        {/* LEFT */}
        <div className="w-full lg:w-[45%]">
          <motion.div
            initial={false}
            animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0.001 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
          >
            <motion.p
              initial={false}
              animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.55, delay: 0.02 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:rgba(0,107,63,0.08)] px-4 py-2 text-sm font-semibold text-[var(--sjmpc-dark-green)]"
            >
              {slide.eyebrow}
            </motion.p>

            <motion.h1
              initial={false}
              animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[var(--sjmpc-dark-green)] sm:text-4xl lg:text-5xl"
            >
              {slide.headline}
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 text-base leading-relaxed text-[#2b2b2b] sm:text-lg"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={false}
              animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button variant="primary" asChild>
                <Link href={slide.ctas.primary.href}>{slide.ctas.primary.label}</Link>
              </Button>

              {/* Force dark-green outline look so it stays visible on images */}
              <Button
                variant="outline"
                asChild
                className="bg-transparent text-[var(--sjmpc-green)] hover:bg-[color:rgba(0,107,63,0.06)] hover:text-[var(--sjmpc-green)]"
              >
                <Link href={slide.ctas.secondary.href}>{slide.ctas.secondary.label}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative mt-8 w-full lg:mt-0 lg:w-[55%]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[rgba(0,107,63,0.12)] blur-2xl" />
            <div className="absolute -left-10 bottom-6 h-72 w-72 rounded-full bg-[rgba(212,175,55,0.10)] blur-2xl" />
          </div>

          <motion.div
            initial={false}
            animate={{ y: isActive ? [0, -8, 0] : 0 }}
            transition={{ duration: 2.8, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
className="relative h-[320px] w-full rounded-[24px] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.35)]"
          >
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              className="rounded-[24px] object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
              priority={isActive}
            />
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

