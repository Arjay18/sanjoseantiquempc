"use client";
import { useSession, signOut } from "next-auth/react";

export default function UserHeader() {
  const { data: session } = useSession();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="SJMPC Logo" className="h-10 w-10 rounded-lg mr-3" />
        <span className="font-bold text-lg tracking-wide">Welcome, {session?.user?.name || "User"}</span>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow font-semibold"
      >
        Log Out
      </button>
    </div>
  );
}
