'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface Announcement {
  id: string;
  image: string;
  buttonLink: string | null;
  isActive: boolean;
  order: number;
  title?: string;
  description?: string;
}

interface Slide {
  image: string;
  link: string | null;
}

const defaultSlides: Slide[] = [
  { image: '/slider/Slider1.jpg', link: '/online-application' },
  { image: '/slider/Slider2.jpg', link: '/loan-packages' },
];


export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slides, setSlides] = useState<Slide[]>(defaultSlides);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch announcements and only override slide links/images by index.
  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch('/api/announcements');
        if (!res.ok) return;

        const data: Announcement[] = await res.json();
        const active = (data || [])
          .filter((a: Announcement) => a.isActive)
          .sort((a: Announcement, b: Announcement) => a.order - b.order);

        if (active.length === 0) return;

        // Only override links (and optionally swap images only if they are clearly local `/slider/...` images).
        setSlides((prev) => {
          const next = [...prev];

          const normalizeLocalImagePath = (value: string) => {
            if (!value) return value;
            if (value.startsWith('http')) return value;
            return value.startsWith('/') ? value : `/${value}`;
          };

          for (let i = 0; i < next.length; i++) {
            const a = active[i];
            if (!a) break;

            const normalized = a.image ? normalizeLocalImagePath(a.image) : null;
            const allowSwapImage =
              normalized &&
              (normalized.startsWith('/slider/') || normalized.startsWith('/public/slider/'));

            next[i] = {
              ...next[i],
              image: allowSwapImage
                ? normalized!.replace('/public/', '')
                : next[i].image,
              link: a.buttonLink || next[i].link,
            };
          }
          return next;
        });
      } catch (error) {
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || loading) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length, loading]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((v) => !v);
  };

  const handleSlideClick = () => {
    const currentLink = slides[currentSlide]?.link;
    if (currentLink) window.location.href = currentLink;
  };

  if (loading) {
    return (
      <div className="w-full bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <div className="relative w-full bg-white overflow-hidden rounded-2xl">
          <div
            className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full left-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slides (images only; no caption, no gradient overlay) */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0">
                  {slide.image.startsWith('http') ? (
                      <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain cursor-pointer bg-white"
                      sizes="100vw"

                      onClick={handleSlideClick}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/slider/Slider1.jpg';
                      }}
                    />
                  ) : (
                    <Image
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-contain cursor-pointer"
                      priority={index === 0}
                      onClick={handleSlideClick}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/slider/Slider1.jpg';
                      }}
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Dots Navigation */}
            {slides.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="relative group"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'w-8 bg-white'
                            : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Play/Pause Button */}
            {slides.length > 1 && (
              <button
                onClick={toggleAutoPlay}
                className={`absolute bottom-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 transition-all duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
            )}

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-white text-xs font-medium">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

