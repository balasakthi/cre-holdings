/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f8fc",
          100: "#c3deee",
          200: "#93c4e1",
          300: "#63aad4",
          400: "#3390c6",
          500: "#0376b9",
          600: "#03649d",
          700: "#025382",
          800: "#024166",
          900: "#012f4a",
          950: "#011e2e",
        },
      },
      // fontFamily: {
      //   sans: ["Poppins", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
