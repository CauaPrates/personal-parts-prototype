import { BrandMark } from '../ui/BrandMark';
import { CarBlueprint } from '../ui/CarBlueprint';
import { cn } from '../../lib/utils';

/**
 * Fundo do hero: composição escura e dramática (luz única forte + sombra
 * pesada) no clima do hero fotográfico do board de marca — sem usar foto real
 * (não temos direito de uso de fotos reais dos carros da Personal Parts),
 * então o símbolo oficial da marca faz esse papel, com o mesmo contraste e
 * recorte diagonal tricolor no canto.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-ink-950', className)}>
      {/* base quase preta, com leve gradiente pra dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-black" />

      {/* esboço técnico do carro, bem sutil, ecoando o elemento gráfico do board */}
      <CarBlueprint className="absolute right-[-4%] top-1/2 h-[52%] w-auto -translate-y-1/2 text-white/[0.04]" />

      {/* luz única forte, tipo estúdio/farol, vindo de trás do símbolo */}
      <div className="absolute right-[8%] top-1/2 h-[70%] w-[30%] -translate-y-1/2 rounded-full bg-white/10 blur-[110px]" />
      <div className="absolute right-0 top-1/2 h-[90%] w-2/5 -translate-y-1/2 rounded-full bg-racing/35 blur-[100px]" />

      <BrandMark
        className="absolute right-[4%] top-1/2 h-auto w-[42%] -translate-y-1/2 drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] sm:w-[34%]"
      />

      {/* vinheta pesada nas bordas, pro clima "estúdio fotográfico" */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      <div className="absolute inset-0 shadow-[inset_0_0_120px_60px_rgba(0,0,0,0.7)]" />
    </div>
  );
}
