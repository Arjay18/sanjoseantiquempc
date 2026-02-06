"use client";
import { useSession, signOut } from "next-auth/react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function UserHeader() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="SJMPC Logo" className="h-10 w-10 rounded-lg mr-3" />
      </div>
      <div className="flex items-center relative" ref={menuRef}>
        <span className="font-bold text-lg tracking-wide cursor-pointer select-none" onClick={() => setMenuOpen((v) => !v)}>
          Welcome, {session?.user?.name || "User"}
          <svg className="inline ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </span>
        {menuOpen && (
          <div className="absolute right-0 mt-12 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
            <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
            <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
