# Theme Specification

## Color Palette
```typescript
const theme = {
  colors: {
    primary: {
      main: '#7C3AED',  // Deep purple
      light: '#9F67FF',
      dark: '#5B21B6',
    },
    background: {
      main: '#0A0A0F',  // Dark background
      paper: '#1A1A23',
      elevated: '#2A2A35',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0B0',
      disabled: '#666680',
    },
    accent: {
      main: '#10B981',  // Emerald
      light: '#34D399',
      dark: '#059669',
    }
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
    }
  },

  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    }
  }
}
```

```markdown:docs/file-structure.md
# File Structure Document

project-root/
├── app/
│   