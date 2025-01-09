import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smallscreens: "500px",
      '768scr':'800px',
      '1030scr':'1030px',
    },
    extend: {
      colors: {
        navbg: "rgb(0, 23, 73)",
        linkAct: "rgb(168, 195, 255)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
