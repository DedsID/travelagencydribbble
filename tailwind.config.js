/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'laptop': '1680px',
      'ataslaptop': '1920px',
      },
      colors: {
        'base' : '#F6F6F6'
      }
    },
  },
  plugins: [],
}

