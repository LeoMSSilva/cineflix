/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    extend: {
      screens: {
        xs: '540px',
        '2xs': '410px',
        '3xs': '360px',
        '4xl': '2500px',
      },
      backgroundImage: {
        hexagonal: "url('/background.png')",
      },
    },
  },
  plugins: [],
};
