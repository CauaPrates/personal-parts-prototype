import { useId } from 'react';
import { cn } from '../../lib/utils';

/**
 * Emblema metálico estampado "Desde 1997" — reinterpretação da fita
 * amarela do site original como um selo grafite/prata com friso vermelho,
 * em vez de um pill de texto genérico.
 */
export function SinceBadge({ className, year = '1997' }: { className?: string; year?: string }) {
  const uid = useId();
  const metalId = `${uid}-metal`;
  const edgeId = `${uid}-edge`;

  return (
    <svg viewBox="0 0 200 100" className={cn('overflow-visible', className)} role="img" aria-label={`Desde ${year}`}>
      <defs>
        <linearGradient id={metalId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3d44" />
          <stop offset="45%" stopColor="#1c1c21" />
          <stop offset="55%" stopColor="#26262d" />
          <stop offset="100%" stopColor="#0d0d10" />
        </linearGradient>
        <linearGradient id={edgeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9aa0aa" />
          <stop offset="100%" stopColor="#4a4d55" />
        </linearGradient>
      </defs>

      <path d="M30,37 L46,37 L36,67 L20,60 Z" fill="#101013" stroke="#3a3d44" strokeWidth={1} />
      <path d="M170,37 L154,37 L164,67 L180,60 Z" fill="#101013" stroke="#3a3d44" strokeWidth={1} />

      <path
        d="M20,22 L46,22 L58,12 L142,12 L154,22 L180,22 L164,42 L180,62 L154,62 L142,72 L58,72 L46,62 L20,62 L36,42 Z"
        fill={`url(#${metalId})`}
        stroke={`url(#${edgeId})`}
        strokeWidth={1.5}
      />

      <circle cx="52" cy="21" r="2" fill="#6b7078" />
      <circle cx="148" cy="21" r="2" fill="#6b7078" />
      <circle cx="52" cy="63" r="2" fill="#6b7078" />
      <circle cx="148" cy="63" r="2" fill="#6b7078" />

      <path d="M50,16 L150,16" stroke="#8b8f97" strokeWidth={1} opacity={0.5} />
      <rect x="30" y="39" width="140" height="6" fill="#e2001a" />

      <text
        x="100"
        y="34"
        textAnchor="middle"
        fontFamily="'Rajdhani', sans-serif"
        fontWeight={700}
        fontSize="15"
        fill="#e4e6ea"
        letterSpacing="2"
      >
        DESDE
      </text>
      <text
        x="100"
        y="62"
        textAnchor="middle"
        fontFamily="'Rajdhani', sans-serif"
        fontWeight={700}
        fontSize="20"
        fill="#ffffff"
        letterSpacing="3"
      >
        {year}
      </text>
    </svg>
  );
}
