'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface AnimatedSectionProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}; 