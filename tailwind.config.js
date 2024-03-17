/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['Aire Bold Std'],
        santis: ['Santis W01 Regular'],
      },
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
        tuatara: {
          50: '#f6f6f5',
          100: '#e7e7e6',
          200: '#d1d1d0',
          300: '#b1b0af',
          400: '#898887',
          500: '#6e6d6c',
          600: '#5e5d5c',
          700: '#50504e',
          800: '#464644',
          900: '#3d3d3c',
          950: '#262626',
        },
      },
    },
  },
  plugins: [],
};
