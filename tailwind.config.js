/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5ef051',
        'secondary': '#00a2ff',
        'light-1': '#111111',
        'light-2': '#161616',
        'text-light': '#dfdfdf',
      },
      fontFamily: {
        main: ['Archivo, sans-serif'],
        secondary: ['Inter, sans-serif'],
      },
    },
  },
  plugins: [],
}

