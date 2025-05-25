/** @type {import('tailwindcss').Config} */

import { screens } from './tailwind-constants.mjs';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat Variable', 'Montserrat', 'sans-serif'],
      },
    },
    screens,
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '1280px',
        md: '1280px',
        lg: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 