
"use client";

import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import UserHeader from "./UserHeader";
import { useEffect, useState } from "react";

// Metadata export removed due to 'use client' directive

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();
      setDateTime(
        now.toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col bg-white font-sans"
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white text-xs py-2 px-4 flex items-center gap-4 rounded-b shadow-sm">
              <div className="flex items-center gap-2 font-semibold tracking-wide">
                <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z"/><path d="M10 6a1 1 0 011 1v2.586l1.707 1.707a1 1 0 01-1.414 1.414l-2-2A1 1 0 018 9V7a1 1 0 012-1z"/></svg>
                <span>San Jose Multi-Purpose Cooperative</span>
              </div>
              <div className="hidden md:flex items-center gap-2 ml-6 text-blue-100/90">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0" /></svg>
                <span>Member Portal</span>
              </div>
              <span className="ml-auto font-mono text-xs flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {dateTime}
              </span>
            </div>
            <header className="bg-blue-900 text-white shadow-sm border-b border-gray-100">
                <UserHeader />
            </header>
            {/* Add client component for personalized header */}
            <main className="flex-grow pt-6 pb-8 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
