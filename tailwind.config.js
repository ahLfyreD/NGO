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
        bgImage: 'url(/assets/imageBg.jpg)',
        donationImage: 'url(/assets/children.jpg)',
      }
    },
  },
  plugins: [],
}

