import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glow = false,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={cn(
        'relative bg-background-card/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:border-white/20 hover:shadow-2xl hover:shadow-black/60',
        glow && 'card-glow',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
