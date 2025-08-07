import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "copy": "#3e3e3e",
        "dark-copy": "#707070",
        "dark-cards": "#0a0a0a",
        "dark-cards-border": "#1c1c1c",
      },
      backgroundImage: {
        "park": "url('/footer.png')",
        "works-bg-01": "url('/works/bg/cable-car.jpg')",
        "works-bg-02": "url('/works/bg/works.jpg')",
        "works-bg-stripes": "url('/works/bg/stripes.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
