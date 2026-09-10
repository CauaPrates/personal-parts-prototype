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
      <path d="M3 18.5 L21 18.5" />
      <path d="M7.5 18.5 L7.5 14.5" />
      <path d="M16.5 18.5 L16.5 14.5" />
      <path d="M4 13 C4 11 6 9.7 9 9.5 C13 9.2 17 9.6 20 11.3 C20 12.6 18.6 13.6 16.5 14 C13 14.6 7 14.6 4 13 Z" />
    </svg>
  );
}

export function ParachoqueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2.5 10 C2.5 8.3 3.8 7.3 5.5 7.3 L18.5 7.3 C20.2 7.3 21.5 8.3 21.5 10 L21.5 12.5 C21.5 15.3 19 17.3 16 17.3 L8 17.3 C5 17.3 2.5 15.3 2.5 12.5 Z" />
      <path d="M9.5 9.3 L14.5 9.3" />
      <circle cx="7" cy="12.3" r="1.2" />
      <circle cx="17" cy="12.3" r="1.2" />
    </svg>
  );
}

export function AerofolioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2 20 L22 20" />
      <path d="M6 20 L6 14" />
      <path d="M18 20 L18 14" />
      <path d="M3 12.5 C3 11 5 9.8 8 9.5 C13 9 18 9.3 21 11.2 C21 12.8 19 14 16 14.3 C11 14.7 6 14.4 3 12.5 Z" />
      <path d="M8 14 C11 14.8 14 14.8 16 14.2" />
    </svg>
  );
}

export function RetrovisorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M20 9 C20 7.3 18.5 6.2 16.8 6.8 L11 8.8 C9 9.5 8.7 12.3 10.3 14.2 C11.9 16 14.8 16.2 16.5 14.5 L19.3 11.7 C19.8 11 20 10 20 9 Z" />
      <path d="M12.5 10 L17.5 8.3" />
      <path d="M11.5 14.5 L8 17.5" />
      <path d="M3 17.5 L8 17.5" />
    </svg>
  );
}

export function ScooperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2 18.5 L22 18.5" />
      <path d="M5 18.5 C5.5 13.5 8 11 12 11 C16 11 18.5 13.5 19 18.5" />
      <path d="M8.5 18.5 L9.3 14.5" />
      <path d="M12 18.5 L12 14" />
      <path d="M15.5 18.5 L14.7 14.5" />
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
