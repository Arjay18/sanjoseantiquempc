"use client";
import { useSession } from "next-auth/react";

export default function UserHeader() {
  const { data: session } = useSession();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
      <img src="/logo.png" alt="SJMPC Logo" className="h-10 w-10 rounded-lg mr-3" />
      <span className="font-bold text-lg tracking-wide">Welcome, {session?.user?.name || "User"}</span>
    </div>
  );
}
