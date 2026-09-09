import { cn } from '../../lib/utils';

/**
 * Detalhe assinatura da marca: friso tricolor italiano (verde/branco/vermelho),
 * em homenagem ao fundador italiano da Personal Parts. Usado com moderação —
 * divisores de seção, rodapé, ao lado do logo — nunca como bandeira literal.
 */
export function TricolorAccent({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-[3px] w-full overflow-hidden', className)} aria-hidden="true">
      <span className="flex-1 bg-[#0d8a3e]" />
      <span className="flex-1 bg-[#f2f4f7]" />
      <span className="flex-1 bg-[#c8102e]" />
    </div>
  );
}
