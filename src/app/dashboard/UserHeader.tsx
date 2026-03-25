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
  X,
  CheckCheck
} from "lucide-react";

type Notification = {
  id: string;
  loanType: string;
  status: string;
  updatedAt: string;
};

export default function UserHeader() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);
  const notificationMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const res = await fetch('/api/notifications');
        if (res.ok) {
          const data = await res.json();
          setNotifications(data);
        }
      } catch (error) {
        console.error("Failed to fetch notifications", error);
      }
    }
    fetchNotifications();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationMenuRef.current && !notificationMenuRef.current.contains(event.target as Node)) {
        setNotificationMenuOpen(false);
      }
    }
    if (notificationMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [notificationMenuOpen]);

  const handleMarkAllAsRead = async () => {
    // In a real app, this would be a POST request to an API endpoint to update the database
    // await fetch('/api/notifications/read', { method: 'POST' });
    setNotifications([]); // For now, just clear them from the UI
  };

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
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="SJMPC Logo" 
                    className="h-10 w-10 rounded-lg shadow-md" 
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-lg font-bold text-blue-900">SJMPC</span>
                  <p className="text-xs text-gray-500 -mt-1">Member Portal</p>
                </div>
              </div>
            </div>

            {/* Right Side - User Menu */}
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <div className="relative" ref={notificationMenuRef}>
                <button
                  onClick={() => setNotificationMenuOpen((v) => !v)}
                  className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                  )}
                </button>

                {notificationMenuOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                    <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      {notifications.length > 0 && (
                        <button onClick={handleMarkAllAsRead} className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                          <CheckCheck className="w-3 h-3" />
                          Mark all as read
                        </button>
                      )}
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notif) => (
                          <div key={notif.id} className="p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer">
                            <p className="text-sm text-gray-800">
                              Your <span className="font-semibold">{notif.loanType}</span> application status is now <span className={`font-semibold ${notif.status === 'approved' ? 'text-green-600' : notif.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>{notif.status}</span>.
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{new Date(notif.updatedAt).toLocaleString()}</p>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center">
                          <Bell className="w-8 h-8 mx-auto text-gray-300" />
                          <p className="mt-2 text-sm text-gray-500">No new notifications</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

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
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <Home className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        Profile Settings
                      </Link>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Bottom Actions */}
                    <div className="py-2">
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
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              href="/dashboard"
              className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg"
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
