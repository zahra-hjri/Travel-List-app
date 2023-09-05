/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        18: "4.7rem",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [require("daisyui")],
};
