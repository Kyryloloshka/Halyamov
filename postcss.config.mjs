/** @type {import('postcss-load-config').Config} */
// A custom PostCSS config replaces Next.js's default one, so autoprefixer has
// to be listed explicitly (targets come from "browserslist" in package.json).
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
