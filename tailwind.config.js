module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#1B1C31",
          purple: "#5D65C0",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
