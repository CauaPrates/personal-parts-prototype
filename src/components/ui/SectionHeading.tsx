import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto', 'max-w-2xl', className)}>
      {eyebrow && (
        <div className="mb-3 flex items-center gap-3" style={align === 'center' ? { justifyContent: 'center' } : undefined}>
          <span className="h-px w-8 bg-racing" />
          <span className="font-display text-xs font-semibold uppercase tracking-wide3 text-racing-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl text-balance">{title}</h2>
      {description && <p className="mt-4 text-base text-silver-400">{description}</p>}
    </div>
  );
}
