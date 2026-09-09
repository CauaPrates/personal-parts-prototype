import { PartVisual } from '../components/ui/PartVisual';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { ContactCTA } from '../components/home/ContactCTA';

const TIMELINE = [
  {
    ano: '1997',
    titulo: 'Fundação',
    texto:
      'Um designer italiano radicado em São Paulo funda a Personal Parts após anos convertendo clássicos brasileiros em réplicas de esportivos italianos.',
  },
  {
    ano: '2004',
    titulo: 'Fabricação própria',
    texto: 'Estruturação da própria fábrica de fibra de vidro, eliminando a dependência de terceiros e padronizando o encaixe de cada peça.',
  },
  {
    ano: '2011',
    titulo: 'Expansão para lojistas',
    texto: 'Início da rede de revenda, levando peças Personal Parts para oficinas e lojas especializadas em todo o Brasil.',
  },
  {
    ano: '2018',
    titulo: 'Linha para clássicos',
    texto: 'Lançamento de uma linha dedicada a carros clássicos nacionais, unindo herança automotiva com aerodinâmica moderna.',
  },
  {
    ano: 'Hoje',
    titulo: 'Novo capítulo',
    texto: 'Mais de 2.500 carros personalizados depois, seguimos com o mesmo critério técnico e a mesma obsessão por design.',
  },
];

export function Sobre() {
  return (
    <div>
      <section className="border-b border-ink-700 bg-ink-900 py-16">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Badge variant="racing" className="mb-4">Desde 1997</Badge>
          <h1 className="text-4xl font-bold text-balance sm:text-5xl">
            Peças com design 100% nacional, critério de fábrica italiana
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-silver-400">
            Somos uma empresa paulistana especializada em acessórios aerodinâmicos automotivos
            personalizados — do carro de rua ao clássico restaurado.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-700 bg-ink-950 py-20">
        <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Origem"
              title="De conversões de clássicos a peças de fábrica"
            />
            <p className="mt-5 text-base text-silver-400">
              Nosso fundador chegou ao Brasil já com bagagem em carrocerias esportivas italianas,
              e passou a converter clássicos nacionais em réplicas de ícones do automobilismo.
              Dessa mistura entre design europeu e engenharia de rua nasceu a Personal Parts:
              uma fábrica que trata cada spoiler, para-choque ou aerofólio como uma peça de
              design, não como um acessório genérico.
            </p>
            <p className="mt-4 text-base text-silver-400">
              Hoje seguimos com a mesma obsessão: fibra de vidro laminada à mão, moldes
              revisados constantemente e uma equipe técnica que entende tanto de aerodinâmica
              quanto de acabamento.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-ink-700">
              <PartVisual seed="fabrica-1" className="h-full w-full" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-ink-700">
              <PartVisual seed="fabrica-2" className="h-full w-full" />
            </div>
            <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-lg border border-ink-700">
              <PartVisual seed="equipe-1" className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-700 bg-ink-900 py-20">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading align="center" eyebrow="Linha do tempo" title="Quase 30 anos de estrada" className="mx-auto" />
          <div className="mt-14 space-y-10 border-l border-ink-600 pl-8">
            {TIMELINE.map((item) => (
              <div key={item.ano} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-racing" />
                <span className="font-display text-sm font-bold uppercase tracking-wide2 text-racing-400">
                  {item.ano}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">{item.titulo}</h3>
                <p className="mt-1 text-sm text-silver-400">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink-700 bg-ink-950 py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Diferenciais" title="Por que Personal Parts" className="mx-auto" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { titulo: 'Design nacional', texto: 'Peças desenhadas e prototipadas aqui, pensadas para o carro brasileiro.' },
              { titulo: 'Critério técnico', texto: 'Encaixe testado antes de ir para produção — sem gambiarra na instalação.' },
              { titulo: 'Fibra de vidro artesanal', texto: 'Laminação manual, camada a camada, para resistência e acabamento classe A.' },
            ].map((item) => (
              <div key={item.titulo} className="rounded-lg border border-ink-700 bg-ink-800 p-6">
                <h3 className="font-display text-lg font-semibold text-white">{item.titulo}</h3>
                <p className="mt-2 text-sm text-silver-400">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
