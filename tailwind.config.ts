import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        red: '#E91C1C',
        gray: {
          DEFAULT: '#8F8F8F',
          dark: '#484848',
        },
        green: '#00EB3E',
        black: '#171518',
        blue: {
          DEFAULT: '#052DEA',
          light: '#6AC1FF',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
