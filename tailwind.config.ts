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
        'primary-500': '#F1CD78',
        'primary-600': '#DA8E52',
        'secondary-500': '#CFE96C',
        'off-white': '#D0DFFF',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'dark-5': '#2F2F32',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFF1',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'light-5': '#aCaCcB',
        'light-6': '#cCcCdB',
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
