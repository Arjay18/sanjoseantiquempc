
"use client";

import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import UserHeader from "./UserHeader";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "User Dashboard | San Jose Antique MPC",
  description: "User dashboard for San Jose Antique MPC members.",
};

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
            <div className="bg-blue-700 text-white text-xs py-2 px-4 flex items-center justify-between">
              <span>San Jose Multi-Purpose Cooperative</span>
              <span>Member Portal</span>
              <span className="ml-auto font-mono">{dateTime}</span>
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
