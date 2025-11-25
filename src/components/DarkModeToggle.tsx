'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  // Track mounted state to prevent hydration issues
  const [mounted, setMounted] = useState(false);

  // Initialize with a default value
  const [darkMode, setDarkMode] = useState(false);

  // Run once on mount
  useEffect(() => {
    // Get initial dark mode state
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);
    setMounted(true);

    // Add dark mode by default if user prefers dark
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      }
    }
  }, []);

  // Handle toggle
  const toggleDarkMode = () => {
    // Toggle dark mode
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon */}
      <svg
        className={`h-5 w-5 text-yellow-500 transition-all duration-300 ${
          darkMode ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        style={{ position: 'absolute' }}
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>

      {/* Moon icon */}
      <svg
        className={`h-5 w-5 text-gray-900 transition-all duration-300 dark:text-gray-200 ${
          darkMode ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        style={{ position: 'absolute' }}
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  );
}