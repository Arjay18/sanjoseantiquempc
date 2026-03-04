'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Announcement {
  id: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  image: string | null;
  buttonText: string | null;
  buttonLink: string | null;
  theme: string;
  isActive: boolean;
  order: number;
}

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  theme: 'blue' | 'gold';
}

const defaultSlides: Slide[] = [
  {
    image: '/slider/slide1.jpg',
    title: 'Your Financial Future',
    subtitle: 'STARTS HERE',
    description: 'Join thousands of empowered members who have transformed their lives through SJMPC\'s comprehensive financial services.',
    buttonText: 'Become a Member',
    buttonLink: '/online-application',
    theme: 'blue',
  },
  {
    image: '/slider/slide2.jpg',
    title: 'Unlock Your',
    subtitle: 'FINANCIAL POTENTIAL',
    description: 'Discover diverse loan packages designed to fuel your ambitions - from business expansion to home ownership.',
    buttonText: 'Explore Loans',
    buttonLink: '/loan-packages',
    theme: 'gold',
  },
  {
    image: '/slider/slide3.jpg',
    title: 'Grow Your Wealth',
    subtitle: 'WITH CONFIDENCE',
    description: 'Experience competitive savings rates and secure investment options that work hard for you.',
    buttonText: 'Start Saving',
    buttonLink: '/savings-product',
    theme: 'blue',
  },
  {
    image: '/slider/slide4.jpg',
    title: 'Community Powered',
    subtitle: 'BY TRUST',
    description: 'Be part of a thriving cooperative where every member matters. Together, we build stronger communities.',
    buttonText: 'Join Us',
    buttonLink: '/about',
    theme: 'gold',
  },
  {
    image: '/slider/slide5.jpg',
    title: 'Empowering Dreams',
    subtitle: 'TRANSFORMING LIVES',
    description: 'See how SJMPC members have turned their aspirations into extraordinary success stories.',
    buttonText: 'Read Stories',
    buttonLink: '/news',
    theme: 'blue',
  },
  {
    image: '/slider/slide6.jpg',
    title: 'Financial Freedom',
    subtitle: 'IS YOUR RIGHT',
    description: 'Expert guidance, personalized solutions, and unwavering support for your financial breakthrough.',
    buttonText: 'Get Started',
    buttonLink: '/services',
    theme: 'gold',
  },
  {
    image: '/slider/slide7.jpg',
    title: 'Together We Thrive',
    subtitle: 'UNITED WE PROSPER',
    description: 'Experience the power of collective strength. When members unite, extraordinary things happen.',
    buttonText: 'Learn More',
    buttonLink: '/about',
    theme: 'blue',
  },
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
            // Convert announcements to slides format
            const announcementSlides: Slide[] = data
              .filter((a: Announcement) => a.isActive)
              .sort((a: Announcement, b: Announcement) => a.order - b.order)
              .map((a: Announcement) => ({
                image: a.image || '/slider/slide1.jpg',
                title: a.title,
                subtitle: a.subtitle || '',
                description: a.description || '',
                buttonText: a.buttonText || 'Learn More',
                buttonLink: a.buttonLink || '/services',
                theme: a.theme === 'gold' ? 'gold' as const : 'blue' as const,
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

  if (loading) {
    return (
      <div className="relative h-[500px] md:h-[550px] lg:h-[600px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-[500px] md:h-[550px] lg:h-[600px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
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
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              onError={(e) => {
                // Fallback to default image on error
                const target = e.target as HTMLImageElement;
                target.src = '/slider/slide1.jpg';
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${
            slide.theme === 'blue' 
              ? 'from-blue-900/70 via-blue-900/50 to-transparent' 
              : 'from-yellow-900/70 via-yellow-900/50 to-transparent'
          }`} />
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-24 h-full flex items-center">
            <div className={`max-w-3xl transition-all duration-1000 delay-300 ${
              index === currentSlide 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              {/* Badge */}
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full mb-4 ${
                slide.theme === 'blue'
                  ? 'bg-blue-500/20 border border-blue-400/30'
                  : 'bg-yellow-500/20 border border-yellow-400/30'
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                  slide.theme === 'blue' ? 'bg-blue-400' : 'bg-yellow-400'
                } animate-pulse`}></div>
                <span className="text-white text-xs font-semibold tracking-wide">
                  SAN JOSE MULTI PURPOSE COOPERATIVE
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                {slide.title}
                <span className={`block mt-1 bg-gradient-to-r ${
                  slide.theme === 'blue'
                    ? 'from-blue-400 to-blue-200'
                    : 'from-yellow-400 to-yellow-200'
                } bg-clip-text text-transparent`}>
                  {slide.subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-100 mb-6 leading-relaxed max-w-2xl">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={slide.buttonLink}
                  className={`group inline-flex items-center px-6 py-3 rounded-lg font-semibold text-sm md:text-base text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    slide.theme === 'blue'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                      : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                  }`}
                >
                  {slide.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-sm md:text-base text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats - Only show on default slides */}
              {index < 7 && (
                <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
                  <div className="text-center">
                    <div className={`text-xl md:text-2xl font-bold ${
                      slide.theme === 'blue' ? 'text-blue-400' : 'text-yellow-400'
                    }`}>15K+</div>
                    <div className="text-xs text-gray-300 mt-1">Members</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-xl md:text-2xl font-bold ${
                      slide.theme === 'blue' ? 'text-blue-400' : 'text-yellow-400'
                    }`}>₱1.2B+</div>
                    <div className="text-xs text-gray-300 mt-1">Assets</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-xl md:text-2xl font-bold ${
                      slide.theme === 'blue' ? 'text-blue-400' : 'text-yellow-400'
                    }`}>61+</div>
                    <div className="text-xs text-gray-300 mt-1">Years</div>
                  </div>
                </div>
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
            className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative transition-all duration-300 ${
                index === currentSlide ? 'w-12' : 'w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? slide.theme === 'blue'
                    ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                  : 'bg-white/40 hover:bg-white/60'
              }`} />
              {index === currentSlide && (
                <div className={`absolute inset-0 rounded-full animate-pulse ${
                  slide.theme === 'blue'
                    ? 'bg-blue-400/30'
                    : 'bg-yellow-400/30'
                }`} />
              )}
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
