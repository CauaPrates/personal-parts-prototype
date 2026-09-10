import { Link, useParams } from 'react-router-dom';
import { Star, MessageCircle, Heart, Clock, Layers, CheckCircle2 } from 'lucide-react';
import { produtos } from '../mocks/produtos';
import { categorias } from '../mocks/categorias';
import { depoimentos } from '../mocks/depoimentos';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductCard } from '../components/product/ProductCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useWishlist } from '../context/WishlistContext';
import { buildWhatsAppLink, formatPrice, orcamentoMessage, cn } from '../lib/utils';
import { hashString } from '../lib/visualSeed';
import { NotFound } from './NotFound';

export function ProdutoDetalhe() {
  const { slug } = useParams();
  const produto = produtos.find((p) => p.slug === slug);
  const { isInWishlist, toggle } = useWishlist();

  if (!produto) return <NotFound />;

  const categoria = categorias.find((c) => c.id === produto.categoriaId);
  const relacionados = produtos
    .filter(
      (p) =>
        p.id !== produto.id &&
        (p.categoriaId === produto.categoriaId ||
          p.marcasCompativeis.some((m) => produto.marcasCompativeis.includes(m))),
    )
    .slice(0, 3);

  const avaliacoes = depoimentos.filter((_, i) => (hashString(produto.id) + i) % 3 === 0).slice(0, 3);
  const active = isInWishlist(produto.id);

  return (
    <div className="container-px mx-auto max-w-7xl py-14">
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-silver-400">
        <Link to="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link to="/produtos" className="hover:text-white">Produtos</Link>
        {categoria && (
          <>
            <span>/</span>
            <Link to={`/produtos?categoria=${categoria.id}`} className="hover:text-white">
              {categoria.nome}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-silver-300">{produto.nome}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <ProductGallery imagens={produto.imagens} nome={produto.nome} />

        <div>
          <div className="flex flex-wrap gap-2">
            {categoria && <Badge variant="racing">{categoria.nome}</Badge>}
            <Badge variant="outline">{produto.material}</Badge>
            <Badge variant="outline">{produto.fabricacao}</Badge>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{produto.nome}</h1>
          <p className="mt-3 text-base text-silver-400">{produto.descricao}</p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-white">
              {formatPrice(produto.precoMockado)}
            </span>
            <span className="text-xs text-silver-400">preço estimado, sob consulta</span>
          </div>

          <div className="mt-6 space-y-3 rounded-lg border border-ink-700 bg-ink-800 p-5">
            <div className="flex items-center gap-2 text-sm text-silver-300">
              <Layers className="h-4 w-4 text-racing-400" />
              Compatível com: {produto.marcasCompativeis.join(', ')} — {produto.modelosCompativeis.join(', ')}
            </div>
            <div className="flex items-center gap-2 text-sm text-silver-300">
              <Clock className="h-4 w-4 text-racing-400" />
              {produto.fabricacao}
              {produto.prazoDias ? ` · prazo médio de ${produto.prazoDias} dias úteis` : ''}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              href={buildWhatsAppLink(orcamentoMessage(produto.nome))}
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento via WhatsApp
            </Button>
            <Button size="lg" variant="secondary" onClick={() => toggle(produto)}>
              <Heart className={cn('h-4 w-4', active && 'fill-current text-verde')} />
              {active ? 'Na lista de interesse' : 'Adicionar à lista de interesse'}
            </Button>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
              Ficha técnica
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-silver-400">
              {produto.descricaoTecnica}
            </p>
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold text-white">Compatível também com</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((p) => (
              <ProductCard key={p.id} produto={p} />
            ))}
          </div>
        </section>
      )}

      {avaliacoes.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold text-white">Avaliações de clientes</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {avaliacoes.map((dep) => (
              <div key={dep.id} className="rounded-lg border border-ink-700 bg-ink-800 p-5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < dep.nota ? '#D71920' : 'none'}
                      stroke={i < dep.nota ? '#D71920' : '#3a3a43'}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm text-silver-300">&ldquo;{dep.texto}&rdquo;</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-silver-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-racing-400" />
                  {dep.nome} · {dep.carro}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
