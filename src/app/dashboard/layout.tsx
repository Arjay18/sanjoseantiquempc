"use client";

import "../globals.css";
import AuthProvider from "@/components/AuthProvider";
import UserHeader from "./UserHeader";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col bg-white font-sans"
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <UserHeader />
            <main className="flex-grow pt-0 bg-gray-50">
              <div className="w-full px-0">
                {children}
              </div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
