/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fdf6f3',
          100: '#fbe9e3',
          200: '#f7d2c4',
          300: '#efb09c',
          400: '#e58268',
          500: '#dc5b3b',
          600: '#C94A1A', // Mahakal signature terracotta
          700: '#A83A12',
          800: '#8A2E0C',
          900: '#71280e',
          950: '#3e1104',
        },
        navy: {
          800: '#1C2B3A',
          850: '#152438',
          900: '#0F1C2E', // Mahakal signature hero navy
          950: '#09111c',
        },
        gold: {
          400: '#F0A940',
          500: '#D4890A', // Mahakal signature gold
          600: '#B57208',
          700: '#8c5504',
        },
        stoneWarm: {
          50: '#FAF8F5',
          100: '#F7F4F0', // Mahakal warm card/body bg
          200: '#E8E2DB', // Mahakal hairline stone border
          300: '#D9D0C7',
          400: '#A89E94',
        },
        brand: {
          50: '#fdf6f3',
          100: '#fbe9e3',
          500: '#C94A1A',
          600: '#A83A12',
          700: '#8A2E0C',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          light: '#dcf8c6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 6px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'terracotta': '0 8px 24px -2px rgba(201, 74, 26, 0.28)',
        'whatsapp': '0 8px 24px -2px rgba(37, 211, 102, 0.35)',
      },
    },
  },
  plugins: [],
}
