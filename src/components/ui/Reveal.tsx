import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  viewportMargin = '-60px',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion || direction === 'none') return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: 35 };
      case 'down':
        return { x: 0, y: -35 };
      case 'left':
        return { x: 35, y: 0 };
      case 'right':
        return { x: -35, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
