'use client';

import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
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
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/loan-packages",
    color: "blue",
    features: ["Business Loans", "Housing Loans", "Agricultural Loans", "Quick Approval"],
    stats: "10,000+ Loans Disbursed",
    popular: true
  },
  {
    id: 2,
    title: "Savings Products",
    subtitle: "Secure Your Future",
    description: "Build wealth and achieve financial stability with our diverse savings products designed to grow your money safely and steadily.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/savings-product",
    color: "green",
    features: ["Regular Savings", "Time Deposits", "Special Savings", "High Interest Rates"],
    stats: "₱500M+ Total Deposits",
    popular: false
  },
  {
    id: 3,
    title: "Insurance Services",
    subtitle: "Protection & Security",
    description: "Comprehensive insurance coverage tailored for cooperative members, protecting your family, assets, and business interests.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: "/services",
    color: "purple",
    features: ["Life Insurance", "Property Insurance", "Health Coverage", "Business Insurance"],
    stats: "5,000+ Policies Active",
    popular: false
  },
  {
    id: 4,
    title: "PMES Program",
    subtitle: "Empower Your Business",
    description: "Transform your micro-enterprise with our PMES program designed to boost growth, sustainability, and profitability.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/online-pmes",
    color: "orange",
    features: ["Business Training", "Financial Education", "Market Linkages", "Technical Support"],
    stats: "2,500+ Entrepreneurs Served",
    popular: false
  },
  {
    id: 5,
    title: "Member Services",
    subtitle: "Dedicated Support",
    description: "Comprehensive support services for our valued members including account management, financial counseling, and community programs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    link: "/contact",
    color: "teal",
    features: ["24/7 Support", "Financial Counseling", "Community Programs", "Member Benefits"],
    stats: "25,000+ Active Members",
    popular: false
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
      button: 'bg-blue-600 hover:bg-blue-700',
      popular: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      icon: 'text-green-600 dark:text-green-400',
      iconBg: 'bg-green-100 dark:bg-green-900',
      button: 'bg-green-600 hover:bg-green-700',
      popular: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      icon: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
      button: 'bg-purple-600 hover:bg-purple-700',
      popular: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
    },
    indigo: {
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      border: 'border-indigo-200 dark:border-indigo-800',
      icon: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      popular: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300'
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-200 dark:border-orange-800',
      icon: 'text-orange-600 dark:text-orange-400',
      iconBg: 'bg-orange-100 dark:bg-orange-900',
      button: 'bg-orange-600 hover:bg-orange-700',
      popular: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300'
    },
    teal: {
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      border: 'border-teal-200 dark:border-teal-800',
      icon: 'text-teal-600 dark:text-teal-400',
      iconBg: 'bg-teal-100 dark:bg-teal-900',
      button: 'bg-teal-600 hover:bg-teal-700',
      popular: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300'
    }
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 25,000+ Members
            </div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Main Services</h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Financial
              <span className="block text-blue-600">Solutions for You</span>
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
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

                      {/* Header */}
                      <div className="p-8 pb-6">
                        <div className="flex items-start justify-between mb-6">
                          <div className={`flex items-center justify-center w-16 h-16 ${colorClasses.iconBg} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                            <div className={colorClasses.icon}>
                              {service.icon}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                              {String(service.id).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                            {service.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Stats */}
                        <div className="mb-6">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {service.stats}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Impact Achieved
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="px-8 pb-6">
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                              <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
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
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors cursor-pointer">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors cursor-pointer">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
