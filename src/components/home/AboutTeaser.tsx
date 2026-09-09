import { ArrowRight } from 'lucide-react';
import { PartVisual } from '../ui/PartVisual';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function AboutTeaser() {
  return (
    <section className="border-b border-ink-700 bg-ink-900 py-20">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-ink-700">
          <PartVisual seed="oficina-1997" className="h-full w-full" />
        </div>
        <div>
          <Badge variant="racing" className="mb-4">
            Quem somos
          </Badge>
          <h2 className="text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Design automotivo com raízes italianas, feito em São Paulo
          </h2>
          <p className="mt-5 text-base text-silver-400">
            A Personal Parts nasceu em 1997 das mãos de um designer italiano que também assinou
            conversões de clássicos brasileiros em réplicas de esportivos icônicos. Desde então,
            unimos critério técnico de fábrica e sensibilidade de estúdio de design para criar
            peças que não existem em nenhum outro carro igual ao seu.
          </p>
          <div className="mt-8">
            <Button href="/sobre" variant="secondary">
              Conhecer nossa história
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
