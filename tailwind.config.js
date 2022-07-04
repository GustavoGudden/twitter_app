/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],

  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto,sans-serif",
      },
      colors: {
        gray: {
          300: "#F7F9F9",
          400: "#CCD6DD",
          500: "#536471",
        },
        blue: {
          300: "#8ECDF7",
        },
      },
    },
    plugins: [],
  },
};
