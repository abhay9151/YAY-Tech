import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'outline';
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
    default: 'bg-white/5 text-gray-300 border-white/10',
    accent: 'bg-accent/10 text-indigo-700 border-accent/30',
    success: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    warning: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
    outline: 'border-white/20 text-gray-200',
  };

  const dotColors = {
    default: 'bg-gray-400',
    accent: 'bg-accent shadow-[0_0_8px_#6366F1]',
    success: 'bg-emerald-400 shadow-[0_0_8px_#10B981]',
    warning: 'bg-amber-400 shadow-[0_0_8px_#F59E0B]',
    outline: 'bg-surface-strong',
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
