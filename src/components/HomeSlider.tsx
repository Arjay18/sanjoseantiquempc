'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

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
  { image: '/slider/slide3.jpg', link: '/savings-product', title: 'Savings Products', description: 'Grow your savings with us' },
  { image: '/slider/slide4.jpg', link: '/about', title: 'About Us', description: 'Learn more about SJMPC' },
  { image: '/slider/slide5.jpg', link: '/news', title: 'Latest News', description: 'Stay updated with our news' },
  { image: '/slider/slide6.jpg', link: '/services', title: 'Our Services', description: 'Discover what we offer' },
  { image: '/slider/slide7.jpg', link: '/about', title: 'Join Our Cooperative', description: 'Become a member today' },
];

export default function HomeSlider() {
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
          
          if (data && data.length > 0) {
            const announcementSlides: Slide[] = data
              .filter((a: Announcement) => a.isActive)
              .sort((a: Announcement, b: Announcement) => a.order - b.order)
              .map((a: Announcement) => ({
                image: a.image || '/slider/slide1.jpg',
                link: a.buttonLink || null,
                title: (a as any).title || undefined,
                description: (a as any).description || undefined,
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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleSlideClick = () => {
    const currentLink = slides[currentSlide]?.link;
    if (currentLink) {
      window.location.href = currentLink;
    }
  };

  if (loading) {
    return (
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
                className="w-full h-full object-contain cursor-pointer bg-blue-900/50"
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
                className="object-cover cursor-pointer"
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
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className={`text-center text-white max-w-4xl px-4 transition-all duration-500 transform ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {slide.title && (
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight">
                  {slide.title}
                </h2>
              )}
              {slide.description && (
                <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md opacity-90">
                  {slide.description}
                </p>
              )}
              {slide.link && (
                <Link
                  href={slide.link}
                  className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Navigation with Progress */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-10 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Play/Pause Button */}
      {slides.length > 1 && (
        <button
          onClick={toggleAutoPlay}
          className={`absolute bottom-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      )}

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-white text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
