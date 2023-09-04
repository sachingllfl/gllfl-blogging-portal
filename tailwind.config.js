/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        rubik: "var(--font-rubik)",
      },
      colors: {
        custom_orange: "#ff7d33",
        custom_blue: "#45a6ff",
        custom_dark_blue: "#06065e",
      },
      listStyleType: {
        square: "square",
        circle: "circle",
        roman: "upper-roman",
      },
    },
  },
  plugins: [],
};
