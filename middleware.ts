import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Protect branch routes
    if (pathname.startsWith('/branch/')) {
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
