'use client';

import { useEffect } from 'react';

export default function StagewiseInit() {
  useEffect(() => {
    // Only initialize in development mode
    if (process.env.NODE_ENV === 'development') {
      const initToolbar = async () => {
        try {
          const { initToolbar } = await import('@stagewise/toolbar');
          initToolbar({
            plugins: [],
          });
        } catch (error) {
          console.warn('Failed to initialize stagewise toolbar:', error);
        }
      };
      
      initToolbar();
    }
  }, []);

  return null; // This component doesn't render anything
} 