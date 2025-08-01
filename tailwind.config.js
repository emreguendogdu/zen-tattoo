/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(60px)" },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      animation: {
        scroll: "scroll 2s ease infinite",
        border: "border 4s linear infinite",
      },
      borderRadius: {
        "custom-contact": "50% 50% 50% 50% / 60% 60% 0% 0%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "circle-linear": "linear-gradient(to right, #93A5CF, #E4EfE9)",
        "preloader-pattern": "url('/images/patterns.png')",
      },
      colors: {
        primary: "var(--primary-color)",
      },
      dropShadow: {
        custom: "0 1.2px 1.2px rgba(0,0,0,0.8)",
      },
      fontFamily: {
        display: "var(--font-display)",
      },
      spacing: {
        "sectionX-m": "12px",
        sectionX: "20px",
        "sectionY-m": "128px",
        sectionY: "256px",
        "sectionY-m-half": "64px",
        "sectionY-half": "128px",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
}
