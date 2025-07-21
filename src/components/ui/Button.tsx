'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-xl',
  {
    variants: {
      variant: {
        filled: 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg shadow-black/10',
        outlined: 'border border-white/30 hover:bg-white/10 text-white backdrop-blur-xl',
        ghost: 'hover:bg-white/10 text-white border border-transparent hover:border-white/20',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};
