import { cn } from '../../lib/utils';

/**
 * Quatro rebites nos cantos do card, para reforçar a leitura de "placa/peça
 * estampada" em vez do cartão genérico de landing page (borda 1px + ícone).
 */
export function RivetCorners({ className }: { className?: string }) {
  const dot = 'absolute h-1.5 w-1.5 rounded-full bg-ink-500 shadow-[inset_0_1px_1px_rgba(0,0,0,0.6)]';
  return (
    <div className={cn('pointer-events-none absolute inset-0', className)} aria-hidden="true">
      <span className={cn(dot, 'left-2 top-2')} />
      <span className={cn(dot, 'right-2 top-2')} />
      <span className={cn(dot, 'left-2 bottom-2')} />
      <span className={cn(dot, 'right-2 bottom-2')} />
    </div>
  );
}
