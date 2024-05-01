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
      "light-gray": "#EBEBEB",
      "gray": "#D9D9D9",
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
