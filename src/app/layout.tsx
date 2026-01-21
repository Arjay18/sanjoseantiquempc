import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
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
    default: "SJMPC - San Jose Multi-Purpose Cooperative",
    template: "%s | SJMPC"
  },
  description: "San Jose Multi-Purpose Cooperative (SJMPC) - Your trusted financial partner since 1963. Offering comprehensive financial services including loans, savings, insurance, and community development programs.",
  keywords: [
    "cooperative",
    "multi-purpose cooperative",
    "financial services",
    "loans",
    "savings",
    "insurance",
    "community development",
    "SJMPC",
    "San Jose",
    "Iloilo",
    "Philippines"
  ],
  authors: [{ name: "SJMPC", url: "https://sanjoseantiquempc.com" }],
  creator: "SJMPC",
  publisher: "SJMPC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanjoseantiquempc.com",
    title: "SJMPC - San Jose Multi-Purpose Cooperative",
    description: "Your trusted financial partner since 1963. Offering comprehensive financial services including loans, savings, insurance, and community development programs.",
    siteName: "SJMPC",
    images: [
      {
        url: "https://sanjoseantiquempc.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SJMPC - San Jose Multi-Purpose Cooperative"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SJMPC - San Jose Multi-Purpose Cooperative',
    description: 'Your trusted financial partner since 1963. Offering comprehensive financial services including loans, savings, insurance, and community development programs.',
    images: ['https://sanjoseantiquempc.com/twitter-image.jpg'],
    creator: '@sjmpc',
    site: '@sjmpc'
  },
  verification: {
    google: 'google365aef687e380a54.html',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['https://sanjoseantiquempc.com']
    }
  },
  alternates: {
    canonical: 'https://sanjoseantiquempc.com',
    languages: {
      'en-US': 'https://sanjoseantiquempc.com/en-US',
    }
  },
  icons: {
    icon: [
      { url: '/portfolio/Logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/portfolio/Logo.jpg', sizes: '16x16', type: 'image/jpeg' }
    ],
    apple: '/portfolio/Logo.jpg',
    shortcut: '/portfolio/Logo.jpg',
  },
  category: 'finance',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema Markup for Google Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "San Jose Antique MPC",
              "url": "https://sanjoseantiquempc.com.ph/",
              "logo": "https://sanjoseantiquempc.com.ph/images/433653723_8032419583452138_6238720083292977796_n.jpg"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white`}
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
