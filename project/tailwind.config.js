/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0B0D',
          bgSecondary: '#17171B',
          text: '#F4F1EC',
          textMuted: '#9A9490',
          redDark: '#A88A5A',
          red: '#C4A96E',
          gold: '#A88A5A',
          goldLight: '#C4A96E',
          border: '#2A2A2E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
    },
  },
  plugins: [],
};
