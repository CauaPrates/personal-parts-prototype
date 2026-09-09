import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trabalhos } from '../../mocks/trabalhos';
import { WorkCard } from '../portfolio/WorkCard';
import { SectionHeading } from '../ui/SectionHeading';

export function RecentWork() {
  const destaques = trabalhos.slice(0, 4);

  return (
    <section className="border-b border-ink-700 bg-ink-950 py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfólio"
            title="Trabalhos recentes"
            description="Arraste o controle para comparar antes e depois direto nos cards."
          />
          <Link
            to="/trabalhos"
            className="flex shrink-0 items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide2 text-racing-400 hover:text-racing-400/80"
          >
            Ver portfólio completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((trabalho) => (
            <WorkCard key={trabalho.id} trabalho={trabalho} />
          ))}
        </div>
      </div>
    </section>
  );
}
