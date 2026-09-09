import { BrandMark } from '../ui/BrandMark';
import { cn } from '../../lib/utils';

/**
 * Fundo do hero: silhueta cromada real da marca (não mais um wireframe
 * genérico de carro) sobre carbono + glow vermelho, deslocada para a
 * direita para conviver com o headline à esquerda.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-carbon bg-gradient-to-br from-ink-800 via-ink-900 to-black', className)}>
      <div className="absolute right-0 top-1/2 h-[90%] w-2/5 -translate-y-1/2 rounded-full bg-racing/30 blur-[90px]" />
      <BrandMark
        withFlag={false}
        className="absolute right-[4%] top-1/2 h-auto w-[42%] -translate-y-1/2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:w-[34%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
