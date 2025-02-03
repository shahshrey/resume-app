export const theme = {
  colors: {
    primary: {
      DEFAULT: '#2563eb', // blue-600
      light: '#3b82f6', // blue-500
      dark: '#1d4ed8', // blue-700
    },
    secondary: {
      DEFAULT: '#4b5563', // gray-600
      light: '#6b7280', // gray-500
      dark: '#374151', // gray-700
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      dark: '#111827',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
      light: '#9ca3af',
    },
  },
  spacing: {
    container: {
      padding: '1rem',
      maxWidth: '1280px',
    },
  },
};

export type Theme = typeof theme;
