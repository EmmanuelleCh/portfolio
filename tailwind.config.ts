import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { display: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d8f0ff",
          200: "#b2e1ff",
          300: "#84ceff",
          400: "#4fb5ff",
          500: "#1f98ff",
          600: "#0e77db",
          700: "#0b5fb0",
          800: "#0d518f",
          900: "#0f456f",
        },
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 10s ease-in-out infinite",
        shine: "shine 2.5s linear infinite",
      },
      boxShadow: { soft: "0 10px 30px -12px rgba(0,0,0,0.25)" },
    },
  },
  plugins: [],
};
export default config;
