'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import HeroSlide from './HeroSlide';
import HeroIndicators from './HeroIndicators';
import { heroSlides } from '@/data/heroSlides';

const AUTOPLAY_DELAY = 6000;

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: false, skipSnaps: false },
    [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => heroSlides, []);
  const count = slides.length;

  /* ── Active slide tracking ── */
  useEffect(() => {
    if (!emblaApi) return;
    const onSelectCb = () => setActiveIndex(emblaApi.selectedScrollSnap());
    onSelectCb();
    emblaApi.on('select', onSelectCb);
    return () => { emblaApi.off('select', onSelectCb); };
  }, [emblaApi]);

  /* ── Pause on hover ── */
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay as unknown as { play: () => void; stop: () => void } | undefined;
    if (!autoplay) return;
    const root = emblaApi.containerNode();
    if (!root) return;
    const enter = () => autoplay.stop();
    const leave = () => autoplay.play();
    root.addEventListener('mouseenter', enter);
    root.addEventListener('mouseleave', leave);
    return () => {
      root.removeEventListener('mouseenter', enter);
      root.removeEventListener('mouseleave', leave);
    };
  }, [emblaApi]);

  /* ── Navigation ── */
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  return (
    <section className="relative bg-[#003d22] overflow-hidden">
      {/* ── Embla viewport ── */}
      <div
        ref={emblaRef}
        className="embla w-full overflow-hidden"
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

      {/* ── Bottom control bar (overlaid on the slide) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pb-8 pointer-events-none">
        {/* subtle fade from transparent to dark at very bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between">

            {/* Left: progress-bar indicators */}
            <div className="pointer-events-auto">
              <HeroIndicators
                count={count}
                activeIndex={activeIndex}
                onSelect={scrollTo}
              />
            </div>

            {/* Right: counter + arrows */}
            <div className="flex items-center gap-5 pointer-events-auto">
              {/* Slide counter */}
              <p className="hidden sm:block text-sm font-bold tabular-nums select-none">
                <span className="text-white">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-white/40 mx-1.5">/</span>
                <span className="text-white/40">{String(count).padStart(2, '0')}</span>
              </p>

              {/* Arrow buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous slide"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#003d22] active:scale-95 transition-all duration-250 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next slide"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#003d22] active:scale-95 transition-all duration-250 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
