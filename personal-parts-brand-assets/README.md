# Personal Parts — Assets separados do concept board

Extraído do concept board único que você gerou, em arquivos individuais.

## O que é real aqui

- **PNG**: recortes diretos do seu concept board original, em alta resolução — sem perda de qualidade.
- **SVG (`Logo/SVG/`)**: vetorização automática (autotrace) dos logos e símbolos. São vetores de verdade (escalam sem pixelizar, editáveis em Illustrator/Figma/Inkscape), mas foram gerados por tracing de uma imagem rasterizada por IA — não é a mesma qualidade de um designer redesenhando as curvas à mão. Para uso no site/protótipo estão ótimos; se um dia isso virar manual de marca oficial pra gráfica/adesivo grande, vale ter um designer refinando as curvas no vetor final.
- **Transparente (`Logo/Transparente/`)**: PNG com fundo removido (chroma key no preto), prontos pra usar em qualquer fundo.

## Estrutura

```
Logo/
├── direcao-01-monograma-pp-logo.png       → logo completo (símbolo + nome + tagline)
├── direcao-02-wordmark-logo.png
├── direcao-03-emblema-silhueta-logo.png
├── Direcoes/            → cada direção com a legenda "01/02/03", pra apresentação/comparação
├── Simbolo/             → só o símbolo, sem texto (bom pra favicon/redes sociais)
├── Transparente/        → PNG com fundo transparente (logo completo + símbolo, 6 arquivos)
├── SVG/                 → vetores reais (6 arquivos: 3 logos completos + 3 símbolos)
└── Variacoes-PB/        → cada direção em fundo claro e fundo escuro (6 arquivos)

Brand/
├── paleta-de-cores.png       → as 5 cores com hex
├── tipografia.png
├── icones.png                → ícones performance/qualidade/confiança/e-commerce
└── paleta-tipografia-icones.png  → os três juntos, como estava no board

Applications/
├── mockup-embalagem.png
├── mockup-site.png
└── favicons-redes-sociais.png

00-concept-board-completo.png  → o board original, inteiro, como referência
```

## Sobre as 3 direções

Ainda estão as três lado a lado (Monograma PP / Wordmark / Emblema+Silhueta) porque você não confirmou qual seguir. Recomendo escolher uma antes da próxima etapa — o ChatGPT tinha um ponto certo nisso: vender pro cliente como "testamos 3 direções e recomendamos esta" tem muito mais cara de trabalho de branding sério do que só entregar uma.

## Atualização — direção final aprovada

Depois de escolher a direção (Monograma PP), foi gerado um board final único já consolidado com o logo escolhido, aplicações completas (camiseta, boné, adesivo, embalagem, cartão, chaveiro, fachada, carro, avatar), textura, elementos gráficos e mockup de site. Esse board novo foi recortado em `Board-Final/`:

```
Board-Final/
├── 01-hero-visual-marca.png          → visual de marca com o carro (para apresentação/capa)
├── 02-logos-principais.png           → logo horizontal, vertical e símbolo (direção final)
├── 03-versoes-de-cor.png             → fundo escuro / fundo claro
├── 04-variacoes-logo.png             → branca, preta, apenas símbolo (escuro/claro)
├── 05-favicon-app-icon.png           → ícone principal, claro, redondo
├── 06-paleta-tipografia-icones.png   → paleta com hex, Montserrat, ícones (motor/câmbio/freio/suspensão/peças/qualidade)
├── 07-elementos-graficos.png         → faixa tricolor + bloco gráfico
├── 08-textura-padrao.png             → padrão de fundo + faixa texturizada
├── 09-aplicacoes-mockups.png         → grid completo: camiseta, boné, adesivo, embalagem, cartão, chaveiro, fachada, carro, avatar
├── 10-site-pagina-inicial-hero.png   → mockup da home do site
└── 11-footer-strip.png               → barra de rodapé com logo + tagline

00-concept-board-final-aprovado.png   → o board final inteiro, como referência
```

Esses PNGs são recortes diretos do board final em alta resolução (sem vetorização ainda — se precisar de SVG desses ícones/aplicações específicas, dá pra gerar do mesmo jeito que foi feito para a pasta `Logo/SVG/`).

## Próximo passo sugerido

Depois de escolher a direção, dá pra:
1. Aplicar o logo (PNG transparente ou SVG) direto no protótipo React já em andamento (header, favicon, footer).
2. Se quiser um brand guideline formal (PDF) com regras de uso, área de proteção, tamanho mínimo etc., isso eu também consigo montar a partir desses mesmos assets.
