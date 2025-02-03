/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
          disabled: '#9CA3AF',
        },
        background: {
          main: '#FFFFFF',
          paper: '#F3F4F6',
          elevated: '#E5E7EB',
        },
      },
    },
  },
  plugins: [],
};
