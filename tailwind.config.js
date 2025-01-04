/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Croissant One", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/src/images/banner.jpg')",
      },
      colors: {
        primary: "rgb(var(--color-primary))",
      },
        screens: {
          xs: "320px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
