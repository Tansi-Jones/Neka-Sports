module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#E1BE43",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
