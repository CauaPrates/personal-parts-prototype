import { categorias } from '../../mocks/categorias';
import { listaMarcas } from '../../mocks/veiculos';
import { cn } from '../../lib/utils';

export type Filtros = {
  categoriaId: string;
  marca: string;
  material: string;
  precoMax: number;
};

const MATERIAIS = ['Fiberglass', 'PU', 'ABS'];
export const PRECO_MAXIMO = 6000;

type ProductFiltersProps = {
  filtros: Filtros;
  onChange: (filtros: Filtros) => void;
  onReset: () => void;
  resultCount: number;
};

export function ProductFilters({ filtros, onChange, onReset, resultCount }: ProductFiltersProps) {
  const catalogCategorias = categorias.filter((c) => !c.servico);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between lg:hidden">
        <span className="text-sm text-silver-400">{resultCount} produtos encontrados</span>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
          Categoria
        </h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
          <FilterOption
            label="Todas"
            active={filtros.categoriaId === ''}
            onClick={() => onChange({ ...filtros, categoriaId: '' })}
          />
          {catalogCategorias.map((c) => (
            <FilterOption
              key={c.id}
              label={c.nome}
              active={filtros.categoriaId === c.id}
              onClick={() => onChange({ ...filtros, categoriaId: c.id })}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
          Marca
        </h3>
        <select
          value={filtros.marca}
          onChange={(e) => onChange({ ...filtros, marca: e.target.value })}
          className="mt-3 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2 text-sm text-white focus:border-verde focus:outline-none"
        >
          <option value="">Todas as marcas</option>
          {listaMarcas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
          Material
        </h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
          <FilterOption
            label="Todos"
            active={filtros.material === ''}
            onClick={() => onChange({ ...filtros, material: '' })}
          />
          {MATERIAIS.map((m) => (
            <FilterOption
              key={m}
              label={m}
              active={filtros.material === m}
              onClick={() => onChange({ ...filtros, material: m })}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
          Preço até {filtros.precoMax === PRECO_MAXIMO ? 'sem limite' : `R$ ${filtros.precoMax}`}
        </h3>
        <input
          type="range"
          min={200}
          max={PRECO_MAXIMO}
          step={100}
          value={filtros.precoMax}
          onChange={(e) => onChange({ ...filtros, precoMax: Number(e.target.value) })}
          className="mt-4 w-full accent-verde"
        />
      </div>

      <button
        onClick={onReset}
        className="font-display text-xs font-semibold uppercase tracking-wide2 text-silver-400 hover:text-white"
      >
        Limpar filtros
      </button>
    </div>
  );
}

function FilterOption({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded border px-3 py-1.5 text-left text-sm transition-colors',
        active
          ? 'border-verde bg-verde-50 text-verde'
          : 'border-ink-600 text-silver-300 hover:border-ink-500 hover:text-white',
      )}
    >
      {label}
    </button>
  );
}
