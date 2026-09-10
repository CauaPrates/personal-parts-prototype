import { useState } from 'react';
import { PartVisual } from '../ui/PartVisual';
import { cn } from '../../lib/utils';

export function ProductGallery({ imagens, nome }: { imagens: string[]; nome: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="aspect-[4/3] overflow-hidden rounded-lg border border-ink-700">
        <PartVisual seed={imagens[active]} className="h-full w-full" />
      </div>
      {imagens.length > 1 && (
        <div className="mt-3 flex gap-3">
          {imagens.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={cn(
                'h-16 w-20 shrink-0 overflow-hidden rounded border-2 transition-colors',
                active === i ? 'border-verde' : 'border-ink-600 hover:border-ink-500',
              )}
              aria-label={`Ver imagem ${i + 1} de ${nome}`}
            >
              <PartVisual seed={img} className="h-full w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
