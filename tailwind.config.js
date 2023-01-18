/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00668A",
        secondary: "#004E71",
      },
    },
    // fontFamily: {
    //   Roboto: ["Roboto, sans-serif"],
    // },
    container: {
      padding: "3rem",
      center: true,
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    // },
  },
  plugins: [],
};
