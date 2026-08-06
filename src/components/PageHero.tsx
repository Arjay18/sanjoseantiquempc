"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

interface PageHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  crumbs: Crumb[];
}

export default function PageHero({
  image,
  imageAlt,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/online-application",
  crumbs,
}: PageHeroProps) {
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
          src={image}
          alt={imageAlt}
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
            <nav aria-label="Breadcrumb" className="text-sm text-white/90">
              <ol className="flex flex-wrap items-center gap-2">
                {crumbs.map((crumb, idx) => {
                  const isLast = idx === crumbs.length - 1;
                  return (
                    <li key={idx} className="flex items-center gap-2">
                      {idx > 0 && <span aria-hidden="true">{'>'}</span>}
                      {!isLast && crumb.href ? (
                        <a
                          href={crumb.href}
                          className="hover:text-[#D4A017] transition-colors"
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span aria-current="page" className="text-white">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              {title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              {subtitle}
            </p>
            {ctaLabel && (
              <a
                href={ctaHref}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4A017] text-[#06452C] font-bold hover:bg-[#C08E14] transition-colors"
              >
                {ctaLabel}
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
