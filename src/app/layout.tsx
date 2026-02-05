import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import CookieConsent from "@/components/CookieConsent";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sanjoseantiquempc.com'),
  title: {
    default: "San Jose Antique MPC",
    template: "%s | San Jose Antique MPC"
  },
  description: "Official website of San Jose Antique MPC",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  category: 'finance',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use a client-side hook to get the current pathname
  // and conditionally render the Navigation component
  // Only show Navigation if not on /dashboard or its subroutes
  // This must be a Client Component to use usePathname
  // So we wrap the body content in a ClientWrapper
  return (
    <html lang="en">
      <head>
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="google365aef687e380a54" />
        <meta name="google-site-verification" content="ooamzwbGJHCbfLjjMPygOkL7akkubfCzD7PqVxr5TyA" />
        {/* Organization Schema Markup for Google Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "San Jose Antique MPC",
              url: "https://sanjoseantiquempc.com",
              logo: "https://sanjoseantiquempc.com/logo.png"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white`}
      >
        <AuthProvider>
          <RootLayoutClient>{children}</RootLayoutClient>
        </AuthProvider>
      </body>
    </html>
  );
}

