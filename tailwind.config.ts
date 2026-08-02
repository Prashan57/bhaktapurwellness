import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#02731d',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
          DEFAULT: '#02731d',
        },
        charcoal: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#4a4a4a',
          900: '#2a2a2a',
          950: '#141414',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e6',
          300: '#f5ead4',
          400: '#eddcba',
          500: '#e2cda0',
        },
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#02731d',
          800: '#065f46',
          900: '#064e3b',
          DEFAULT: '#02731d',
        },
        background: {
          light: '#ffffff',
          dark: '#0f0f0f',
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
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'float-soft': 'floatSoft 6s ease-in-out infinite',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(2, 115, 29, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(2, 115, 29, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #02731d 0%, #059669 50%, #02731d 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
        'gradient-light': 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #ffffff 100%)',
      },
      boxShadow: {
        'primary': '0 4px 20px rgba(2, 115, 29, 0.25)',
        'primary-lg': '0 8px 40px rgba(2, 115, 29, 0.35)',
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'luxury-lg': '0 35px 80px -20px rgba(0, 0, 0, 0.35)',
        'light': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
        'light-lg': '0 35px 80px -20px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;