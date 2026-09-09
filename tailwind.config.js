/**
 * Design system — Personal Parts
 * ------------------------------------------------------------------
 * Herança de marca: fundada em 1997 por um designer italiano que também
 * fazia conversões de clássicos brasileiros em réplicas de esportivos
 * italianos. A paleta reflete isso: preto/grafite de carroceria e asfalto,
 * vermelho racing como assinatura de marca (não decoração), e prata/alumínio
 * escovado para acabamento e texto secundário. Sem azul/laranja genérico
 * de e-commerce.
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
          950: '#08080a', // fundo base (body)
          900: '#0d0d10', // fundo de seções alternadas
          800: '#141417', // superfície de card
          700: '#1c1c21', // superfície elevada / hover de card
          600: '#26262d', // bordas e divisores sutis
          500: '#3a3a43', // bordas em destaque / inputs focados
        },
        // Vermelho racing italiano — cor de marca e único acento "quente".
        // Usar com moderação: CTAs primários, badges, hover states, detalhes de traço.
        racing: {
          DEFAULT: '#e2001a',
          600: '#c80017', // hover/active de botões primários
          700: '#a30013', // pressed
          400: '#ff4d5e', // realces claros sobre fundo escuro (links, ícones ativos)
          50: 'rgba(226, 0, 26, 0.08)', // fundo tênue para badges/alertas sutis
        },
        // Prata/alumínio escovado — texto secundário, ícones, linhas finas,
        // remetendo a acabamento metálico de peças.
        silver: {
          DEFAULT: '#c7cad1',
          400: '#9a9ea8', // texto terciário / legendas
          300: '#e4e6ea', // texto secundário sobre fundo escuro
        },
      },
      fontFamily: {
        // Display: condensada/técnica, para títulos, labels de UI e números (preço).
        display: ['"Rajdhani"', 'sans-serif'],
        // Body: legível, neutra, para parágrafos e textos longos.
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
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
          'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(226,0,26,0.15), transparent 70%)',
      },
      boxShadow: {
        // Sombra vermelha sutil para CTAs primários em hover — remete a luz de freio.
        glow: '0 0 0 1px rgba(226,0,26,0.4), 0 8px 24px -8px rgba(226,0,26,0.5)',
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
