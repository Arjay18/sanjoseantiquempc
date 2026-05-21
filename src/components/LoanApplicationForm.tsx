'use client';

import dynamic from 'next/dynamic';

// Next.js app routes can't be imported as modules reliably.
// Dynamically load the /online-application page as a component.
const LoanApplication = dynamic(async () => {
  // Cast the path to any to prevent TypeScript from strictly validating 
  // the module structure of a route file during the build.
  const mod = await import("../app/online-application/page" as any).catch(() => ({
    default: () => null,
  }));
  return mod.default || (() => null);
}, {
  ssr: false,
});

export default LoanApplication;
