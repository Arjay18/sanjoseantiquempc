'use client';

import React from 'react';

export type HeroIndicatorsProps = {
  count: number;
  activeIndex: number;
  onSelect?: (index: number) => void;
};

export default function HeroIndicators({
  count,
  activeIndex,
  onSelect,
}: HeroIndicatorsProps) {
  return (
    <div
      className="mt-5 flex items-center justify-center gap-2 sm:justify-start"
      role="tablist"
      aria-label="Hero slide indicators"
    >
      {Array.from({ length: count }).map((_, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${idx + 1}`}
            className="h-2.5 w-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)]"
            style={{
              background: isActive
                ? 'var(--sjmpc-green)'
                : 'rgba(0,0,0,0.18)',
              width: isActive ? 14 : 10,
            }}
            onClick={() => onSelect?.(idx)}
          />
        );
      })}
    </div>
  );
}

