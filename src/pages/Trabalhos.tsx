import { useState } from 'react';
import { PackageX } from 'lucide-react';
import { trabalhos } from '../mocks/trabalhos';
import { listaMarcas } from '../mocks/veiculos';
import { WorkCard } from '../components/portfolio/WorkCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export function Trabalhos() {
  const [marca, setMarca] = useState('');

  const marcasComTrabalho = listaMarcas.filter((m) => trabalhos.some((t) => t.marca === m));
  const filtrados = trabalhos.filter((t) => !marca || t.marca === marca);

  return (
    <div className="container-px mx-auto max-w-7xl py-14">
      <SectionHeading
        eyebrow="Portfólio"
        title="Trabalhos realizados"
        description="Carros de clientes que já passaram pela Personal Parts. Arraste o controle nos cards com antes e depois."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterPill label="Todas as marcas" active={marca === ''} onClick={() => setMarca('')} />
        {marcasComTrabalho.map((m) => (
          <FilterPill key={m} label={m} active={marca === m} onClick={() => setMarca(m)} />
        ))}
      </div>

      {filtrados.length === 0 ? (
        <div className="mt-16 flex flex-col items-center justify-center rounded-lg border border-dashed border-ink-600 py-24 text-center">
          <PackageX className="h-10 w-10 text-silver-400" />
          <h3 className="mt-4 font-display text-lg font-semibold text-white">
            Nenhum trabalho encontrado para essa marca
          </h3>
          <Button variant="secondary" className="mt-6" onClick={() => setMarca('')}>
            Ver todas as marcas
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((trabalho) => (
            <WorkCard key={trabalho.id} trabalho={trabalho} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? 'rounded-full border border-racing bg-racing-50 px-4 py-1.5 text-sm text-racing-400'
          : 'rounded-full border border-ink-600 px-4 py-1.5 text-sm text-silver-300 hover:border-ink-500 hover:text-white'
      }
    >
      {label}
    </button>
  );
}
