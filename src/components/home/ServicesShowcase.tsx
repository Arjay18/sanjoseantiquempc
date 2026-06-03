'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const services = [
  {
    id: 1,
    title: "Loan Services",
    subtitle: "Flexible Financing Solutions",
    description: "Comprehensive loan solutions including business loans, housing loans, and agricultural financing to support your financial goals and dreams.",
    link: "/loan-packages",
    color: "blue",
    image: "/Services Showcase/Loan Services.jpg",
    features: ["Business Loans", "Housing Loans", "Agricultural Loans", "Quick Approval"],
    popular: true,
  },
  {
    id: 2,
    title: "Savings Products",
    subtitle: "Secure Your Future",
    description: "Build wealth and achieve financial stability with our diverse savings products designed to grow your money safely and steadily.",
    link: "/savings-product",
    color: "yellow",
    image: "/Services Showcase/Saviings Services.jpg",
    features: ["Regular Savings", "Time Deposits", "Special Savings", "High Interest Rates"],
    popular: false,
  },

  {
    id: 5,
    title: "Member Services",
    subtitle: "Dedicated Support",
    description: "Comprehensive support services for our valued members including account management, financial counseling, and community programs.",
    image: "/Services Showcase/Member Services.jpg",
    link: "/contact",
    color: "blue",

    features: ["24/7 Support", "Financial Counseling", "Community Programs", "Member Benefits"],
    popular: false,
    
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      iconBg: 'bg-blue-100',
      button: 'bg-blue-600 hover:bg-blue-700',
      popular: 'bg-blue-100 text-blue-800'
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
      button: 'bg-yellow-500 hover:bg-yellow-600',
      popular: 'bg-yellow-100 text-yellow-800'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      iconBg: 'bg-green-100',
      button: 'bg-green-600 hover:bg-green-700',
      popular: 'bg-green-100 text-green-800'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      iconBg: 'bg-purple-100',
      button: 'bg-purple-600 hover:bg-purple-700',
      popular: 'bg-purple-100 text-purple-800'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      popular: 'bg-indigo-100 text-indigo-800'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      iconBg: 'bg-orange-100',
      button: 'bg-orange-600 hover:bg-orange-700',
      popular: 'bg-orange-100 text-orange-800'
    },
    teal: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      icon: 'text-teal-600',
      iconBg: 'bg-teal-100',
      button: 'bg-teal-600 hover:bg-teal-700',
      popular: 'bg-teal-100 text-teal-800'
    }
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 25,000+ Members
            </div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Main Services</h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Financial
              <span className="block text-blue-600">Solutions for You</span>
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SJMPC offers a complete range of financial services designed to empower our members and strengthen our community through cooperative banking excellence and personalized support.
            </p>
          </div>
        </FadeIn>

        {/* Services Slider */}
        <FadeIn direction="up" delay={0.4}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="pb-16"
            >
              {services.map((service, index) => {
                const colorClasses = getColorClasses(service.color);
                return (
                  <SwiperSlide key={service.id}>
                    <div className={`group relative ${colorClasses.bg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${colorClasses.border} overflow-hidden h-full min-h-[500px]`}>
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className={`absolute top-4 right-4 ${colorClasses.popular} px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                          Popular
                        </div>
                      )}

                      {/* Image removed - keep layout with gradient block */}
                      <div className="relative h-52 md:h-56 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-black/5 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-white/80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                            <path d="M8 7h8" />
                            <path d="M8 11h5" />
                          </svg>
                        </div>
                      </div>


                      {/* Header */}
                      <div className="p-8 pb-6">
                        <div className="flex items-start justify-between mb-6">
                          <div className="text-right w-full" aria-hidden="true" />
                        </div>

                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                            {service.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Stats */}
                        
                      </div>

                      {/* Features */}
                      <div className="px-8 pb-6">
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <span className="mr-3">•</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="px-8 pb-8">
                        <Link
                          href={service.link}
                          className={`w-full ${colorClasses.button} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform hover:scale-105`}
                          suppressHydrationWarning={true}
                        >
                          Learn More
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>

                      {/* Decorative Element */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-colors cursor-pointer">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-colors cursor-pointer">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-8"></div>
          </div>
        </FadeIn>

        {/* Enhanced Call to Action */}
      </div>
    </section>
  );
}
