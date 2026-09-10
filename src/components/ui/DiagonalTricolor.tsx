import { cn } from '../../lib/utils';

/**
 * Elemento gráfico assinatura da marca: bandas diagonais verde/prata/vermelho,
 * recorrente em todo o board de marca aprovado (logo, footer strip, hero,
 * elementos gráficos) — o "corte diagonal tricolor" é mais característico da
 * Personal Parts do que uma faixa reta, então esse é o padrão usado em cortes
 * de canto (hero, rodapé), não `TricolorAccent` (linha fina, para divisores).
 *
 * Sem `position` própria — quem chama define via `className` (`absolute`/
 * `relative`). Não hardcoda `relative` aqui: como tem a mesma especificidade
 * de `absolute`, a ordem das classes no HTML não decide o vencedor (é a
 * ordem no stylesheet gerado pelo Tailwind), então as duas juntas conflitam
 * e uma delas vence de forma imprevisível.
 */
export function DiagonalTricolor({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden', className)} aria-hidden="true">
      <span className="absolute top-[-20%] left-0 h-[140%] w-[16%] -skew-x-[20deg] bg-verde" />
      <span className="absolute top-[-20%] left-[14%] h-[140%] w-[8%] -skew-x-[20deg] bg-silver" />
      <span className="absolute top-[-20%] left-[20%] h-[140%] w-[20%] -skew-x-[20deg] bg-racing" />
    </div>
  );
}
