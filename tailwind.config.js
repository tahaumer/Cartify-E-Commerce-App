/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      "Jost-Regular": ["Jost-Regular", "sans-serif"],
      "Jost-Medium": ["Jost-Medium", "sans-serif"],
      "Jost-Light": ["Jost-Light", "sans-serif"],
      "Jost-Bold": ["Jost-Bold", "sans-serif"],
      "ScriptMT-Bold": ["ScriptMT-Bold", "sans-serif"],
      "Jost-Black": ["Jost-Black", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": "1680px",
      },
    },
  },
  plugins: [],
};
