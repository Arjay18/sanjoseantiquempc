'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, CheckCircle, Shield, Clock } from 'lucide-react';

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

const leftFeatures = [
  { icon: Shield, text: 'Secure & Reliable' },
  { icon: CheckCircle, text: 'Trusted Service' },
  { icon: Clock, text: '24/7 Support' },
];

const rightFeatures = [
  { icon: CheckCircle, text: 'Fast Approval' },
  { icon: Shield, text: 'Low Interest Rates' },
  { icon: Clock, text: 'Flexible Terms' },
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
      <div className="w-full bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl overflow-hidden">
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
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Main Slider Container */}
          <div 
            className="relative h-[350px] md:h-[450px] lg:h-[550px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Side Design */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-green-50 to-white z-20 flex flex-col justify-center items-center gap-6 border-r border-gray-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
            </div>

            {/* Right Side Design */}
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-green-50 to-white z-20 flex flex-col justify-center items-center gap-6 border-l border-gray-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="absolute left-16 right-16 md:left-24 md:right-24 lg:left-32 lg:right-32 top-0 bottom-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-xl">
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
                        className="w-full h-full object-contain cursor-pointer bg-green-900/50"
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
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight">
                          {slide.title}
                        </h2>
                      )}
                      {slide.description && (
                        <p className="text-md md:text-lg lg:text-xl mb-6 drop-shadow-md opacity-90">
                          {slide.description}
                        </p>
                      )}
                      {slide.link && (
                        <Link
                          href={slide.link}
                          className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-900 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
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
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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
                    {slides.map((slide, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="relative group"
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <div className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'w-8 bg-white'
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
                  className={`absolute bottom-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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
    </div>
  );
}
