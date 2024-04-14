import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Glory: "var(--Glory-font)",
      },
      backgroundImage: {
        space: "url('/space.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        page: "url('/bgPage.png')",
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          1: "#0A0909",
        },
        gray: {
          1: "#1F1E1E",
        },
      },
      keyframes: {
        float: {
          "50%": { transform: "translateX(10%) translateX(10%) rotate(25deg)" },
          "100%": { transform: "translateY(10%) rotate(-25deg)" },
        },
        floatReverse: {
          "100%": {
            transform: "translateX(10%) translateX(10%) rotate(25deg)",
          },
          "50%": { transform: "translateY(10%) rotate(-25deg)" },
        },
        laminar: {
          "0%": { borderRadius: "30% 70% 70% 30% / 50% 47% 53% 50% " },
          "25%": { borderRadius: "53% 47% 54% 46% / 39% 72% 28% 61% " },
          "50%": { borderRadius: "70% 30% 70% 30% / 36% 42% 58% 64% " },
          "100%": { borderRadius: "30% 70% 70% 30% / 50% 47% 53% 50% " },
        },
      },
      animation: {
        float: "float 10s infinite alternate ease-in-out",
        floatReverse: "floatReverse 10s infinite alternate ease-in-out",
        laminar: "laminar 6s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
