const { theme } = require('./src/lib/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      animation: {
        ...theme.animation,
        'float': 'float 6s ease-in-out infinite',
        'glass-glow': 'glass-glow 4s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'glass-glow': {
          '0%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.2)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
        '5xl': '96px',
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 16px 64px rgba(31, 38, 135, 0.5)',
        'glass-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'neon': '0 0 15px rgba(124, 58, 237, 0.5)',
        'neon-lg': '0 0 30px rgba(124, 58, 237, 0.6)',
      },
    },
  },
  plugins: [],
};
