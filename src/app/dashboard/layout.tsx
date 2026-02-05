
import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import UserHeader from "./UserHeader";

export const metadata: Metadata = {
  title: "User Dashboard | San Jose Antique MPC",
  description: "User dashboard for San Jose Antique MPC members.",
};

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
