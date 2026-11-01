import type { Config } from "tailwindcss";

// Fajr Films brand tokens — change a colour here and it updates everywhere.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A1322", // page background
        ink: "#13213A", // raised surfaces, image placeholders
        dusk: "#1A1030", // purple-maroon gradient stop
        cream: "#F4F1EA", // text on dark, light sections
        amber: { DEFAULT: "#FBC687", soft: "#FFD9A6" }, // the "dawn" accent
        crimson: { DEFAULT: "#800020", light: "#C2334D" }, // secondary accent
      },
      fontFamily: {
        sans: ['"Titillium Web"', "Segoe UI", "system-ui", "sans-serif"],
        arabic: ["Cairo", "sans-serif"],
      },
      letterSpacing: { label: "0.32em" },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};

export default config;
