'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

type Announcement = {
  id: string;
  image: string;
  buttonLink: string | null;
  isActive: boolean;
  order: number;
};

type Slide = {
  image: string;
  link: string | null;
};

const defaultSlides: Slide[] = [
  { image: '/slider/Slider%2001.png', link: '/online-application' },
  { image: '/slider/Slider%2002.png', link: '/loan-packages' },
  { image: '/slider/Slider%2003.png', link: null },
];

function normalizeLocalImagePath(value: string) {
  if (!value) return value;
  if (value.startsWith('http')) return value;
  if (value.startsWith('/')) return value;
  return `/${value}`;
}

export default function ModernHomeSlider() {
  const slidesStateInit = useMemo(() => defaultSlides, []);
  const [slides, setSlides] = useState<Slide[]>(slidesStateInit);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch announcements to override slides.
  useEffect(() => {
    let cancelled = false;

    async function fetchAnnouncements() {
      try {
        const res = await fetch('/api/announcements');
        if (!res.ok) return;

        const data: Announcement[] = await res.json();
        const active = (data || [])
          .filter((a) => a.isActive)
          .sort((a, b) => a.order - b.order);

        if (active.length === 0) return;

        if (cancelled) return;

        setSlides((prev) => {
          const next = [...prev];

          for (let i = 0; i < next.length; i++) {
            const a = active[i];
            if (!a) break;

            const normalized = a.image ? normalizeLocalImagePath(a.image) : null;

            // Keep current image if we don't recognize it as a local slider image.
            const allowSwapImage =
              normalized &&
              (normalized.startsWith('/slider/') ||
                normalized.startsWith('/public/slider/'));

            next[i] = {
              ...next[i],
              image: allowSwapImage ? normalized!.replace('/public/', '') : next[i].image,
              link: a.buttonLink || next[i].link,
            };
          }

          return next;
        });
      } catch (e) {
        // noop
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAnnouncements();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!isAutoPlaying) return;
    if (slides.length <= 1) return;

    const t = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(t);
  }, [isAutoPlaying, slides.length, loading]);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const goTo = (idx: number) => {
    setCurrentSlide(idx);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => setIsAutoPlaying((v) => !v);

  if (loading) {
    return (
      <section className="w-full bg-white">
        <div className="w-full">
          <div className="h-[320px] sm:h-[420px] lg:h-[560px] bg-gradient-to-br from-[#006B3F]/10 to-[#D4AF37]/10 animate-pulse" />
        </div>
      </section>
    );
  }

  const active = slides[currentSlide];

  return (
    <section className="w-full bg-white">
      <div className="w-full">
        <div
          className="relative w-full overflow-hidden bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background sheen */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,107,63,0.18),transparent_55%)]" />

          {/* Full-width hero height */}
          <div className="relative h-[420px] sm:h-[560px] lg:h-[750px]">
            {slides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={idx}
                  className={
                    isActive
                      ? 'absolute inset-0 opacity-100 z-10 transition-opacity duration-500'
                      : 'absolute inset-0 opacity-0 z-0 transition-opacity duration-500'
                  }
                >
                  {slide.link ? (
                    <Link
                      href={slide.link}
                      className="block absolute inset-0"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={slide.image}
                          alt={`Slide ${idx + 1}`}
                          fill
                          priority={idx === 0}
                          sizes="100vw"
                          quality={100}
                          className="object-fill object-center"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={slide.image}
                        alt={`Slide ${idx + 1}`}
                        fill
                        priority={idx === 0}
                        sizes="100vw"
                        quality={100}
                        className="object-fill object-center"
                      />
                    </div>
                  )}

                </div>
              );
            })}

            {/* Navigation arrows */}
            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className={
                    'absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-opacity ' +
                    (isHovered ? 'opacity-100' : 'opacity-70')
                  }
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className={
                    'absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-opacity ' +
                    (isHovered ? 'opacity-100' : 'opacity-70')
                  }
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Dots + pause play */}
            {slides.length > 1 && (
              <div className="absolute left-0 right-0 bottom-3 px-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goTo(idx)}
                      className={
                        'h-2 rounded-full transition-all bg-white/60 hover:bg-white ' +
                        (idx === currentSlide ? 'w-9 bg-white' : 'w-2')
                      }
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={toggleAutoPlay}
                  className="w-9 h-9 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-transform"
                  aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}

            {/* Counter */}
            {slides.length > 1 && (
              <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-black/25 backdrop-blur border border-white/10 text-white text-xs font-semibold">
                {currentSlide + 1} / {slides.length}
              </div>
            )}
          </div>

          {/* Subtle bottom border */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#006B3F]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

