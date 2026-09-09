import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type BadgeProps = {
  children: ReactNode;
  variant?: 'racing' | 'silver' | 'outline';
  className?: string;
};

const variants = {
  racing: 'bg-racing-50 text-racing-400 border-racing/30',
  silver: 'bg-ink-700 text-silver-300 border-ink-500',
  outline: 'bg-transparent text-silver-400 border-ink-500',
};

export function Badge({ children, variant = 'silver', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide2 font-display',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
