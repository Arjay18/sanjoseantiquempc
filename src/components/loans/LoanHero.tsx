"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/90">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </a>
        </li>
        <li aria-hidden="true">{'>'}</li>
        <li>
          <a href="/services" className="hover:text-[#D4AF37] transition-colors">
            Products &amp; Services
          </a>
        </li>
        <li aria-hidden="true">{'>'}</li>
        <li aria-current="page" className="text-white">
          Loan Packages
        </li>
      </ol>
    </nav>
  );
}

export default function LoanHero() {
  return (
    <section className="relative overflow-hidden h-[500px] sm:h-[560px] lg:h-[620px]">
      {/* Full background image */}
      <Image
        src="/Hero Section/Loan Heron Section.png"
        alt="Loan Products"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <Breadcrumb />
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              LOAN PRODUCTS
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              Affordable loans that help you achieve your goals and build a better future.
            </p>
            <a
              href="/online-application"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-[#006B3F] font-bold hover:bg-[#C5A032] transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

