import type { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Branch Dashboard | SJMPC",
  description: "Branch dashboard for San Jose Multi-Purpose Cooperative",
};

export default function BranchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AuthProvider>
        <main className="flex-grow">
          {children}
        </main>
      </AuthProvider>
    </div>
  );
}
