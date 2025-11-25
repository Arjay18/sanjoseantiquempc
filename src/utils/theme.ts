export function initializeTheme() {
  if (typeof window === 'undefined') return;

  // Check for saved theme
  const savedTheme = localStorage.getItem('theme');
  
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Determine theme
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  
  // Apply theme
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}