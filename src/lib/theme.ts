export const theme = {
  colors: {
    primary: {
      main: '#7C3AED',
      light: '#9F67FF',
      dark: '#5B21B6',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
    },
    background: {
      main: '#0A0A0F',
      paper: '#1A1A23',
      elevated: '#2A2A35',
      gradient: 'linear-gradient(180deg, #0A0A0F 0%, #1A1A23 100%)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0B0',
      disabled: '#666680',
    },
    accent: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  animation: {
    timing: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;

export type Theme = typeof theme;
