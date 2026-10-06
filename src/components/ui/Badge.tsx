import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'contrast' | 'success' | 'warning' | 'outline';
  showDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  showDot = true,
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700 border-border',
    contrast: 'bg-gray-100 text-foreground border-border',
    success: 'bg-gray-500/10 text-gray-700 border-gray-500/30',
    warning: 'bg-gray-500/10 text-gray-800 border-gray-500/30',
    outline: 'border-foreground/20 text-foreground',
  };

  const dotColors = {
    default: 'bg-gray-600',
    contrast: 'bg-foreground',
    success: 'bg-foreground',
    warning: 'bg-foreground',
    outline: 'bg-surface',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider border backdrop-blur-md transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {showDot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full animate-pulse',
            dotColors[variant]
          )}
        />
      )}
      {children}
    </span>
  );
};
