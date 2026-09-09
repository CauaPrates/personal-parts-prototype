export type Categoria = {
  id: string;
  nome: string;
  slug: string;
  imagem: string;
  descricao: string;
  servico?: boolean; // true para categorias sem catálogo de produtos (ex: pintura personalizada)
};

export type Material = 'Fiberglass' | 'PU' | 'ABS';

export type Fabricacao = 'Pronta entrega' | 'Sob encomenda';

export type Produto = {
  id: string;
  nome: string;
  slug: string;
  categoriaId: string;
  marcasCompativeis: string[];
  modelosCompativeis: string[];
  material: Material;
  descricao: string;
  descricaoTecnica: string;
  precoMockado: number;
  imagens: string[];
  destaque?: boolean;
  fabricacao: Fabricacao;
  prazoDias?: number;
};

export type TrabalhoRealizado = {
  id: string;
  titulo: string;
  marca: string;
  modelo: string;
  ano: number;
  imagemAntes?: string;
  imagemDepois: string;
  categoriaIds: string[];
};

export type Depoimento = {
  id: string;
  nome: string;
  carro: string;
  texto: string;
  nota: number;
};

export type Marca = {
  nome: string;
  modelos: string[];
};
