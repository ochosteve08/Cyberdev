/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      listStyleType: ["responsive"], // this line
      listStylePosition: ["responsive"],
    },
  },
  plugins: [],
};
