import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-blue-100/70 p-8 md:p-12">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-100">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
                <path d="M10.29 3.86l-7.2 12.47A2 2 0 004.82 20h14.36a2 2 0 001.73-3.67L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-slate-700">Members Portal</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-600/10 text-indigo-700">Coming soon</span>
          </div>

          <div className="mx-auto mt-6 mb-6 h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 flex items-center justify-center border border-blue-100">
            <svg
              className="h-10 w-10 text-blue-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
              <path d="M10.29 3.86l-7.2 12.47A2 2 0 004.82 20h14.36a2 2 0 001.73-3.67L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-3">
            404
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            <span className="font-semibold text-slate-800">This section isn’t ready yet.</span>
            <br />
            The Members Portal is currently under preparation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login?from=not-found"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
            >
              Coop Login
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-all duration-300 border border-slate-200"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-500">
            If you need assistance, please contact our office.
          </div>
        </div>
      </div>
    </div>
  );
}


