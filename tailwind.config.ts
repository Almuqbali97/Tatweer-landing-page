import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Onest", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        onest: ["Onest", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      keyframes: {
        "logo-marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "logo-marquee": "logo-marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
