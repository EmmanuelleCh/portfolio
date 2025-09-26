import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { display: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: {
        vertfonce: {
          DEFAULT: "#A2AF9B", // version claire
          dark: "#748873", // version sombre
        },
        vert: "rgb(182, 206, 180)",
        vertclair: "rgb(217, 233, 207)",
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
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 10s ease-in-out infinite",
        shine: "shine 2.5s linear infinite",
        bounce: "bounce 1s infinite",
      },
      boxShadow: { soft: "0 10px 30px -12px rgba(0,0,0,0.25)" },
    },
  },
  plugins: [],
};
export default config;
