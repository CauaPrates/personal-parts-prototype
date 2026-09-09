import { Car } from 'lucide-react';
import { cn } from '../../lib/utils';
import { accentForSeed, gradientForSeed, rotationForSeed } from '../../lib/visualSeed';

type PartVisualProps = {
  seed: string;
  className?: string;
  tone?: 'default' | 'muted';
  emphasis?: 'normal' | 'hero';
};

/**
 * Placeholder de imagem "fotográfica" para peças, gerado localmente a partir
 * de um seed (sem depender de fotos externas). Combina textura de carbono,
 * gradiente grafite determinístico e uma silhueta de carro em prata —
 * suficiente para comunicar hierarquia visual em uma demo, e fácil de trocar
 * por `<img src={imagens[0]} />` quando houver fotos reais dos produtos.
 *
 * `emphasis="hero"` sobe o contraste do glow e do traço do carro e desloca a
 * silhueta para a direita, para sobreviver aos overlays escuros do hero.
 */
export function PartVisual({ seed, className, tone = 'default', emphasis = 'normal' }: PartVisualProps) {
  const gradient = gradientForSeed(seed);
  const rotation = rotationForSeed(seed);
  const accent = emphasis === 'hero' || accentForSeed(seed);
  const isHero = emphasis === 'hero';

  return (
    <div
      className={cn(
        'relative flex items-center overflow-hidden bg-carbon bg-gradient-to-br',
        isHero ? 'justify-end' : 'justify-center',
        gradient,
        tone === 'muted' && 'grayscale',
        className,
      )}
    >
      {accent && (
        <div
          className={cn('absolute -right-8 top-0 h-full w-16 blur-2xl', isHero ? 'bg-racing/40 w-32' : 'bg-racing/25')}
          style={{ transform: `rotate(${rotation + 12}deg)` }}
        />
      )}
      <Car
        className={cn(
          isHero ? 'h-[75%] w-[75%] mr-[-4%] text-silver-300/40' : 'h-[55%] w-[55%] text-silver-300/25',
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
        strokeWidth={isHero ? 0.75 : 1}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
