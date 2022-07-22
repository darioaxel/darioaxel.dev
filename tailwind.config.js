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
      backgroundImage: {
        'hero-pattern': 
          "linear-gradient(to right bottom, rgba('#7ed56f',0), rgba('#28b485',1)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      },
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
          themePrimary50:  'var(--primary-50)',
          themePrimary100: 'var(--primary-100)',
          themePrimary200: 'var(--primary-200)',
          themePrimary300: 'var(--primary-300)',
          themePrimary400: 'var(--primary-400)',
          themePrimary500: 'var(--primary-500)',
          themePrimary600: 'var(--primary-600)',
          themePrimary700: 'var(--primary-700)',
          themePrimary800: 'var(--primary-800)',
          themePrimary900: 'var(--primary-900)',
          secondary:'var(--secondary)'  
      },
    },
  },
  plugins: [],
}
