import { Star } from 'lucide-react';
import { depoimentos } from '../../mocks/depoimentos';
import { SectionHeading } from '../ui/SectionHeading';

const SELOS = [
  { valor: '1997', label: 'Ano de fundação' },
  { valor: '+2.500', label: 'Carros personalizados' },
  { valor: '+800', label: 'Lojistas parceiros' },
  { valor: '100%', label: 'Fabricação própria' },
];

export function SocialProof() {
  return (
    <section className="border-b border-ink-700 bg-ink-950 py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 border-b border-ink-700 pb-14 sm:grid-cols-4">
          {SELOS.map((selo) => (
            <div key={selo.label} className="text-center">
              <div className="font-display text-3xl font-bold text-racing-400 sm:text-4xl">
                {selo.valor}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide2 text-silver-400">
                {selo.label}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-14">
          <SectionHeading
            align="center"
            eyebrow="Depoimentos"
            title="Quem já transformou o próprio carro"
            className="mx-auto"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map((dep) => (
              <div
                key={dep.id}
                className="flex flex-col rounded-lg border border-ink-700 bg-ink-800 p-6"
              >
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
                <p className="mt-4 flex-1 text-sm text-silver-300">&ldquo;{dep.texto}&rdquo;</p>
                <div className="mt-5 border-t border-ink-700 pt-4">
                  <p className="font-display text-sm font-semibold text-white">{dep.nome}</p>
                  <p className="text-xs text-silver-400">{dep.carro}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
