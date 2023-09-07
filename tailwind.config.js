/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: {
        DEFAULT: "#0079ff",
        gray: "#4b6a9b",
        dark: "#1e2a47",
      },
      gray: {
        100: "#fefefe",
        300: "#f6f8ff",
        500: "#697c9a",
        700: "#2b3442",
        900: "ä141d2f",
      },
      white: "#fff",
      error: "#f74646",
    },
  },
  plugins: [],
  darkMode: "class",
};
