import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f7',
          100: '#d1f0e9',
          200: '#a3e1d3',
          300: '#6dcab9',
          400: '#3eac9b',
          500: '#259080',
          600: '#1b7367',
          700: '#195c53',
          800: '#184a44',
          900: '#183f3a',
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
        },
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
          DEFAULT: 'hsl(var(--background) / <alpha-value>)',
        },
        foreground: {
          light: '#171717',
          dark: '#ededed',
          DEFAULT: 'hsl(var(--foreground) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'hsl(var(--border) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float-soft': 'floatSoft 6s ease-in-out infinite',
        'scale-in': 'scaleIn 0.6s var(--transition-snappy) both',
        'menu-pop': 'menuPop 0.32s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        menuPop: {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(-6px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
