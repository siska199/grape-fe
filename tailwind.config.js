/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      borderWidth: {
        DEFAULT: "0.005rem",
      },
      borderColor: {
        DEFAULT: "#374151",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      colors: {
        cd50: "#fafafa",
        cd100: "#f4f4f5",
        cd200: "#e4e4e7",
        cd300: "#d4d4d8",
        cd400: "#a1a1aa",
        cd500: "#71717a",
        cd600: "#52525b",
        cd700: "#3f3f46",
        cd800: "#27272a",
        cd900: "#18181b",
      },
    },
  },
  plugins: [],
};
