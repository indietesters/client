const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#FFFCF9",
        accent: "#DA841F",
        "secondary-accent": "#FEEBD6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
