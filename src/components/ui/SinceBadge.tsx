import { cn } from '../../lib/utils';

/**
 * Selo "Desde 1997" discreto — retângulo com cantos levemente arredondados,
 * consistente com os demais badges/cards escuros do site (nunca fita/sash).
 */
export function SinceBadge({ className, year = '1997' }: { className?: string; year?: string }) {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center gap-0.5 rounded-lg border border-ink-600 bg-ink-800 px-5',
        className,
      )}
    >
      <span className="font-display text-[10px] font-semibold uppercase tracking-wide3 text-silver-400">
        Desde
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-wide2 text-white">{year}</span>
    </div>
  );
}
