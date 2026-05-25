'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxHeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blobBlueRef = useRef<HTMLDivElement | null>(null);
  const blobYellowRef = useRef<HTMLDivElement | null>(null);
  const vignetteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const blobBlue = blobBlueRef.current;
    const blobYellow = blobYellowRef.current;
    const vignette = vignetteRef.current;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        // Map scroll to modern parallax motion (stronger but capped)
        const t = Math.min(220, y);

        if (blobBlue) blobBlue.style.transform = `translate3d(0, ${t * 0.10}px, 0) scale(1.02)`;
        if (blobYellow) blobYellow.style.transform = `translate3d(0, ${t * 0.14}px, 0) scale(1.03)`;
        if (vignette) vignette.style.opacity = String(Math.max(0, 0.22 - t * 0.0006));
      });
    };

    // Initialize on mount
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.14),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.12),transparent_50%)]" />

      <div
        ref={blobBlueRef}
        className="absolute top-[-60px] right-[-80px] w-[34rem] h-[34rem] bg-blue-600 rounded-full blur-3xl opacity-35 transform-gpu will-change-transform"
      />
      <div
        ref={blobYellowRef}
        className="absolute bottom-[-70px] left-[-90px] w-[32rem] h-[32rem] bg-yellow-400 rounded-full blur-3xl opacity-25 transform-gpu will-change-transform"
      />

      {/* Subtle vignette for modern depth */}
      <div ref={vignetteRef} className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-20 transition-opacity" />
    </div>
  );
}

