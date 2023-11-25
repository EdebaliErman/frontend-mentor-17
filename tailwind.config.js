/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink:"hsl(322, 100%, 66%)",
        paleCyan:"hsl(193, 100%, 96%)",
        darkCyan:"hsl(192, 100%, 9%)",
        grayBlue:"hsl(208, 11%, 55%)"
      },
      fontFamily:{
        "popins":["Poppins","sans-serif"],
        "opensans":["Open Sans","sans-serif"]

      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

