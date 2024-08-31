/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBgImage: 'url(/assets/homeImage.jpg)',
        // homeBgImage: 'url(/assets/imageBg.jpg)',
      }
    },
  },
  plugins: [],
}

