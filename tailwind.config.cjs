/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkGreen: "#146B3A",
        lightGreen: "#00FF6F",
        yellow: "#F8B229",
        darkRed: "#BB2528",
        lightRed: "#EA4630",
        background: "#212121",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "576px" },
      min2xl: { min: "1535px" },
    },
  },
  plugins: [],
};
