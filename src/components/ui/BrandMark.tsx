import { useId } from 'react';

type BrandMarkProps = {
  className?: string;
  /** Mostra o brush-stroke tricolor italiano atrás do carro (usado no header/hero; desligado em contextos pequenos, como favicons de UI). */
  withFlag?: boolean;
};

/**
 * Símbolo da marca: silhueta cromada de um esportivo baixo + brush-stroke
 * tricolor italiano atrás — recriação vetorial, em traço mais limpo, do
 * conceito do logo original da Personal Parts (personalparts.com.br),
 * que também combina carro + bandeira da Itália em homenagem ao fundador
 * italiano da empresa.
 */
export function BrandMark({ className, withFlag = true }: BrandMarkProps) {
  const uid = useId();
  const chromeId = `${uid}-chrome`;
  const flagClipId = `${uid}-flag-clip`;
  const flagBlurId = `${uid}-flag-blur`;

  return (
    <svg viewBox="0 0 280 100" className={className} role="img" aria-label="Personal Parts">
      <defs>
        <linearGradient id={chromeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2f4f7" />
          <stop offset="35%" stopColor="#9aa0aa" />
          <stop offset="55%" stopColor="#e8eaee" />
          <stop offset="80%" stopColor="#6b7078" />
          <stop offset="100%" stopColor="#c7cad1" />
        </linearGradient>
        {withFlag && (
          <>
            <clipPath id={flagClipId}>
              <path d="M0,10 C30,0 70,-4 110,6 C140,14 150,28 145,44 C140,60 120,68 100,78 C80,88 55,94 30,90 C10,87 -6,76 -8,58 C-10,40 -8,20 0,10 Z" />
            </clipPath>
            <filter id={flagBlurId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>
          </>
        )}
      </defs>

      {withFlag && (
        <g
          transform="translate(150,10) rotate(-8)"
          clipPath={`url(#${flagClipId})`}
          opacity={0.85}
          filter={`url(#${flagBlurId})`}
        >
          <rect x="-20" y="-10" width="180" height="35" fill="#0d8a3e" />
          <rect x="-20" y="25" width="180" height="35" fill="#f2f4f7" />
          <rect x="-20" y="60" width="180" height="40" fill="#c8102e" />
        </g>
      )}

      {/* spoiler traseiro */}
      <path d="M8,60 L34,50 L34,55 L12,65 Z" fill="#7d818a" stroke="#4a4d55" strokeWidth={0.5} />
      <path d="M10,63 L12,65 L12,84 L8,84 Z" fill="#5c5f66" />

      {/* silhueta do carro */}
      <path
        d="M14,84 Q8,84 8,78 C8,70 10,66 16,64 C22,60 26,52 34,44 C42,36 50,32 62,30 C70,28.5 76,29 82,27 C92,23.5 100,18 114,15 C128,12 144,13 156,18 C164,21.5 168,26 174,29 C184,34 196,36 206,42 C214,47 220,53 224,60 C228,66 229,72 226,77 Q224,84 216,84 Z"
        fill={`url(#${chromeId})`}
        stroke="#4a4d55"
        strokeWidth={1}
      />

      {/* vidro/cabine */}
      <path
        d="M64,30 C74,26 84,21 96,18 C108,15.5 120,16 128,20 C132,22 134,25 136,27.5 C124,26 110,27 98,29 C88,30.5 74,31.5 64,30 Z"
        fill="#14161a"
        opacity={0.92}
      />

      {/* linha de cintura */}
      <path
        d="M20,66 C40,58 70,50 100,45 C140,38 180,42 212,54"
        stroke="#5c5f66"
        strokeWidth={1}
        fill="none"
        opacity={0.5}
      />

      {/* rodas */}
      <circle cx="46" cy="82" r="15" fill="#1a1a1e" stroke="#4a4d55" strokeWidth={1.5} />
      <circle cx="46" cy="82" r="7" fill="#9096a0" />
      <circle cx="190" cy="82" r="15" fill="#1a1a1e" stroke="#4a4d55" strokeWidth={1.5} />
      <circle cx="190" cy="82" r="7" fill="#9096a0" />

      <ellipse cx="118" cy="88" rx="115" ry="3" fill="#000" opacity={0.35} />
    </svg>
  );
}
