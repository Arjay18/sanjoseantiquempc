'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: '/slider/slide1.jpg',
    title: 'YOUR FINANCIAL FUTURE STARTS HERE!',
    description: 'Join thousands of empowered members who have transformed their lives through SJMPC\'s comprehensive financial services. Your dreams are within reach!',
    buttonText: 'Become a Member Today',
    buttonLink: '/online-application',
  },
  {
    image: '/slider/slide2.jpg',
    title: 'UNLOCK YOUR FINANCIAL POTENTIAL',
    description: 'Discover our diverse loan packages designed to fuel your ambitions - from business expansion to home ownership. Your success story begins now!',
    buttonText: 'Explore Loan Packages',
    buttonLink: '/loan-packages',
  },
  {
    image: '/slider/slide3.jpg',
    title: 'GROW YOUR WEALTH WITH CONFIDENCE',
    description: 'Experience competitive savings rates and secure investment options that work hard for you. Watch your money multiply while you sleep!',
    buttonText: 'Start Saving Now',
    buttonLink: '/savings-product',
  },
  {
    image: '/slider/slide4.jpg',
    title: 'COMMUNITY POWERED BY TRUST',
    description: 'Be part of a thriving cooperative where every member matters. Together, we build stronger communities and brighter futures for all!',
    buttonText: 'Join Our Community',
    buttonLink: '/about',
  },
  {
    image: '/slider/slide5.jpg',
    title: 'EMPOWERING DREAMS, TRANSFORMING LIVES',
    description: 'From humble beginnings to remarkable achievements - see how SJMPC members have turned their aspirations into extraordinary success stories!',
    buttonText: 'Read Success Stories',
    buttonLink: '/news',
  },
  {
    image: '/slider/slide6.jpg',
    title: 'FINANCIAL FREEDOM IS YOUR RIGHT',
    description: 'Break free from financial limitations with our expert guidance, personalized solutions, and unwavering support. Your breakthrough awaits!',
    buttonText: 'Get Started Today',
    buttonLink: '/services',
  },
  {
    image: '/slider/slide7.jpg',
    title: 'TOGETHER WE THRIVE, UNITED WE PROSPER',
    description: 'Experience the power of collective strength. When members unite for a common purpose, extraordinary things happen. Be part of something bigger!',
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
];

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-200 md:text-xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}



      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            suppressHydrationWarning={true}
          />
        ))}
      </div>
    </div>
  );
}