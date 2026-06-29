"use client";

import dynamic from "next/dynamic";

// Avoid importing heavy/DOM-using components at build time.
const TopInformationBar = dynamic(() => import("@/components/home/sjmpc-home/TopInformationBar"), {
  ssr: false,
});

export default function TopInformationBarWrapper() {
  return <TopInformationBar />;
}

