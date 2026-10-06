/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        50: '#FAFAFA',
        100: '#F2F2F2',
        200: '#E5E5E5',
        300: '#CFCFCF',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#3A3A3A',
        800: '#1F1F1F',
        900: '#111111',
      },
      background: '#FAFAFA',
      foreground: '#000000',
      muted: '#F2F2F2',
      'muted-foreground': '#525252',
      border: '#E5E5E5',
      surface: '#FFFFFF',
      'inverse-background': '#0A0A0A',
      'inverse-foreground': '#FFFFFF',
    },
    extend: {
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
        card: '0 22px 70px -34px rgba(0, 0, 0, 0.18)',
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
