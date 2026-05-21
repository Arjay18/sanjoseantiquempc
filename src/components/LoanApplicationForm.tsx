'use client';

import dynamic from 'next/dynamic';

// Next.js app routes can't be imported as modules reliably.
// Dynamically load the /online-application page as a component.
const LoanApplication = dynamic(async () => {
  // @ts-ignore - Importing App Router pages as components is a non-standard pattern 
  // that can trigger TS2306 if the target file isn't resolved as a module.
  // Recommendation: Extract the form UI to a shared component.
  const mod = await import("../app/online-application/page").catch(() => ({
    default: () => null,
  }));
  return mod.default || (() => null);
}, {
  ssr: false,
});

export default LoanApplication;
