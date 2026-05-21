'use client';

import dynamic from 'next/dynamic';

// Next.js app routes can't be imported as modules reliably.
// Dynamically load the /online-application page as a component.
const LoanApplication = dynamic(() => import('../app/online-application/page').then(m => m.default), {
  ssr: false,
});

export default LoanApplication;


