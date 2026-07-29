"use client";
import Navigation from "@/components/Navigation";
import TopInformationBarWrapper from "@/components/TopInformationBarWrapper";
// import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNav = !pathname?.startsWith("/dashboard");
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top info bar + navbar should be available on all non-dashboard pages */}
      {showNav && (
        <>
          <TopInformationBarWrapper />
          <Navigation />
        </>
      )}

      <main
        className={
          showNav ? "flex-grow pt-[108px] sm:pt-[108px]" : "flex-grow"
        }
      >
        {children}
      </main>

      {/* <Footer /> */}
      <CookieConsent />
    </div>
  );
}
