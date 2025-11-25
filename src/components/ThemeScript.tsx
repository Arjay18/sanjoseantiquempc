export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
          
          // Check if theme already set
          let theme = localStorage.getItem('theme')
          
          // If no theme set, use system preference
          if (!theme) {
            document.documentElement.classList.toggle('dark', darkModeMediaQuery.matches)
            theme = darkModeMediaQuery.matches ? 'dark' : 'light'
            localStorage.setItem('theme', theme)
          } else {
            document.documentElement.classList.toggle('dark', theme === 'dark')
          }
          
          // Listen for system theme changes
          function updateTheme(e) {
            let theme = e.matches ? 'dark' : 'light'
            localStorage.setItem('theme', theme)
            document.documentElement.classList.toggle('dark', e.matches)
          }
          
          darkModeMediaQuery.addEventListener('change', updateTheme)
        `,
      }}
      id="theme-script"
    />
  )
}