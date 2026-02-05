"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNav = !pathname?.startsWith("/dashboard");
  return (
    <div className="flex min-h-screen flex-col">
      {showNav && <Navigation />}
      <main className={showNav ? "flex-grow pt-16" : "flex-grow"}>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
