/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      darkGrey: "#3f4441",},
    extend: {},
    fontFamily: {
      body:['Josefin Sans'],
      special:['Roboto'],
    }
  },
  plugins: [],
}

