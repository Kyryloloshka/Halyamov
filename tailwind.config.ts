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
        'primary-500': '#C86FC9',
        'primary-600': '#AB60AB',
        'secondary-500': '#F79AD3',
        'off-white': '#D0DFFF',
        'dark-1': '#000000',
        'dark-2': '#0D0D0D',
        'dark-3': '#171717',
        'dark-4': '#2B2B2B',
        'dark-5': '#373737',
        'light-1': '#ffffff',
        'light-2': '#F3EBEB',
        'light-3': '#EDD0D0',
        'light-4': '#ECCDCD',
        'light-5': '#E3C5C5',
        'light-6': '#E8B7B7',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
