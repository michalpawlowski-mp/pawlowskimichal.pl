/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vscodeOrange: "#CE9178",
        vscodeBlue: "#9CDCFE",
      },
    },
  },
  plugins: [],
};
