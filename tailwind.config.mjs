/** @type {import('tailwindcss').Config} */

import { screens } from './tailwind-constants.mjs';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat Variable', 'Montserrat', 'sans-serif'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#334155',
            '--tw-prose-headings': '#334155',
            '--tw-prose-lead': '#475569',
            '--tw-prose-links': '#1678ff',
            '--tw-prose-bold': '#0f172a',
            '--tw-prose-counters': '#64748b',
            '--tw-prose-bullets': '#cbd5e1',
            '--tw-prose-hr': '#e2e8f0',
            '--tw-prose-quotes': '#0f172a',
            '--tw-prose-quote-borders': '#e2e8f0',
            '--tw-prose-captions': '#64748b',
            '--tw-prose-kbd': '#0f172a',
            '--tw-prose-kbd-shadows': '15 23 42',
            '--tw-prose-code': '#0f172a',
            '--tw-prose-pre-code': '#e2e8f0',
            '--tw-prose-pre-bg': '#1e293b',
            '--tw-prose-th-borders': '#cbd5e1',
            '--tw-prose-td-borders': '#e2e8f0',
            '--tw-prose-invert-body': '#cbd5e1',
            '--tw-prose-invert-headings': '#fff',
            '--tw-prose-invert-lead': '#94a3b8',
            '--tw-prose-invert-links': '#fff',
            '--tw-prose-invert-bold': '#fff',
            '--tw-prose-invert-counters': '#94a3b8',
            '--tw-prose-invert-bullets': '#475569',
            '--tw-prose-invert-hr': '#334155',
            '--tw-prose-invert-quotes': '#f1f5f9',
            '--tw-prose-invert-quote-borders': '#334155',
            '--tw-prose-invert-captions': '#94a3b8',
            '--tw-prose-invert-kbd': '#fff',
            '--tw-prose-invert-kbd-shadows': '255 255 255',
            '--tw-prose-invert-code': '#fff',
            '--tw-prose-invert-pre-code': '#cbd5e1',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': '#475569',
            '--tw-prose-invert-td-borders': '#334155',
          },
        },
      }),
    },
    screens,
    container: {
      center: true,
      screens: {
        sm: '1280px',
        md: '1280px',
        lg: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const cssVariable = colorGroup
            ? `--color${colorGroup}-${colorKey}`
            : `--color${colorKey}`;

          const newVars = typeof value === 'string'
            ? { [cssVariable]: value }
            : extractColorVars(value, `${colorGroup}-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
} 