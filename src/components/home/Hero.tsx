import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-ink-700 bg-void">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <HeroVisual className="h-full w-full" />
      </motion.div>

      <div className="container-px relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="max-w-xl lg:w-[45%]"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-wide3 text-verde">
            Desde 1997 · São Paulo · Fabricação própria
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.08] text-balance text-white sm:text-5xl lg:text-6xl">
            Transforme seu carro em algo único desde 1997
          </h1>
          <p className="mt-6 max-w-[420px] text-base text-silver-450 sm:text-lg">
            Peças aerodinâmicas com design 100% nacional, fabricação própria em fibra de vidro,
            PU e ABS. Critério técnico de fábrica, personalidade de carro de rua.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="md" onClick={() => navigate('/produtos')}>
              Encontrar peças para meu carro
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="md" variant="secondary" onClick={() => navigate('/trabalhos')}>
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
