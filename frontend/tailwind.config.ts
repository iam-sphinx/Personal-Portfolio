import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 10s infinite alternate ease-in-out",
        floatReverse: "floatReverse 10s infinite alternate ease-in-out",
        laminar: "laminar 6s infinite ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
