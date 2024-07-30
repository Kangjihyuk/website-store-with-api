/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9400FF",
        secondary: "#102C57",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.500rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};

