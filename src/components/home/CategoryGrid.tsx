import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categorias } from '../../mocks/categorias';
import { iconForCategorySlug } from '../../lib/categoryIcons';
import { SectionHeading } from '../ui/SectionHeading';
import { RivetCorners } from '../ui/RivetCorners';

export function CategoryGrid() {
  return (
    <section className="border-b border-ink-700 bg-ink-950 py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Catálogo"
          title="Encontre por categoria"
          description="Sete frentes de personalização, todas com fabricação própria e critério técnico de fábrica."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categorias.map((categoria, i) => {
            const Icon = iconForCategorySlug(categoria.slug);
            const to = categoria.servico
              ? '/contato?assunto=pintura-personalizada'
              : `/produtos?categoria=${categoria.id}`;
            const ref = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={categoria.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={to}
                  className="card-plate bg-brushed-metal group relative flex flex-col items-start gap-4 overflow-hidden rounded-md p-5 transition-colors hover:border-racing/60"
                >
                  <RivetCorners />
                  <span
                    aria-hidden="true"
                    className="absolute -right-7 -top-7 h-14 w-14 rotate-45 bg-racing/0 transition-colors duration-200 group-hover:bg-racing/90"
                  />
                  <span className="absolute right-3 top-3 font-display text-[10px] font-semibold tracking-wide2 text-silver-400/70">
                    REF.{ref}/07
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded border border-ink-600 bg-ink-950 text-racing-400 transition-colors group-hover:border-racing/50">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {categoria.nome}
                    </h3>
                    <p className="mt-1 text-xs text-silver-400">{categoria.descricao}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
