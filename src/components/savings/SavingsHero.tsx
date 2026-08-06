"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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
        <li>
<a href="/services" className="hover:text-[#D4A017] transition-colors">
            Products &amp; Services
          </a>
        </li>
        <li aria-hidden="true">{'>'}</li>
        <li aria-current="page" className="text-white">
          Savings Products
        </li>
      </ol>
    </nav>
  );
}

export default function SavingsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="/Hero Section/Savings Hero Section.png"
          alt="Savings Products"
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
              SAVINGS PRODUCTS
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              Start saving today for a secure tomorrow. Choose a savings plan that fits your goals.
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

