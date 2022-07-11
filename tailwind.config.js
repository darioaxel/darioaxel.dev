/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'app.vue',
    'plugins/**/*.{js,ts}',
    'nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {        
          themeBackground: 'var(--background)',    
          themeBackground50:  'var(--background-50)',
          themeBackground100: 'var(--background-100)',
          themeBackground200: 'var(--background-200)',
          themeBackground300: 'var(--background-300)',
          themeBackground400: 'var(--background-400)',
          themeBackground500: 'var(--background-500)',
          themeBackground600: 'var(--background-600)',
          themeBackground700: 'var(--background-700)',
          themeBackground800: 'var(--background-800)',
          themeBackground900: 'var(--background-900)',     
          themeText: 'var(--text)',      
          themePrimary: 'var(--primary)', 
      },
    },
  },
  plugins: [],
}
