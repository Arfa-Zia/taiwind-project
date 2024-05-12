/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        mainColor: '#2c9f89'
      },
      fontFamily: {
        poppins : ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

