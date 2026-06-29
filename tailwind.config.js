/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#C5A880',
          cream: '#FDFBF7',
          charcoal: '#1E2229',
          slate: '#2D3139',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'serif'],
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
