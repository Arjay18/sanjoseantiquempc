"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';

const coreProducts = [
  {
    title: 'SAVING DEPOSIT',
    description: 'Flexible savings for everyday financial goals.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Time Deposit.png',
  },
  {
    title: 'TIME DEPOSIT',
    description: 'Fixed term savings designed for steadier growth.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Ultima Savings.png',
  },
  {
    title: 'ULTIMA SAVINGS',
    description: 'Long-term savings plan for long-range financial stability.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Alkansya Savings.png',
  },
  {
    title: 'ALKANSYA SAVING',
    description: 'A 2-year savings plan to help you grow steadily.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Retirement Savings.png',
  },
];

const specialProducts = [
  {
    title: 'RETIREMENT SAVINGS',
    description: 'A retirement plan to prepare for your next chapter.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Baptism Savings.png',
  },
  {
    title: 'BAPTISM SAVINGS',
    description: 'Savings set aside for baptism celebrations and milestones.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Debut Savings.png',
  },
  {
    title: 'DEBUT SAVINGS',
    description: 'Savings designed for debut events and special occasions.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Anniversary Savings.png',
  },
  {
    title: 'ANNIVERSARY SAVINGS',
    description: 'Dedicated savings for anniversaries and important family dates.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Wedding Savings.png',
  },
  {
    title: 'WEDDING SAVINGS',
    description: 'Savings to prepare for wedding celebrations.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Fiesta Savings.png',
  },
  {
    title: 'FIESTA SAVINGS',
    description: 'Savings for fiesta celebrations and community events.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Travel Savings.png',
  },
  {
    title: 'TRAVEL AND LEISURE SAVINGS',
    description: 'Save for travel plans and leisure goals.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Emergency Savings.png',
  },
  {
    title: 'EMERGENCY SAVINGS',
    description: 'Set aside funds for unexpected needs and emergencies.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Calamity Savings.png',
  },
  {
    title: 'CALAMITY SAVINGS',
    description: 'Savings prepared for natural calamities and recovery.',
    href: '/savings-products',
    img: '/Services Showcase/SAVINGS/Calamity Savings.png',
  },
];

export default function SavingsProductsSection() {
  const [activeTab, setActiveTab] = useState<'core' | 'special'>('core');
  
  // Embla Carousel Setup for Special Savings
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: false,
    containScroll: 'trimSnaps',
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setPrevBtnEnabled(api.canScrollPrev());
    setNextBtnEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Re-initialize Embla when activeTab changes to 'special'
  useEffect(() => {
    if (activeTab === 'special' && emblaApi) {
      setTimeout(() => {
        emblaApi.reInit();
      }, 50);
    }
  }, [activeTab, emblaApi]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <SectionContainer>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[#006B3F] font-bold tracking-widest uppercase text-sm">Savings Products</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-[#004D2D] leading-tight">
              Our Savings Products
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
              Choose a savings option that supports your goals—today and for the future.
            </p>
          </div>

          {/* Navigation buttons for Carousel - only show when special tab is active */}
          {activeTab === 'special' && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                aria-label="Previous slides"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm cursor-pointer ${
                  prevBtnEnabled
                    ? 'border-[#006B3F]/20 text-[#006B3F] bg-white hover:bg-[#006B3F] hover:text-white hover:border-transparent'
                    : 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                aria-label="Next slides"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm cursor-pointer ${
                  nextBtnEnabled
                    ? 'border-[#006B3F]/20 text-[#006B3F] bg-white hover:bg-[#006B3F] hover:text-white hover:border-transparent'
                    : 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Sleek Tab Switcher */}
        <div className="mt-8 flex justify-center md:justify-start">
          <div className="inline-flex rounded-full bg-gray-100 p-1.5 border border-gray-200/50 shadow-sm relative">
            <button
              onClick={() => setActiveTab('core')}
              className={`relative rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === 'core'
                  ? 'bg-[#006B3F] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Core Savings
            </button>
            <button
              onClick={() => setActiveTab('special')}
              className={`relative rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === 'special'
                  ? 'bg-[#006B3F] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="hidden sm:inline">Celebration & Milestone Savings</span>
              <span className="sm:hidden">Milestone Savings</span>
            </button>
          </div>
        </div>

        {/* Tab Content with Framer Motion AnimatePresence */}
        <div className="mt-10 min-h-[460px]">
          <AnimatePresence mode="wait">
            {activeTab === 'core' ? (
              <motion.div
                key="core"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {coreProducts.map((p) => (
                  <div
                    key={p.title}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#006B3F]/20 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-extrabold text-[#004D2D] group-hover:text-[#006B3F] transition-colors duration-200">{p.title}</h3>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-grow">{p.description}</p>
                      <div className="mt-6 pt-4 border-t border-gray-50 mt-auto">
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-2 text-[#006B3F] font-bold hover:text-[#004D2D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="special"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full relative"
              >
                <div ref={emblaRef} className="overflow-hidden w-full cursor-grab active:cursor-grabbing">
                  <div className="flex -ml-6">
                    {specialProducts.map((p) => (
                      <div
                        key={p.title}
                        className="pl-6 min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] pb-4"
                      >
                        <div
                          className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#006B3F]/20 transition-all duration-300 flex flex-col h-[380px]"
                        >
                          <div className="relative h-40 overflow-hidden">
                            <Image
                              src={p.img}
                              alt={p.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                          </div>
                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-base font-extrabold text-[#004D2D] group-hover:text-[#006B3F] transition-colors duration-200 leading-snug">{p.title}</h3>
                            <p className="mt-2 text-xs text-gray-600 leading-relaxed flex-grow">{p.description}</p>
                            <div className="mt-4 pt-3 border-t border-gray-50 mt-auto">
                              <Link
                                href={p.href}
                                className="inline-flex items-center gap-2 text-[#006B3F] font-bold hover:text-[#004D2D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg text-sm"
                              >
                                Learn More
                                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Action Link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/savings-products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[#006B3F] text-[#006B3F] hover:bg-[#006B3F] hover:text-white font-bold transition-all shadow-sm active:scale-95 hover:shadow-md cursor-pointer"
          >
            Explore All Savings Options
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}


