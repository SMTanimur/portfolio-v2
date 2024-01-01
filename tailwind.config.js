/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: '#B3C0FC',
          100: '#9FB0FC',
          200: '#7890FA',
          300: '#516FF9',
          400: '#294FF8',
          500: '#0832EF',
          600: '#072AC8',
          700: '#051F92',
          800: '#03135C',
          850: '#161839',
          900: '#010825',
        },

        primary: {
          50: '#FCE9FD',
          100: '#F9D7EF',
          200: '#F3B4D3',
          300: '#EE91B7',
          400: '#E86D9B',
          500: '#E34A7F',
          600: '#D4215C',
          700: '#A4194B',
          800: '#731239',
          900: '#420A28',
        },
      },
    },
  },
  plugins: [
 
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

