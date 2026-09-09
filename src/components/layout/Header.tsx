import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, MessageCircle, Search, X } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { VehicleSelector } from '../shared/VehicleSelector';
import { BrandMark } from '../ui/BrandMark';
import { TricolorAccent } from '../ui/TricolorAccent';
import { cn } from '../../lib/utils';
import { buildWhatsAppLink } from '../../lib/utils';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Trabalhos', to: '/trabalhos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Revenda', to: '/revenda' },
  { label: 'Contato', to: '/contato' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count } = useWishlist();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-ink-950/90 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 lg:h-20">
        <button
          onClick={() => navigate('/')}
          className="flex shrink-0 items-center gap-3"
        >
          <BrandMark className="h-9 w-auto sm:h-10" />
          <span className="text-chrome font-display text-lg font-bold uppercase tracking-wide2 sm:text-xl">
            Personal Parts
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'font-display text-sm font-semibold uppercase tracking-wide2 transition-colors',
                  isActive ? 'text-racing-400' : 'text-silver-300 hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="flex items-center gap-2 rounded border border-ink-500 px-3 py-2 text-sm text-silver-300 hover:border-racing hover:text-white"
            >
              <Search className="h-4 w-4" />
              <span className="hidden md:inline">Encontre peças para o seu carro</span>
            </button>
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 rounded-lg border border-ink-600 bg-ink-800 p-4 shadow-card"
                >
                  <VehicleSelector variant="compact" onNavigate={() => setSearchOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => navigate('/produtos')}
            className="relative flex h-9 w-9 items-center justify-center rounded text-silver-300 hover:text-white"
            aria-label="Lista de interesse"
          >
            <Heart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-racing text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <a
            href={buildWhatsAppLink('Olá! Vim pelo site e gostaria de mais informações.')}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded bg-racing px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide2 text-white hover:bg-racing-600 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center text-white lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <TricolorAccent />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="ml-auto flex h-full w-80 max-w-[85vw] flex-col gap-6 border-l border-ink-700 bg-ink-900 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold uppercase text-white">Menu</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
                  <X className="h-6 w-6 text-silver-300" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'font-display text-lg font-semibold uppercase tracking-wide2',
                        isActive ? 'text-racing-400' : 'text-silver-300',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-2 border-t border-ink-700 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide2 text-silver-400">
                  Encontre peças para o seu carro
                </p>
                <VehicleSelector onNavigate={() => setMobileOpen(false)} />
              </div>

              <a
                href={buildWhatsAppLink('Olá! Vim pelo site e gostaria de mais informações.')}
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center justify-center gap-2 rounded bg-racing px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide2 text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
