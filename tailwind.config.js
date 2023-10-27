/** @type {import('tailwindcss').Config} */

export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'violet': {        
       950: '#2e1065'},
       'black': "#000",
       'white': '#fff',
       'slate': {
        700: '#334155'},
    },
    extend: {},
  },
  plugins: [],
}

