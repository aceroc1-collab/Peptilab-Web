/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#B8A06A',
        'gold-light': '#D4BC88',
        'gold-pale': '#E8D9B5',
        silver: '#C0C8D4',
        'dark-1': '#050507',
        'dark-2': '#0A0B0F',
        'dark-3': '#111218',
        'dark-4': '#18191F',
        cyan: '#00D4FF',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      letterSpacing: {
        widest: '0.5rem',
        'extra-wide': '0.4rem',
        ultra: '0.3rem',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'fade-up': 'fadeUp 1s ease forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rotateSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
