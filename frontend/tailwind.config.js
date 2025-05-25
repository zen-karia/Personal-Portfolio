/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors:{brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1d17",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#0091b3",
      orange: "#fb971e",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
      green: "#1dbf5b",},
    extend: {
      boxShadow:{
        cyanshadow: '0px 0px 20px 0px rgba(94, 206, 220, 0.5)',
        cyanMediumShadow: '10px 10px 200px 150px rgba(94, 206, 220, 0.5)',
        orangeMediumShadow: '10px 10px 200px 150px rgba(240, 169, 79, 0.5)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite', // Adjust duration as needed
      },
    },
    fontFamily: {
      body:['Josefin Sans'],
      special:['Roboto'],
    }
  },
  plugins: [],
}

