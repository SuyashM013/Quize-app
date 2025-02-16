/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
     colors: {
      'primary': '#FFF4B7',
      'secondary': '#006A67',
      'tertiary': '#003161',
     }
    },
  },
  plugins: [],
}

