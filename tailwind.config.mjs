/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fffaf0',
        honey: '#d79a2b',
        charcoal: '#211f23',
        blush: '#f4b8c8',
        chrome: '#c8cdd2',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(33, 31, 35, 0.12)',
      },
    },
  },
  plugins: [],
};