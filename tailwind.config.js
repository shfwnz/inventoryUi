/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pg": "url('/dist/img/login-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
