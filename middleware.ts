import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;
    const url = req.nextUrl;
    const isRscPrefetch = url.searchParams.has('_rsc');

    // Protect branch routes
    if (pathname.startsWith('/branch/')) {
      // Allow RSC prefetches to proceed without auth to avoid 404s during client-side prefetch
      if (isRscPrefetch) return NextResponse.next();

      if (!token || token.role !== 'branch') {
        return NextResponse.redirect(new URL('/admin/login', req.url));
      }

      // Check if user is accessing their own branch
      const branchMatch = pathname.match(/^\/branch\/([^\/]+)/);
      if (branchMatch) {
        const branchName = branchMatch[1];
        if (token.branch !== branchName) {
          return NextResponse.redirect(new URL('/admin/login', req.url));
        }
      }
    }

    // Protect admin routes
    if (pathname.startsWith('/admin/') && !pathname.startsWith('/admin/login')) {
      // Allow RSC prefetches (they don't include cookies) to proceed without auth
      if (isRscPrefetch) return NextResponse.next();

      if (!token || token.role !== 'admin') {
        return NextResponse.redirect(new URL('/admin/login', req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;

        // Allow access to login pages
        if (pathname === '/admin/login' || pathname.match(/^\/branch\/[^\/]+\/login$/)) {
          return true;
        }

        // For protected routes, require a valid token
        if (pathname.startsWith('/branch/') || (pathname.startsWith('/admin/') && !pathname.startsWith('/admin/login'))) {
          return !!token;
        }

        // Allow access to public routes
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    '/admin/:path*',
    '/branch/:path*',
  ],
};
