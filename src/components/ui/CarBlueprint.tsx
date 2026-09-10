import { cn } from '../../lib/utils';

/**
 * Silhueta técnica de carro em traço (sem preenchimento), usada como textura
 * de fundo sutil — ecoa o elemento gráfico "blueprint" do board de marca
 * (fundos escuros com esboço de carro em linha fina).
 */
export function CarBlueprint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 100" className={cn('overflow-visible', className)} aria-hidden="true">
      <path
        d="M14,84 Q8,84 8,78 C8,70 10,66 16,64 C22,60 26,52 34,44 C42,36 50,32 62,30 C70,28.5 76,29 82,27 C92,23.5 100,18 114,15 C128,12 144,13 156,18 C164,21.5 168,26 174,29 C184,34 196,36 206,42 C214,47 220,53 224,60 C228,66 229,72 226,77 Q224,84 216,84 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.75}
      />
      <circle cx="46" cy="82" r="15" fill="none" stroke="currentColor" strokeWidth={0.75} />
      <circle cx="190" cy="82" r="15" fill="none" stroke="currentColor" strokeWidth={0.75} />
    </svg>
  );
}
