import type { TrabalhoRealizado } from '../../types';
import { PartVisual } from '../ui/PartVisual';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Badge } from '../ui/Badge';

export function WorkCard({ trabalho }: { trabalho: TrabalhoRealizado }) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-700 bg-ink-800">
      {trabalho.imagemAntes ? (
        <BeforeAfterSlider
          seedAntes={trabalho.imagemAntes}
          seedDepois={trabalho.imagemDepois}
          className="aspect-[4/3] w-full cursor-ew-resize"
        />
      ) : (
        <div className="relative aspect-[4/3] w-full">
          <PartVisual seed={trabalho.imagemDepois} className="h-full w-full" />
          <Badge variant="racing" className="absolute left-3 top-3">
            Concluído
          </Badge>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-white">{trabalho.titulo}</h3>
        <p className="mt-1 text-xs text-silver-400">
          {trabalho.marca} · {trabalho.modelo} · {trabalho.ano}
        </p>
      </div>
    </div>
  );
}
