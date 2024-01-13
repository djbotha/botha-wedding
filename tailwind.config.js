/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nandor: {
          50: '#f6f7f6',
          100: '#e1e6e2',
          200: '#c2cdc5',
          300: '#9caca1',
          400: '#768b7c',
          500: '#5c7062',
          600: '#435248',
          700: '#3c4940',
          800: '#333c37',
          900: '#2d3430',
          950: '#171c19',
        },
      },
    },
  },
  plugins: [],
};
