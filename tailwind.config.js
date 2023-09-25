/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1800ff',
        'secondary': '#00a2ff',
        'light-1': '#eeeeee',
        'light-2': '#ffffff',
      },
      fontFamily: {
        main: ['Montserrat, sans-serif'],
        secondary: ['Hind, sans-serif'],
      },
    },
  },
  plugins: [],
}

