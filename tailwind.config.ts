import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "accent-text": "var(--accent-text)",
        "accent-text-large": "var(--accent-text-large)",
        "accent-fill": "var(--accent-fill)",
        "accent-fill-hover": "var(--accent-fill-hover)",
        "accent-chip": "var(--accent-chip)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      // Evita el "sticky hover" en touch: solo aplica hover cuando el
      // dispositivo realmente soporta hover con un puntero preciso (mouse).
      addVariant("hover-fine", "@media (hover: hover) and (pointer: fine) { &:hover }");
    }),
  ],
};

export default config;
