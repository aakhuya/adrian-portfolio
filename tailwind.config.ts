import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#020202",
        "candy-blue": "#B2D5E5",
        card: "#0D0D0D",
        border: "#2A2A2A",
        accent: "#B2D5E5",
        "accent-hover": "#D4EAF5",
        text: {
          primary: "#F8F8F8",
          secondary: "#9CA3AF",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
