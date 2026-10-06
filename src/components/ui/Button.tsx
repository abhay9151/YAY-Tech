import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children' | 'onClick'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 min-h-[44px] gap-1.5',
    md: 'text-sm px-6 py-3 min-h-[46px] gap-2',
    lg: 'text-base px-8 py-3.5 min-h-[52px] gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-foreground text-inverse-foreground hover:bg-inverse-foreground hover:text-inverse-background active:bg-inverse-foreground font-semibold',
    secondary:
      'bg-foreground text-inverse-foreground hover:bg-inverse-foreground hover:text-inverse-background font-semibold',
    outline:
      'border border-foreground/25 text-foreground hover:bg-foreground hover:text-inverse-foreground hover:border-foreground transition-colors',
    ghost:
      'text-foreground/70 hover:text-foreground hover:bg-gray-100 active:bg-gray-200',
    glow:
      'bg-inverse-foreground text-inverse-background hover:bg-inverse-background hover:text-inverse-foreground font-semibold',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{icon}</span>}
    </>
  );

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    'group',
    className
  );

  if (asAnchor && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClass}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClass}
      {...props}
    >
      {content}
    </motion.button>
  );
};
