/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F0F0F',
        white: '#FFFFFF',
        background: {
          DEFAULT: '#FAFAF8',
          secondary: '#F2F0F5',
          tertiary: '#EBE8F0',
          card: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.9)',
        },
        surface: {
          strong: '#FFFFFF',
          border: 'rgba(15, 15, 15, 0.12)',
          'border-hover': 'rgba(15, 15, 15, 0.24)',
          muted: '#6F6D76',
        },
        accent: {
          DEFAULT: '#7B52E0',
          hover: '#6840CA',
          light: '#7B52E0',
          glow: 'rgba(123, 82, 224, 0.18)',
          emerald: '#7DEFB5',
          cyan: '#69CDE0',
          amber: '#E6B94C',
        },
        violet: {
          DEFAULT: '#7B52E0',
          dark: '#6840CA',
          pale: '#EFE9FF',
        },
        lime: '#E6F266',
        mint: '#7DEFB5',
        night: '#07040F',
        paper: '#FAFAF8',
        muted: '#6F6D76',
        line: '#E5E3E0',
        gray: {
          100: '#F4F2F6',
          200: '#4E4B56',
          300: '#6F6D76',
          400: '#87838E',
          500: '#6F6D76',
        },
        indigo: {
          200: '#DCD1F8',
          300: '#B9A5EE',
          400: '#9B7CE8',
          500: '#7B52E0',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': 'clamp(3.5rem, 9.5vw, 9.5rem)',
        'display-xl': 'clamp(3rem, 7vw, 7rem)',
        'display-lg': 'clamp(2.25rem, 5vw, 4.5rem)',
      },
      boxShadow: {
        card: '0 22px 70px -34px rgba(15, 15, 15, 0.25)',
        violet: '0 12px 38px -16px rgba(123, 82, 224, 0.55)',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'spin-slow': 'spin 16s linear infinite',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'marquee-reverse': { from: { transform: 'translateX(-50%)' }, to: { transform: 'translateX(0)' } },
        'float-slow': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
};
