import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#060F08',
          900: '#0C1F10',
          800: '#112918',
          700: '#183D22',
          600: '#1B5E20',
          500: '#2E7D32',
          400: '#388E3C',
          300: '#4CAF50',
          200: '#A5D6A7',
          100: '#E8F5E9',
          50:  '#F1F8F2',
        },
        gold: {
          700: '#7A5C00',
          600: '#9A7408',
          500: '#B8960A',
          400: '#D4AF37',
          300: '#E8CC6A',
          100: '#FBF3D5',
        },
        stone: {
          950: '#0E0E0C',
          50:  '#FAFAF7',
          100: '#F5F4F0',
          200: '#ECEAE4',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl':  ['7.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '10xl': ['9rem',   { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
} satisfies Config
