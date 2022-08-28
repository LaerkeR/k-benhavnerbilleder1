/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  darkMode: 'class',

  theme: {
    colors: {
      'blue': "#D0D8D9",
      'dark-blue': "#939899",
      'dark': "#e5e7eb",
      'black': "#000000",
      'white': "#FCFCFC",
      'broken-white': "#f8fafc",
      'orange': "#F2E5D5",
    },

    extend: {
      colors: {
       

      },
    fontFamily: {
    h1: "",
  },
},
},

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

