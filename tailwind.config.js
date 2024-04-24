/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "circle-linear": "linear-gradient(to right, #93A5CF, #E4EfE9)",
        "preloader-pattern": "url('/images/japanese-pattern.png')",
      },
    },
    fontFamily: {
      PPMonumentBlack: ["var(--font-ppmonument-black)", "sans-serif"],
      PPMonumentLight: ["var(--font-ppmonument-light)", "sans-serif"],
      PPMonumentRegular: ["var(--font-ppmonument-regular)", "sans-serif"],
    },
  },
  plugins: [],
}
