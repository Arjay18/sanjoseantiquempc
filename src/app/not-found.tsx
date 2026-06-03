import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-12">
      <div className="max-w-2xl w-full text-center bg-white rounded-3xl shadow-xl border border-blue-100 p-8 md:p-10">
        <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-blue-700"
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

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 text-lg mb-8">
          This page is not yet accessible.
          <br />
          If you believe this is an error, please sign in to continue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            Coop Login
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all duration-300 border border-blue-100"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

