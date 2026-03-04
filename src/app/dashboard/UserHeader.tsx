"use client";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Home, 
  FileText, 
  CreditCard, 
  Upload, 
  User, 
  LogOut, 
  Menu,
  Bell,
  ChevronDown,
  Settings,
  History,
  TrendingUp
} from "lucide-react";

export default function UserHeader() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const userMenuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: FileText, label: "My Loans", href: "/loan-status" },
    { icon: CreditCard, label: "Apply for Loan", href: "/loan-application" },
    { icon: Upload, label: "Upload Documents", href: "/upload-document" },
    { icon: History, label: "Loan History", href: "/loan-status" },
  ];

  return (
    <div className="w-full">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wide">San Jose Multi-Purpose Cooperative</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Member Portal</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="flex items-center gap-3 group">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="SJMPC Logo" 
                    className="h-10 w-10 rounded-lg shadow-md group-hover:shadow-lg transition-shadow" 
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    SJMPC
                  </span>
                  <p className="text-xs text-gray-500 -mt-1">Member Portal</p>
                </div>
              </Link>
            </div>

            {/* Desktop Quick Links */}
            <div className="hidden lg:flex items-center gap-2">
              <Link 
                href="/loan-application" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow"
              >
                <CreditCard className="h-4 w-4" />
                Apply for Loan
              </Link>
              <Link 
                href="/loan-status" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <FileText className="h-4 w-4" />
                My Loans
              </Link>
              <Link 
                href="/upload-document" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <Upload className="h-4 w-4" />
                Upload
              </Link>
            </div>

            {/* Right Side - User Menu */}
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Dropdown */}
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {/* Avatar */}
                  <div className="h-9 w-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                    {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  
                  {/* User Info */}
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">
                      {session?.user?.name || "User"}
                    </p>
                    <p className="text-xs text-gray-500">Member</p>
                  </div>
                  
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                    {/* User Info Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                      <p className="text-white font-semibold">{session?.user?.name || "User"}</p>
                      <p className="text-blue-100 text-xs">{session?.user?.email || "member@sjmpc.com"}</p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-2">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Bottom Actions */}
                    <div className="py-2">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        Profile Settings
                      </Link>
                      <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <Link 
              href="/loan-application" 
              className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CreditCard className="h-5 w-5" />
              Apply for Loan
            </Link>
            <Link 
              href="/loan-status" 
              className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5" />
              My Loans
            </Link>
            <Link 
              href="/upload-document" 
              className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Upload className="h-5 w-5" />
              Upload Documents
            </Link>
            <Link 
              href="/dashboard" 
              className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
