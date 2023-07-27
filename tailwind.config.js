/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandingBlue: {
          700: "#00395c",
          400: "#0078C2",
          300: "#d5e9f6",
        },
        accentBlue: {
          400: "#3cc3ba",
        },
        brandingNeutral: {
          700: "#040f15",
          100: "#fbfdfe",
        },
      },
    },
  },
  plugins: [],
};
