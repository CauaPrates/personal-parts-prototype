import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categorias } from '../../mocks/categorias';
import { iconForCategorySlug } from '../../lib/categoryIcons';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '../../lib/utils';

export function CategoryGrid() {
  return (
    <section className="border-b border-ink-700 bg-ink-950 py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Catálogo"
          title="Encontre por categoria"
          description="Sete frentes de personalização, todas com fabricação própria e critério técnico de fábrica."
        />

        <div className="mt-10 grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3">
          {categorias.map((categoria, i) => {
            const Icon = iconForCategorySlug(categoria.slug);
            const to = categoria.servico
              ? '/contato?assunto=pintura-personalizada'
              : `/produtos?categoria=${categoria.id}`;
            const isLastAlone = i === categorias.length - 1 && categorias.length % 3 !== 0;

            return (
              <motion.div
                key={categoria.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={cn(isLastAlone && 'col-span-2 sm:col-span-3')}
              >
                <Link
                  to={to}
                  className={cn(
                    'card-plate group flex h-full items-start gap-4 rounded-md bg-ink-800 p-5 transition-colors hover:border-verde/60',
                    isLastAlone ? 'flex-row sm:justify-center sm:gap-6' : 'flex-col'
                  )}
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded border border-ink-600 bg-ink-950 text-verde transition-colors group-hover:border-verde/50">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className={cn(isLastAlone && 'max-w-sm')}>
                    <h3 className="font-display text-base font-semibold text-white">
                      {categoria.nome}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-silver-400">
                      {categoria.descricao}
                    </p>
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
