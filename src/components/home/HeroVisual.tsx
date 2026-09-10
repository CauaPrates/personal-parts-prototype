import { cn } from '../../lib/utils';

/**
 * Fundo do hero: foto real do carro (fornecida pelo usuário, com a faixa
 * tricolor já embutida na borda direita). A imagem preenche a altura e a
 * borda direita inteiras (full-bleed, sem "caixa" flutuando no meio do
 * hero); `object-cover` + `object-right` garante que topo, base e direita
 * encostem nas bordas do hero sem faixas de fundo sobrando. Um `mask-image`
 * em gradiente faz a imagem "nascer da escuridão" na borda esquerda, se
 * fundindo com o fundo `bg-void` do hero em vez de cortar de forma dura.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-void', className)}>
      <img
        src="/brand/hero-car.png"
        alt=""
        className="absolute right-0 top-0 h-full w-[65%] object-cover object-right [mask-image:linear-gradient(to_right,transparent,black_35%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_35%)] sm:w-[55%]"
      />
    </div>
  );
}
