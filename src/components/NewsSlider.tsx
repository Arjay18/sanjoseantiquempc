'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

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
  title?: string;
  description?: string;
}

const defaultSlides: Slide[] = [
  { image: '/slider/slide1.jpg', link: '/online-application', title: 'Apply for a Loan', description: 'Get the financial support you need' },
  { image: '/slider/slide2.jpg', link: '/loan-packages', title: 'Loan Packages', description: 'Choose the best loan for you' },
  { image: '/slider/slide5.jpg', link: '/news', title: 'Latest News', description: 'Stay updated with our news' },
];

export default function NewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slides, setSlides] = useState<Slide[]>(defaultSlides);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch('/api/announcements');
        if (res.ok) {
          const data: Announcement[] = await res.json();
          if (data?.length) {
            const announcementSlides: Slide[] = data
              .filter((a: Announcement) => a.isActive)
              .sort((a: Announcement, b: Announcement) => a.order - b.order)
              .map((a: Announcement) => ({
                image: a.image || '/slider/slide1.jpg',
                link: a.buttonLink || null,
                title: (a as any).title || undefined,
                description: (a as any).description || undefined,
              }));

            if (announcementSlides.length > 0) setSlides(announcementSlides);
          }
        }
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
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleSlideClick = () => {
    const currentLink = slides[currentSlide]?.link;
    if (currentLink) window.location.href = currentLink;
  };

  if (loading) {
    return (
      <div className="w-full bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-[260px] md:h-[320px] bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full bg-white overflow-hidden">
          <div className="relative w-full h-[280px] md:h-[340px] lg:h-[420px] rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900" />

            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {slide.image.startsWith('http') ? (
                    <img
                      src={slide.image}
                      alt={slide.title || `Slide ${index + 1}`}
                      className="w-full h-full object-contain cursor-pointer opacity-90"
                      onClick={handleSlideClick}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/slider/slide1.jpg';
                      }}
                    />
                  ) : (
                    <Image
                      src={slide.image}
                      alt={slide.title || `Slide ${index + 1}`}
                      fill
                      className="object-contain cursor-pointer opacity-90"
                      priority={index === 0}
                      onClick={handleSlideClick}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/slider/slide1.jpg';
                      }}
                    />
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="px-4 sm:px-6 w-full">
                    <div className="max-w-3xl">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold">
                        <CheckCircle className="w-3.5 h-3.5 mr-2" />
                        Our Latest Announcement
                      </div>

                      {slide.title && (
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white drop-shadow">
                          {slide.title}
                        </h2>
                      )}

                      {slide.description && (
                        <p className="mt-3 text-base md:text-lg text-white/90 max-w-2xl">
                          {slide.description}
                        </p>
                      )}

                      {slide.link && (
                        <Link
                          href={slide.link}
                          className="mt-6 inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/30 hover:border-white transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
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
                className={`absolute bottom-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 transition-all duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
            )}

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-white/90 text-xs font-medium">
              {currentSlide + 1} / {slides.length}
            </div>

            {/* Hover detection */}
            <div
              className="absolute inset-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

