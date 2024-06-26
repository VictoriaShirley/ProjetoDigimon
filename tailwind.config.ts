import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "white": "#FFFFFF",
      "gray": {
        "light":"#EBEBEB",
        "medium": "#D9D9D9",
        "dark": "#272727",
      },
      "blue": "#008CC7",
  },
  extend: {
    fontFamily: {
      'doppio': ['Doppio-One-Regular', 'sans-serif'],
      'dosis': ['Dosis-Regular', 'sans-serif'],
      'inter': ['Inter-Regular', 'sans-serif'],
    },
  },
  },
  plugins: [],
};
export default config;
