module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#4B5563",
      primary: "#FFFFFF",
      active: "#171717",
      active1: "#1E40AF",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
