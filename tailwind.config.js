/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          deep: '#071426',
          light: '#142C4C',
          slate: '#1E3A5F',
        },
        brand: {
          blue: '#1769E0',
          hover: '#1254B7',
          cyan: '#00B8D9',
          light: '#EAF7FF',
          accent: '#00D8F6',
        },
        surface: {
          bg: '#F7FAFC',
          card: '#FFFFFF',
        },
        body: {
          primary: '#172033',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'modal': '20px',
        'btn': '12px',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(11, 31, 58, 0.05)',
        'elevated': '0 12px 32px -4px rgba(11, 31, 58, 0.08), 0 4px 12px -2px rgba(23, 105, 224, 0.05)',
        'glow-cyan': '0 0 20px rgba(0, 184, 217, 0.25)',
        'glow-blue': '0 0 25px rgba(23, 105, 224, 0.25)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
