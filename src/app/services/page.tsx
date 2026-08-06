"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/90">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a href="/" className="hover:text-[#D4A017] transition-colors">
            Home
          </a>
        </li>
        <li aria-hidden="true">{'>'}</li>
        <li aria-current="page" className="text-white">
          Products &amp; Services
        </li>
      </ol>
    </nav>
  );
}

function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.55]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-[500px] sm:h-[560px] lg:h-[620px]"
    >
      {/* Full background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="/Hero Section/About us Hero Section.png"
          alt="Products & Services"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Dark overlay with subtle parallax */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(0,0,0,0.4)", opacity: overlayOpacity }}
      />

      {/* Content overlay with parallax */}
      <motion.div
        className="absolute inset-0 z-[2] flex items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <Breadcrumb />
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              PRODUCTS &amp; SERVICES
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              Discover comprehensive cooperative services designed to empower your financial journey and help you achieve your goals.
            </p>
            <a
              href="/online-application"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4A017] text-[#06452C] font-bold hover:bg-[#C08E14] transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Savings Products',
      description: 'Build your wealth with our comprehensive savings solutions designed for your financial security.',
      features: [
        'Regular Savings Account',
        'Time Deposit Programs',
        'Alkansya Savings',
        'Special Purpose Savings',
        'Competitive Dividends',
        'Flexible Terms'
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      link: '/savings-products',
      accent: '#D4A017',
    },
    {
      title: 'Loan Packages',
      description: 'Flexible financing solutions tailored to meet your personal and business needs.',
      features: [
        'Multi-Purpose Loans',
        'Productive Business Loans',
        'Emergency Loans',
        'Short Term Loans',
        'Quick Approval Process',
        'Competitive Rates'
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '/loan-products',
      accent: '#0B5D3B',
    },
    {
      title: 'Membership Benefits',
      description: 'Join our cooperative family and unlock exclusive benefits and opportunities.',
      features: [
        'Easy Membership Application',
        'Financial Education Programs',
        'Community Support Network',
        'Exclusive Member Benefits',
        'Voting Rights',
        'Patronage Refunds'
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: '/online-application',
      accent: '#06452C',
    },
  ];

  return (
<div className="min-h-screen bg-gradient-to-br from-[#F8FAF6] via-white to-[#F3F7F4]">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-[#E5EBE6]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: service.accent }}
              ></div>

              {/* Soft hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B5D3B]/[0.03] to-[#D4A017]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div
                  className="inline-flex p-4 rounded-2xl bg-white shadow-md border border-[#E5EBE6] mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
                  style={{ color: service.accent }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-[#06452C] mb-4">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: service.accent }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={service.link}
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: service.accent }}
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose SJMPC Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#06452C] via-[#0B5D3B] to-[#06452C] p-12 text-white shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#D4A017]/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#F5D98B] text-xs font-bold uppercase tracking-wider mb-4">
                Why SJMPC
              </span>
              <h2 className="text-4xl font-bold mb-4">Why Choose SJMPC?</h2>
              <p className="text-xl text-[#C8DCCF]">Your trusted partner for over 61 years</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4 border border-white/10 group-hover:bg-[#D4A017]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure & Trusted</h3>
                <p className="text-[#C8DCCF] text-sm">Your savings are protected with comprehensive security measures</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4 border border-white/10 group-hover:bg-[#D4A017]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Approval</h3>
                <p className="text-[#C8DCCF] text-sm">Quick loan processing with minimal requirements</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4 border border-white/10 group-hover:bg-[#D4A017]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
                <p className="text-[#C8DCCF] text-sm">Enjoy the best dividend rates in the industry</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4 border border-white/10 group-hover:bg-[#D4A017]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Focused</h3>
                <p className="text-[#C8DCCF] text-sm">Supporting local families and businesses since 1963</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#D4A017] text-[#06452C] rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

