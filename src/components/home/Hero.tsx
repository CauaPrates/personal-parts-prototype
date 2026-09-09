import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { SinceBadge } from '../ui/SinceBadge';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-ink-700">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <HeroVisual className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />

      <div className="container-px relative mx-auto max-w-7xl py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <SinceBadge className="mb-3 h-16 w-auto" />
          <p className="mb-6 font-display text-xs font-semibold uppercase tracking-wide3 text-silver-400">
            São Paulo · Fabricação própria
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            Transforme seu carro em algo{' '}
            <span className="text-racing-400">único</span> desde 1997
          </h1>
          <p className="mt-6 max-w-lg text-base text-silver-300 sm:text-lg">
            Peças aerodinâmicas com design 100% nacional, fabricação própria em fibra de vidro,
            PU e ABS. Critério técnico de fábrica, personalidade de carro de rua.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={() => navigate('/produtos')}>
              Encontrar peças para meu carro
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate('/trabalhos')}>
              Ver portfólio de trabalhos
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silver-400"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
