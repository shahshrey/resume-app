'use client';
import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'elevated' | 'minimal';
  glow?: boolean;
  float?: boolean;
  shimmer?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  as?: 'div' | 'section' | 'article' | 'aside';
  role?: string;
  tabIndex?: number;
  'aria-label'?: string;
}

const Glass: FC<GlassProps> = ({
  children,
  className = '',
  variant = 'default',
  glow = false,
  float = false,
  shimmer = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  as: Component = 'div',
  role,
  tabIndex,
  'aria-label': ariaLabel,
}) => {
  const isClickable = !!onClick;
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!isClickable || !onClick) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  const baseClasses = 'relative transition-all duration-300';
  
  const variantClasses = {
    default: 'glass-card',
    primary: 'glass-primary rounded-xl',
    elevated: 'glass-elevated rounded-xl',
    minimal: 'glass-minimal rounded-lg',
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    glow && 'glass-glow',
    float && 'glass-float',
    isClickable && 'cursor-pointer glass-button',
    className
  );

  const MotionComponent = motion[Component];

  const accessibilityProps = {
    role: role || (isClickable ? 'button' : undefined),
    tabIndex: tabIndex !== undefined ? tabIndex : (isClickable ? 0 : undefined),
    'aria-label': ariaLabel,
    onKeyDown: isClickable ? handleKeyDown : undefined,
  };

  return (
    <MotionComponent
      className={combinedClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={isClickable ? { scale: 1.02, y: -2 } : undefined}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      {...accessibilityProps}
    >
      {shimmer && (
        <div className="absolute inset-0 overflow-hidden rounded-inherit">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}
      {children}
    </MotionComponent>
  );
};

export default Glass;