import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, PackageX } from 'lucide-react';
import { produtos } from '../mocks/produtos';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilters, PRECO_MAXIMO, type Filtros } from '../components/product/ProductFilters';
import { ProductCardSkeleton } from '../components/ui/Skeleton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const PAGE_SIZE = 8;

export function Catalogo() {
  const [searchParams] = useSearchParams();
  const [filtros, setFiltros] = useState<Filtros>({
    categoriaId: searchParams.get('categoria') ?? '',
    marca: searchParams.get('marca') ?? '',
    material: '',
    precoMax: PRECO_MAXIMO,
  });
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const modeloParam = searchParams.get('modelo') ?? '';

  const filtrados = useMemo(() => {
    return produtos.filter((p) => {
      if (filtros.categoriaId && p.categoriaId !== filtros.categoriaId) return false;
      if (filtros.marca && !p.marcasCompativeis.includes(filtros.marca)) return false;
      if (modeloParam && !p.modelosCompativeis.includes(modeloParam)) return false;
      if (filtros.material && p.material !== filtros.material) return false;
      if (p.precoMockado > filtros.precoMax) return false;
      return true;
    });
  }, [filtros, modeloParam]);

  // Simula um pequeno carregamento ao trocar de filtro, para deixar a demo
  // mais próxima de uma busca real contra um backend.
  useEffect(() => {
    setLoading(true);
    setVisibleCount(PAGE_SIZE);
    const timeout = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timeout);
  }, [filtros, modeloParam]);

  const visiveis = filtrados.slice(0, visibleCount);
  const temMais = visibleCount < filtrados.length;

  function handleReset() {
    setFiltros({ categoriaId: '', marca: '', material: '', precoMax: PRECO_MAXIMO });
  }

  return (
    <div className="container-px mx-auto max-w-7xl py-14">
      <SectionHeading
        eyebrow="Catálogo"
        title="Todas as peças aerodinâmicas"
        description={
          modeloParam || filtros.marca
            ? `Mostrando compatibilidade com ${[filtros.marca, modeloParam].filter(Boolean).join(' ')}.`
            : 'Filtre por categoria, marca, material ou faixa de preço para encontrar a peça certa.'
        }
      />

      <button
        onClick={() => setMobileFiltersOpen(true)}
        className="mt-6 flex items-center gap-2 rounded border border-ink-500 px-4 py-2 text-sm text-white lg:hidden"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filtros
      </button>

      <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ProductFilters
              filtros={filtros}
              onChange={setFiltros}
              onReset={handleReset}
              resultCount={filtrados.length}
            />
          </div>
        </aside>

        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div className="absolute inset-0 bg-black/70" onClick={() => setMobileFiltersOpen(false)} />
            <div className="relative ml-auto flex h-full w-80 max-w-[85vw] flex-col overflow-y-auto border-l border-ink-700 bg-ink-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-bold uppercase text-white">Filtros</span>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Fechar filtros">
                  <X className="h-6 w-6 text-silver-300" />
                </button>
              </div>
              <ProductFilters
                filtros={filtros}
                onChange={setFiltros}
                onReset={handleReset}
                resultCount={filtrados.length}
              />
            </div>
          </div>
        )}

        <div>
          <div className="mb-4 hidden text-sm text-silver-400 lg:block">
            {filtrados.length} produto{filtrados.length !== 1 ? 's' : ''} encontrado
            {filtrados.length !== 1 ? 's' : ''}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : filtrados.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-ink-600 py-24 text-center">
              <PackageX className="h-10 w-10 text-silver-400" />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Nenhum produto encontrado para esse filtro
              </h3>
              <p className="mt-2 max-w-sm text-sm text-silver-400">
                Tente ajustar a categoria, marca ou faixa de preço, ou fale com a gente pelo
                WhatsApp — muitas peças são feitas sob encomenda.
              </p>
              <Button variant="secondary" className="mt-6" onClick={handleReset}>
                Limpar filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visiveis.map((produto) => (
                  <ProductCard key={produto.id} produto={produto} />
                ))}
              </div>
              {temMais && (
                <div className="mt-10 flex justify-center">
                  <Button variant="secondary" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                    Carregar mais produtos
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
