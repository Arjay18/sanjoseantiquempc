"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import TopInformationBar from '@/components/home/sjmpc-home/TopInformationBar';

const pillars = [
  {
    title: 'Trusted Service',
    description: 'We provide dependable support rooted in integrity, transparency, and respect for every member.',
  },
  {
    title: 'Community Growth',
    description: 'Our programs are designed to strengthen families, livelihoods, and local businesses across Antique.',
  },
  {
    title: 'Member First',
    description: 'Every decision is guided by the long-term welfare and advancement of our cooperative members.',
  },
  {
    title: 'Sustainable Progress',
    description: 'We combine time-tested values with modern systems to build lasting financial resilience.',
  },
];

const milestones = [
  {
    year: '1963',
    text: 'Founded by community-minded leaders to provide mutual financial support and shared opportunities.',
  },
  {
    year: '1980',
    text: 'Expanded services to meet the growing financial needs of members and their households.',
  },
  {
    year: '2005',
    text: 'Modernized operations and improved access through more efficient member-centered services.',
  },
  {
    year: '2024',
    text: 'Continued to grow with a stronger branch network and broader reach across the region.',
  },
];

const stats = [
  { value: '61+', label: 'Years of service' },
  { value: '15k+', label: 'Members served' },
  { value: '4', label: 'Branch locations' },
  { value: '100%', label: 'Member-focused' },
];

const offerings = [
  'Savings and money management programs tailored for everyday needs.',
  'Accessible loan facilities that support education, livelihoods, and business growth.',
  'Community-oriented initiatives that strengthen families and local development.',
];

const impactPoints = [
  'We continue to support members through practical financial solutions and responsible stewardship.',
  'Our cooperative remains rooted in service, accountability, and long-term community impact.',
  'We embrace innovation while staying true to the values that built our foundation.',
];

