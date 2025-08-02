'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  glassContainer?: boolean;
  id?: string;
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  glassContainer = false,
  id
}: AnimatedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      className={cn(
        glassContainer && 'glass-minimal p-8 mx-4',
        className
      )}
      id={id}
    >
      {children}
    </motion.section>
  );
};
