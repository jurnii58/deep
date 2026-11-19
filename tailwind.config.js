/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepcool: {
          50: '#F0F9F9',
          100: '#E6F4F4',
          200: '#BFE4E4',
          500: '#008C8C',
          600: '#007A7A',
          700: '#006666',
          800: '#004D4D',
          900: '#003333',
          DEFAULT: '#008C8C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
