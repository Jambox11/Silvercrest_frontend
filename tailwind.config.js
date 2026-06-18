/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stellar: {
          50: '#f0f7ff',
          100: '#e0efff',
          500: '#001aff',
          600: '#0010cc',
          700: '#001099',
          900: '#000533',
        },
      },
    },
  },
  plugins: [],
};
