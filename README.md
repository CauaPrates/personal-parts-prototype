# Personal Parts — Protótipo do novo site

Protótipo de alta fidelidade, 100% front-end e com dados mockados, do novo site
institucional/e-commerce da Personal Parts (acessórios aerodinâmicos automotivos
personalizados desde 1997). Serve como peça de venda para aprovação de direção
visual e de UX antes de evoluir para uma versão funcional com backend real.

**Não há backend, autenticação, carrinho, pagamento ou envio real de formulário.**
Tudo roda em memória com dados mockados.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. Build de produção com `npm run build` (gera `dist/`),
preview local com `npm run preview`.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS 3 (`tailwind.config.js` documenta o design system: cores, tipografia, sombras)
- React Router (rotas client-side, ver `src/App.tsx`)
- Framer Motion (microinterações e transições)
- lucide-react (ícones)

## Onde estão os dados mockados

Tudo em `src/mocks/`, fácil de editar ou expandir:

- `categorias.ts` — as 7 frentes de produto/serviço (inclui "Pintura Personalizada",
  que é um serviço sem catálogo próprio)
- `produtos.ts` — 20 produtos com marca/modelo compatível, material, preço, fabricação
- `trabalhos.ts` — portfólio de carros personalizados (antes/depois)
- `depoimentos.ts` — avaliações de clientes
- `veiculos.ts` — marcas e modelos usados na busca por veículo e nos filtros

Os tipos de cada entidade estão em `src/types/index.ts`.

## Identidade visual

A marca (logo, "Desde 1997", tricolor italiano) foi recriada a partir do site
atual (`personalparts.com.br`), não inventada do zero:

- `src/components/ui/BrandMark.tsx` — recriação vetorial do símbolo real do logo
  (carro cromado + brush-stroke da bandeira da Itália, em homenagem ao fundador
  italiano da empresa).
- `src/components/ui/SinceBadge.tsx` — reinterpretação da fita "SINCE 1997" do
  site original como um emblema metálico estampado.
- `src/components/ui/TricolorAccent.tsx` — friso verde/branco/vermelho, usado
  com moderação (header, rodapé) como detalhe assinatura da marca.
- `public/brand/selo-marca-brasil.png` — selo real do "Troféu Marca Brasil"
  baixado do site atual da empresa (não é um badge de prova social genérico).

## Imagens: por que não há fotos reais

Como é um protótipo sem assets de produção, as fotos de peças/carros foram
substituídas por um gerador de placeholder de marca:
`src/components/ui/PartVisual.tsx`. Ele recebe um "seed" (string) e desenha um
gradiente grafite + textura de carbono + silhueta de carro, de forma
determinística — sem depender de imagens externas.

**Para trocar por fotos reais depois:** troque `<PartVisual seed={...} />` por
`<img src={...} />` apontando para as URLs finais em `imagens` (produtos),
`imagemAntes`/`imagemDepois` (trabalhos) etc. Os componentes que os consomem
(`ProductCard`, `ProductGallery`, `WorkCard`, `BeforeAfterSlider`, `Hero`) não
precisam mudar de estrutura, só a fonte da imagem.

## Onde está o "estado" do protótipo

- **Lista de interesse (wishlist):** `src/context/WishlistContext.tsx`, em
  memória (perde ao recarregar a página — não há persistência, por design).
- **Toasts de feedback:** `src/context/ToastContext.tsx`.
- **Filtros do catálogo:** estado local em `src/pages/Catalogo.tsx`, sincronizado
  com a query string (`?categoria=&marca=&modelo=`) para permitir deep-links
  a partir do header, home e footer.

## Estrutura de páginas

| Rota | Página |
|---|---|
| `/` | Home |
| `/produtos` | Catálogo com filtros (categoria, marca, material, preço) |
| `/produtos/:slug` | Detalhe do produto |
| `/trabalhos` | Portfólio de trabalhos realizados |
| `/sobre` | História da empresa desde 1997 |
| `/revenda` | Página B2B para lojistas |
| `/contato` | Formulário de contato/orçamento |

## Design system

O arquivo [`tailwind.config.js`](./tailwind.config.js) é comentado e é a fonte
da verdade dos tokens visuais (cores `ink`/`racing`/`silver`, tipografia
`display`/`sans`, sombras, texturas). Ao evoluir para produção, migre esses
valores 1:1 para o design system definitivo.

## Próximos passos (fora de escopo deste protótipo)

Após aprovação do cliente: integração com backend/CMS real, autenticação,
catálogo dinâmico, checkout/pagamento, envio real de formulário e painel
administrativo.
