import React from 'react';
import { cn } from '@/lib/utils';

export interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}) => {
  const speedClass = {
    slow: 'duration-[55s]',
    normal: 'duration-[36s]',
    fast: 'duration-[22s]',
  }[speed];

  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

  return (
    <div
      className={cn(
        'marquee-group group flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className
      )}
    >
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          'marquee-track motion-reduce:animate-none',
          animationClass,
          speedClass,
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          'marquee-track motion-reduce:animate-none',
          animationClass,
          speedClass,
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
    </div>
  );
};
