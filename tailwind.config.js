/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'laptop': '1340px',
      'ataslaptop': '1920px',
      },
      colors: {
        'bg' : '#F6F6F6'
      }
    },
  },
  plugins: [],
}