export default function AboutPage() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.6, 1, 0.6]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="relative overflow-hidden">
          <Image
            src="/Hero Section/About us Hero Section.png"
            alt="SJMPC Cooperative Building"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003d22]/92 via-[#004D2D]/72 to-[#006B3F]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(0,107,63,0.18),transparent_65%)]" />

          <div className="relative z-10 flex min-h-[700px] items-center lg:min-h-[88vh]">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-14">
              <div className="max-w-2xl xl:max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-0.5 w-10 rounded-full bg-[#D4AF37]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-sm">
                    About SJMPC
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] xl:text-6xl">
                  San Jose Multi-Purpose Cooperative
                </h1>

                <div className="mt-5 flex items-center gap-2">
                  <div className="h-[2px] w-12 rounded-full bg-[#D4AF37]" />
                  <div className="h-[2px] w-4 rounded-full bg-white/20" />
                </div>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Empowering communities since 1963 through trusted financial services, inclusive growth,
                  and member-first development programs that stand the test of time.
                </p>

                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
                  <Link
                    href="/register"
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-[#D4AF37] px-7 py-3.5 text-sm font-extrabold text-[#003d22] shadow-[0_8px_30px_rgba(212,175,55,0.35)] transition-all duration-200 hover:bg-[#c9a130] active:scale-95 sm:text-base"
                  >
                    Become a Member
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/20 active:scale-95 sm:text-base"
                  >
                    Contact Us
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,107,63,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.12),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                A cooperative built on service, stability, and shared progress.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                San Jose Antique Multi-Purpose Cooperative has long been a dependable partner for
                families and entrepreneurs seeking financial support, practical opportunities, and a
                stronger future together.
              </p>

              <div className="mt-10 rounded-[2rem] border border-[#D4AF37]/30 bg-[#EBF7EE] p-8 shadow-[0_20px_60px_-25px_rgba(0,77,45,0.25)]">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#065f46]">
                  Our Vision
                </span>
                <h3 className="mt-4 text-3xl font-black text-[#004D2D] leading-tight">
                  Responsive, dynamic, self-reliant, transparent, and environmentally friendly cooperative.
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-[#065f46]/90">
                  Providing quality service to members and community through trust, innovation, and sustainable growth.
                </p>
                <div className="mt-8">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#006B3F] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#004D2D]/20 transition hover:bg-[#00532f]"
                  >
                    Join our movement
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white/80 p-8 shadow-[0_20px_60px_-25px_rgba(0,77,45,0.25)] backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border border-gray-100 bg-emerald-50/70 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-green-900">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Our Mission
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Mission-driven programs for member empowerment and community development.
              </h2>
              <p className="mt-4 max-w-2xl text-gray-600">
                SJMPC is committed to building a cooperative that serves members through affordable finance,
                participative governance, social development, and model organizational excellence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-green-900 mb-3">FINANCIAL INTERMEDIARY</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  To provide friendly, affordable, and accessible financial services towards building a financially disciplined
                  and empowered membership.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-green-900 mb-3">PEOPLE&apos;S MOVEMENT</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  To raise the level of social and political consciousness of members on participative governance through
                  continuous information, education, and communication processes, geared towards a responsive and responsible community.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-green-900 mb-3">SOCIAL DEVELOPMENT INSTITUTION</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  To instill the values of honesty, openness, industry, and care for others among members and the community,
                  building a sense of dignity and belongingness.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-green-900 mb-3">MODEL ORGANIZATION</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  To live and lead a cooperative anchored in an efficient, effective, and productive endeavor ensuring the growth
                  of members through an open, liberating, and dedicated undertaking that strengthens cooperative systems, structures,
                  and procedures to uplift the social, economic, and cultural life and environment of the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f9f7] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  Our Story
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                  Growing with our community, one milestone at a time.
                </h2>
              </div>
              <p className="max-w-2xl text-gray-600">
                From its beginnings to its present reach, SJMPC has remained committed to uplifting its
                members with consistency, care, and purpose.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {milestones.map((item, index) => (
                <FadeIn key={item.year} direction="up" delay={index * 0.08}>
                  <div className="h-full rounded-[1.5rem] border border-emerald-100 bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-green-800">
                      {item.year}
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

{/* Parallax Section: I BELONG */}
        <section ref={parallaxRef} className="relative h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden bg-[#004D2D]">
          {/* Background image with Framer Motion parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: "url('/Supporting images/Paralax Background.png')", y: bgY }}
          />
          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003d22]/95 via-[#004D2D]/85 to-[#006B3F]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl" />

          <motion.div
            className="relative z-10 flex items-center justify-center h-full"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="text-center px-6 max-w-4xl mx-auto">
              {/* Animated underline accent */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-0.5 w-12 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Our Promise
                </span>
                <span className="h-0.5 w-12 rounded-full bg-[#D4AF37]" />
              </div>

              {/* Large "I BELONG" heading */}
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none">
                I <span className="text-[#D4AF37]">BELONG</span>
              </h2>

              {/* Subheading */}
              <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                To a cooperative that values my growth, supports my dreams, and builds a stronger future — together.
              </p>

              {/* Decorative divider */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-[#D4AF37]/50" />
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <div className="h-px w-16 bg-[#D4AF37]/50" />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/70 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                What We Offer
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Practical services designed to support members at every stage of life.
              </h2>
              <ul className="mt-8 space-y-4">
                {offerings.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-gray-700 shadow-sm">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_-25px_rgba(0,77,45,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Our Commitment
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                A mission rooted in trust, responsibility, and progress.
              </h2>
              <div className="mt-8 space-y-4">
                {impactPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-gray-700">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,_#004d2d_0%,_#006b3f_100%)] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm">
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-emerald-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,_#003d22_0%,_#005f37_100%)] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Join our growing cooperative community
            </h2>
            <p className="mt-6 text-xl text-green-100">
              Become part of a trusted institution serving Antique since 1964 and experience the
              strength of a cooperative built for lasting impact.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href=""
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-green-900 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                Become a Member
              </Link>
              <Link
                href=""
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10"
              >
                Apply for a Loan
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
