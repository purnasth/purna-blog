/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts.jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "bg-clr": "#051406",
        "bg-clr": "#021a24",
        "alt-bg-clr": "#A3CFA7",
        "text-clr": "#FFE194",
        "alt-text-clr": "#F7DCEC",
        "light-green-clr": "#E1F7EB",
      },
    },
  },
  plugins: [],
};
