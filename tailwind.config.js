/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        150: "150px",
      },
      backgroundColor: {
        default: "#D9D9D9",
        navColor: "#2A2828",
      },
      backgroundImage: {
        "login-pg": "url('/dist/img/login-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
