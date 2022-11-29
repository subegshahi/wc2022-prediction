/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: { 500: "#BE414B", 400: "#c4545d" },
      },
    },
  },
  plugins: [],
};
