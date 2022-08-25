/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],

  theme: {
    colors: {
      primary: "gray-300",
      accent: "",
    },
  
    extend: {
    fontFamily: {
    h1: "poppins,system-ui, sans-serif",
  },
},
},

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
