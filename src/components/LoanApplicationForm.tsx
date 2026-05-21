'use client';

import dynamic from 'next/dynamic';

// Next.js app routes can't be imported as modules reliably.
// Dynamically load the /online-application page as a component.
const LoanApplication = dynamic(async () => {
  // Load the client component without creating a static TS module import.
  const mod: any = await import("../app/online-application/page");
  return mod?.default;
}, {
  ssr: false,
});

export default LoanApplication;


