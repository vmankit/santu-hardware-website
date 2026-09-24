/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a8f6',
          500: '#0e8ce6',
          600: '#026fc4',
          700: '#03589f',
          800: '#074b83',
          900: '#0c3f6d',
          950: '#082847',
        },
        paint: {
          blue: '#1d4ed8',
          yellow: '#f59e0b',
          red: '#e11d48',
          teal: '#0d9488',
          emerald: '#10b981',
          purple: '#7c3aed',
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
        'soft-xl': '0 20px 48px -6px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
        'brand': '0 10px 25px -3px rgba(14, 140, 230, 0.25)',
        'whatsapp': '0 8px 24px -2px rgba(37, 211, 102, 0.35)',
      },
    },
  },
  plugins: [],
}
