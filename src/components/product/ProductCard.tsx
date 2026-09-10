import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Produto } from '../../types';
import { PartVisual } from '../ui/PartVisual';
import { Badge } from '../ui/Badge';
import { RivetCorners } from '../ui/RivetCorners';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice, cn } from '../../lib/utils';
import { hashString } from '../../lib/visualSeed';

export function ProductCard({ produto }: { produto: Produto }) {
  const { isInWishlist, toggle } = useWishlist();
  const active = isInWishlist(produto.id);
  const refCode = `PP-${(hashString(produto.id) % 900) + 100}`;

  return (
    <div className="card-plate group relative overflow-hidden rounded-lg bg-ink-800 transition-colors hover:border-ink-500">
      <RivetCorners />
      <Link to={`/produtos/${produto.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <PartVisual seed={produto.imagens[0]} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
          {produto.destaque && (
            <Badge variant="racing" className="absolute left-3 top-3">
              Destaque
            </Badge>
          )}
        </div>
      </Link>

      <button
        onClick={() => toggle(produto)}
        className={cn(
          'absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-colors',
          active ? 'bg-verde text-white' : 'bg-black/40 text-white hover:bg-black/60',
        )}
        aria-label="Adicionar à lista de interesse"
      >
        <Heart className={cn('h-4 w-4', active && 'fill-current')} />
      </button>

      <div className="bg-brushed-metal relative p-4 pt-5">
        <span className="absolute right-3 top-1.5 font-display text-[10px] font-semibold tracking-wide2 text-silver-400/70">
          {refCode}
        </span>
        <div className="mb-2 flex flex-wrap gap-1.5">
          <Badge variant="outline">{produto.material}</Badge>
          <Badge variant="outline">{produto.fabricacao}</Badge>
        </div>
        <Link to={`/produtos/${produto.slug}`}>
          <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-verde">
            {produto.nome}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-silver-400">
          {produto.marcasCompativeis.join(', ')} · {produto.modelosCompativeis.join(', ')}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-white">
            {formatPrice(produto.precoMockado)}
          </span>
          <Link
            to={`/produtos/${produto.slug}`}
            className="font-display text-xs font-semibold uppercase tracking-wide2 text-verde hover:text-verde-600"
          >
            Ver detalhes →
          </Link>
        </div>
      </div>
    </div>
  );
}
