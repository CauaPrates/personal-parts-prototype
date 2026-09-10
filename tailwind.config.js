/**
 * Design system — Personal Parts
 * ------------------------------------------------------------------
 * Paleta e tipografia vêm da marca aprovada em `personal-parts-brand-assets/`
 * (ver Brand/paleta-de-cores.png): preto/grafite de carroceria e asfalto,
 * vermelho como assinatura de marca (não decoração), verde como acento
 * secundário usado com moderação, e prata para texto secundário/linhas finas.
 * Tipografia única: Montserrat (400–900).
 *
 * Este arquivo é a fonte da verdade de tokens visuais do protótipo.
 * Quando o projeto evoluir para produção, os valores abaixo devem migrar
 * 1:1 para o design system real (ou tokens do Figma, se houver).
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // o site é dark-only; a classe "dark" é fixada no <html> em main.tsx
  theme: {
    extend: {
      colors: {
        // Escala "ink": grafite/carroceria/asfalto — usada para fundos e superfícies.
        // ink-950 é o fundo base do site; as demais sobem em luminância para
        // criar profundidade entre seções, cards e elementos elevados (modais, header).
        ink: {
          950: '#0F1113', // fundo base (body) — Grafite oficial do board
          900: '#141619', // fundo de seções alternadas
          800: '#1a1c1f', // superfície de card
          700: '#212327', // superfície elevada / hover de card
          600: '#2c2e33', // bordas e divisores sutis
          500: '#404247', // bordas em destaque / inputs focados
        },
        // Vermelho de marca — cor de assinatura, não decoração.
        // Usar com moderação: CTAs primários, badges, hover states, detalhes de traço.
        racing: {
          DEFAULT: '#D71920',
          600: '#BE151C', // hover/active de botões primários
          700: '#96141A', // pressed
          400: '#E8555C', // realces claros sobre fundo escuro (links, ícones ativos)
          50: 'rgba(215, 25, 32, 0.08)', // fundo tênue para badges/alertas sutis
        },
        // Verde de marca — acento secundário, usar com moderação (detalhe perto
        // do logo, friso tricolor, badge pontual). Nunca como CTA primário.
        verde: {
          DEFAULT: '#00843D',
          50: 'rgba(0, 132, 61, 0.08)',
        },
        // Prata — texto secundário, ícones, linhas finas.
        silver: {
          DEFAULT: '#A7A9AC',
          400: '#85878A', // texto terciário / legendas
          300: '#D4D5D7', // texto secundário sobre fundo escuro
        },
      },
      fontFamily: {
        // Família única da marca — pesos mais altos (700–900) para títulos,
        // mais leves (400–500) para corpo de texto. Ver Brand/tipografia.png.
        display: ['"Montserrat"', 'sans-serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.08em',
        wide3: '0.16em',
      },
      backgroundImage: {
        // Textura sutil de fibra de carbono, usada em fundos de seção escuros.
        carbon:
          'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 8px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 8px)',
        // Gradiente de "luz de LED" para halos atrás de elementos de destaque.
        'glow-racing':
          'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(215,25,32,0.15), transparent 70%)',
      },
      boxShadow: {
        // Sombra vermelha sutil para CTAs primários em hover — remete a luz de freio.
        glow: '0 0 0 1px rgba(215,25,32,0.4), 0 8px 24px -8px rgba(215,25,32,0.5)',
        card: '0 4px 24px -8px rgba(0,0,0,0.6)',
      },
      transitionTimingFunction: {
        // Easing usado nas microinterações (Framer Motion usa o equivalente em array).
        sharp: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
