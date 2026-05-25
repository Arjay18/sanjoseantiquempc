'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxHeroBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        // Parallax strength
        const offset = Math.min(120, y * 0.15);
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none will-change-transform">
      <div className="absolute top-[-40px] right-[-40px] w-[28rem] h-[28rem] bg-blue-600 rounded-full blur-3xl opacity-35" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[26rem] h-[26rem] bg-yellow-400 rounded-full blur-3xl opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-yellow-400/10" />
    </div>
  );
}

