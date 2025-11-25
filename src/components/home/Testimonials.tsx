'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

const testimonials = [
  {
    id: 1,
    content: "SJMPC has been instrumental in helping our community grow. Their loan services and financial guidance have empowered many families to achieve their dreams. The cooperative spirit they embody is truly inspiring.",
    author: "Maria Santos",
    position: "Member, San Jose Community",
    image: "/testimonials/maria.jpg",
    rating: 5,
    location: "San Jose, Antique"
  },
  {
    id: 2,
    content: "As a small business owner, SJMPC provided me with the financial support I needed to expand my operations. Their personalized approach and understanding of local business needs made all the difference.",
    author: "Roberto Garcia",
    position: "Business Owner",
    image: "/testimonials/roberto.jpg",
    rating: 5,
    location: "Miagao, Iloilo"
  },
  {
    id: 3,
    content: "The savings programs at SJMPC have helped me secure my family's future. The staff is always helpful and the cooperative's commitment to member education is outstanding.",
    author: "Elena Cruz",
    position: "Member since 2018",
    image: "/testimonials/elena.jpg",
    rating: 5,
    location: "Oton, Iloilo"
  },
  {
    id: 4,
    content: "SJMPC's insurance products gave me peace of mind. When I needed assistance, they were there for me. Their community-focused approach is what sets them apart.",
    author: "Pedro Reyes",
    position: "Member, Guimaras Branch",
    image: "/testimonials/pedro.jpg",
    rating: 5,
    location: "Guimaras"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                What Our Members Say
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our valued members about their experiences with SJMPC.
              Their stories reflect our commitment to community development and financial empowerment.
            </p>
          </div>
        </FadeIn>

        {/* Main Testimonial Display */}
        <FadeIn direction="up" delay={0.4}>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 transition-all duration-300 hover:shadow-3xl">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 transition-all hover:scale-110" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-blue-600 font-medium mb-1">
                      {testimonials[activeIndex].position}
                    </p>
                    <p className="text-gray-500 text-sm">
                      📍 {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Thumbnail Navigation */}
        <StaggerContainer delay={0.6} staggerChildren={0.1}>
          <div className="flex justify-center space-x-4 mb-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.id}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`relative transition-all duration-300 rounded-xl overflow-hidden hover:scale-110 ${
                    index === activeIndex
                      ? 'ring-4 ring-blue-500 ring-offset-2 scale-110'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Stats Section */}
        <FadeIn direction="up" delay={0.8}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">14000+</div>
              <div className="text-gray-600 font-medium">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">₱50M+</div>
              <div className="text-gray-600 font-medium">Loans Disbursed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2">61</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Branch Locations</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
