import type { SVGProps } from 'react';

/**
 * Ícones de categoria desenhados como silhuetas reais de peças (spoiler,
 * para-choque, aerofólio...) em vez de conceitos abstratos genéricos
 * (vento, escudo, olho) — no mesmo estilo de traço do lucide-react para
 * ficar visualmente consistente com o resto da UI.
 */
const shared: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function SpoilerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2 19 L14 19" />
      <path d="M14 19 L14 15.5" />
      <path d="M19 19 L19 15.5" />
      <path d="M13 15.5 C15 14.3 18 14.3 20 15.5 C18 16.7 15 16.7 13 15.5 Z" />
    </svg>
  );
}

export function ParachoqueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2.5 9.5 C2.5 8 3.5 7.5 5 7.5 L19 7.5 C20.5 7.5 21.5 8 21.5 9.5 L21.5 13 C21.5 15.5 19.5 17 17 17 L7 17 C4.5 17 2.5 15.5 2.5 13 Z" />
      <path d="M9.5 7.5 L8 13.5" />
      <path d="M14.5 7.5 L16 13.5" />
      <path d="M4 11.5 L7 11.5" />
      <path d="M17 11.5 L20 11.5" />
    </svg>
  );
}

export function AerofolioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M3 20 L21 20" />
      <path d="M7 20 L8 13" />
      <path d="M17 20 L16 13" />
      <path d="M5 12.5 C8 10.5 16 10.5 19 12.5 C16 13.7 8 13.7 5 12.5 Z" />
    </svg>
  );
}

export function RetrovisorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M20 8.5 C20 7 18.8 6.3 17.3 6.7 L11.5 8.3 C9.5 8.9 9 11.5 10.3 13.5 C11.6 15.5 14.3 16 16 14.5 L19 11.8 C19.7 11.2 20 9.8 20 8.5 Z" />
      <path d="M14 15.3 L9.5 18" />
      <path d="M3 18 L9.5 18" />
    </svg>
  );
}

export function ScooperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2 18.5 L22 18.5" />
      <path d="M6.5 18.5 C7 12.5 9 10 12 10 C15 10 17 12.5 17.5 18.5" />
      <path d="M9 13.8 L15 13.8" />
    </svg>
  );
}

export function KitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2 17 C2 15 4 15 5 13 C6.5 10.5 9 9 13 9 C16.5 9 19 10.5 20.5 13 C21.5 14.5 22 15.5 22 17" />
      <path d="M2 17 L22 17" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M4 13.5 L4 15.5" />
      <path d="M20 13.5 L20 15.5" />
    </svg>
  );
}

export function PinturaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M4 15 L4 20 L7 20 L7 16" />
      <path d="M7 14 L14 14 C15 14 15.5 13.3 15.5 12.5 L15.5 11 C15.5 10.3 15 9.7 14.3 9.8 L7 11 Z" />
      <path d="M15.5 11.7 L19 11.2" />
      <path d="M19.5 9 L21.5 8" />
      <path d="M20 12 L22 12" />
      <path d="M19.5 15 L21.5 16" />
    </svg>
  );
}
