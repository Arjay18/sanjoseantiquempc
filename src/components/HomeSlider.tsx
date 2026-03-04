'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Announcement {
  id: string;
  image: string;
  buttonLink: string | null;
  isActive: boolean;
  order: number;
}

interface Slide {
  image: string;
  link: string | null;
}

const defaultSlides: Slide[] = [
  { image: '/slider/slide1.jpg', link: '/online-application' },
  { image: '/slider/slide2.jpg', link: '/loan-packages' },
  { image: '/slider/slide3.jpg', link: '/savings-product' },
  { image: '/slider/slide4.jpg', link: '/about' },
  { image: '/slider/slide5.jpg', link: '/news' },
  { image: '/slider/slide6.jpg', link: '/services' },
  { image: '/slider/slide7.jpg', link: '/about' },
];

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slides, setSlides] = useState<Slide[]>(defaultSlides);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch('/api/announcements');
        if (res.ok) {
          const data: Announcement[] = await res.json();
          
          if (data && data.length > 0) {
            // Filter active announcements and convert to slides
            const announcementSlides: Slide[] = data
              .filter((a: Announcement) => a.isActive)
              .sort((a: Announcement, b: Announcement) => a.order - b.order)
              .map((a: Announcement) => ({
                image: a.image || '/slider/slide1.jpg',
                link: a.buttonLink || null,
              }));
            
            if (announcementSlides.length > 0) {
              setSlides(announcementSlides);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
      setLoading(false);
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

  const handleSlideClick = () => {
    const currentLink = slides[currentSlide]?.link;
    if (currentLink) {
      window.location.href = currentLink;
    }
  };

  if (loading) {
    return (
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div className={`absolute inset-0 ${index === currentSlide ? 'animate-ken-burns' : ''}`}>
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover cursor-pointer"
              priority={index === 0}
              onClick={handleSlideClick}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/slider/slide1.jpg';
              }}
            />
          </div>

          {/* Dark Overlay for better image visibility */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide ? 'w-8' : 'w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`} />
            </button>
          ))}
        </div>
      )}

      {/* CSS for Ken Burns Effect */}
      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 10s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
