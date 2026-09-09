import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Produto } from '../types';
import { useToast } from './ToastContext';

type WishlistContextValue = {
  items: Produto[];
  isInWishlist: (id: string) => boolean;
  toggle: (produto: Produto) => void;
  count: number;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Produto[]>([]);
  const { showToast } = useToast();

  const isInWishlist = useCallback((id: string) => items.some((p) => p.id === id), [items]);

  const toggle = useCallback(
    (produto: Produto) => {
      const exists = isInWishlist(produto.id);
      showToast(
        exists
          ? `${produto.nome} removido da sua lista de interesse.`
          : `${produto.nome} adicionado à sua lista de interesse.`,
      );
      setItems((prev) =>
        exists ? prev.filter((p) => p.id !== produto.id) : [...prev, produto],
      );
    },
    [isInWishlist, showToast],
  );

  const value = useMemo(
    () => ({ items, isInWishlist, toggle, count: items.length }),
    [items, isInWishlist, toggle],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist deve ser usado dentro de WishlistProvider');
  return ctx;
}
