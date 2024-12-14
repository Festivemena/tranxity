/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#2A6041",
        backgroundBeige: "#F0ECE3",
        accentBlue: "#6AB2A8",
        earthBrown: "#594A42",
      },
    },
  },
  plugins: [],
};
