type BrandMarkProps = {
  className?: string;
};

/**
 * Símbolo oficial da marca (monograma "PP" + friso tricolor italiano),
 * aprovado no board final em `personal-parts-brand-assets/`. PNG com fundo
 * transparente, pensado para uso sobre o tema escuro do site.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return <img src="/brand/simbolo-pp.png" alt="Personal Parts" className={className} />;
}
