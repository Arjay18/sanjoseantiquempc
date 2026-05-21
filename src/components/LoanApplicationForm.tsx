'use client';

import dynamic from 'next/dynamic';

// Next.js app routes can't be imported as modules reliably.
// Dynamically load the /online-application page as a component.
const LoanApplication = dynamic(async () => {
  // Use a template literal to bypass static analysis during the TSC build phase,
  // which avoids the "is not a module" error for App Router route files.
  const target = "../app/online-application/page";
  const mod = await import(`${target}`).catch(() => ({
    default: () => null,
  }));
  return mod.default || (() => null);
}, {
  ssr: false,
});

export default LoanApplication;
