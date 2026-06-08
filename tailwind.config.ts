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
        brand: {
          blue: "#1B3A6B",
          "blue-dark": "#152D56",
          "blue-mid": "#1E4080",
          orange: "#E8773A",
          "orange-light": "#F08C55",
          cyan: "#00AEEF",
          green: "#4CAF50",
          "green-accent": "#5DBB63",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
