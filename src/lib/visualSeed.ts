export function hashString(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Pares de gradiente grafite -> variação sutil, com um acento vermelho ocasional.
// Mantém as peças "fotografadas" coerentes com a paleta de marca em vez de
// fotos de stock genéricas fora do tom preto/prata/vermelho.
const GRADIENTS = [
  'from-ink-700 via-ink-800 to-ink-950',
  'from-ink-600 via-ink-800 to-ink-950',
  'from-ink-800 via-ink-900 to-black',
  'from-ink-700 via-ink-900 to-black',
];

export function gradientForSeed(seed: string): string {
  const idx = hashString(seed) % GRADIENTS.length;
  return GRADIENTS[idx];
}

export function rotationForSeed(seed: string): number {
  return (hashString(seed) % 7) - 3; // -3deg a 3deg
}

export function accentForSeed(seed: string): boolean {
  return hashString(seed) % 3 === 0;
}
