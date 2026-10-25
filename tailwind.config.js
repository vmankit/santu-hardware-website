/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        santu: {
          yellow: '#F8C200',
          yellowHover: '#E5B200',
          yellowLight: '#FFF8E1',
          dark: '#111827',
          charcoal: '#1F2937',
          slate: '#4B5563',
          lightBg: '#F9FAFB',
          tealSoft: '#E5F3F3',
          green: '#059669',
          greenLight: '#ECFDF5',
          greenDark: '#047857',
          walletDark: '#06331f',
          walletGreen: '#095e3d',
          walletBorder: '#388468',
          border: '#E5E7EB',
          red: '#DC2626',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          light: '#DCF8C6',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'dropdown': '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      }
    },
  },
  plugins: [],
}
