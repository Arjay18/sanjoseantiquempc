'use client';

import dynamic from 'next/dynamic';

// Next.js app routes can't be imported as modules reliably.
// Dynamically load the /online-application page as a component.
const LoanApplication = dynamic(async () => {
  // @ts-expect-error - Importing app router pages as components is not strictly typed by TS, 
  // but works at runtime in Next.js for UI reuse.
  const mod = await import("../app/online-application/page")
    .catch(() => ({ default: () => null }));
  return mod?.default ?? (() => null);
}, {
  ssr: false,
});

export default LoanApplication;
