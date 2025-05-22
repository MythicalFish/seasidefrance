/** @type {import('tailwindcss').Config} */

import { screens } from './tailwind-constants.mjs';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    screens
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 