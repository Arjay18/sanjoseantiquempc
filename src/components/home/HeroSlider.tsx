'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSlide from './HeroSlide';
import HeroIndicators from './HeroIndicators';
import { heroSlides } from '@/data/heroSlides';

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      skipSnaps: false,
    },
    [
      Autoplay({ delay: 6000, stopOnInteraction: false }),
    ]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const count = heroSlides.length;

  const onSelect = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelectCb = () => {
      const idx = emblaApi.selectedScrollSnap();
      setActiveIndex(idx);
    };

    onSelectCb();
    emblaApi.on('select', onSelectCb);

    return () => {
      emblaApi.off('select', onSelectCb);
    };
  }, [emblaApi]);

  // Pause autoplay on hover (embla autoplay plugin exposes stop/start)
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay as unknown as { play: () => void; stop: () => void } | undefined;
    if (!autoplay) return;

    const root = emblaApi.containerNode();
    if (!root) return;

    const handleEnter = () => autoplay.stop();
    const handleLeave = () => autoplay.play();

    root.addEventListener('mouseenter', handleEnter);
    root.addEventListener('mouseleave', handleLeave);

    return () => {
      root.removeEventListener('mouseenter', handleEnter);
      root.removeEventListener('mouseleave', handleLeave);
    };
  }, [emblaApi]);

  const slides = useMemo(() => heroSlides, []);

  return (
    <section className="relative bg-[var(--sjmpc-light-gray)]">
      <div className="w-full overflow-hidden">
        <div
          ref={emblaRef}
          className="embla relative"
          aria-label="SJMPC hero slider"
        >
          <div className="embla__container flex">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className="embla__slide min-w-full"
                aria-hidden={idx !== activeIndex}
              >
                <HeroSlide slide={slide} isActive={idx === activeIndex} />
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility: indicators below buttons are handled inside slide layout. */}
        {/* This motion wrapper provides smooth fade between slides */}
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="sr-only"
          />
        </AnimatePresence>

        {/* Controls */}
        <HeroIndicators
          count={count}
          activeIndex={activeIndex}
          onSelect={onSelect}
        />

        {/* Arrows */}
        {slides.length > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 z-50">
            <button
              type="button"
              onClick={() => onSelect((activeIndex - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-[#006B3F]/80 text-white shadow-lg border border-white/20 hover:bg-[#004D2D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => onSelect((activeIndex + 1) % slides.length)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-[#006B3F]/80 text-white shadow-lg border border-white/20 hover:bg-[#004D2D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

