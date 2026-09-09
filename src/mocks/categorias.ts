import type { Categoria } from '../types';

export const categorias: Categoria[] = [
  {
    id: 'cat-spoilers',
    nome: 'Spoilers',
    slug: 'spoilers',
    imagem: 'spoiler',
    descricao: 'Aerofólios traseiros que reduzem sustentação e assinam a silhueta do carro.',
  },
  {
    id: 'cat-para-choques',
    nome: 'Para-choques',
    slug: 'para-choques',
    imagem: 'parachoque',
    descricao: 'Para-choques esportivos com entradas de ar funcionais e encaixe de fábrica.',
  },
  {
    id: 'cat-aerofolios',
    nome: 'Aerofólios',
    slug: 'aerofolios',
    imagem: 'aerofolio',
    descricao: 'Asas e difusores para maior pressão aerodinâmica em alta velocidade.',
  },
  {
    id: 'cat-retrovisores',
    nome: 'Retrovisores',
    slug: 'retrovisores',
    imagem: 'retrovisor',
    descricao: 'Retrovisores esportivos em fibra, réplicas de linhas de competição.',
  },
  {
    id: 'cat-scoopers',
    nome: 'Scoopers',
    slug: 'scoopers',
    imagem: 'scooper',
    descricao: 'Tomadas de ar de capô e teto para arrefecimento e presença visual.',
  },
  {
    id: 'cat-kits',
    nome: 'Kits Aerodinâmicos',
    slug: 'kits-aerodinamicos',
    imagem: 'kit',
    descricao: 'Conjuntos completos: para-choques, saias laterais e spoiler combinados.',
  },
  {
    id: 'cat-pintura',
    nome: 'Pintura Personalizada',
    slug: 'pintura-personalizada',
    imagem: 'pintura',
    descricao: 'Pintura sob medida para igualar cor e acabamento das peças ao seu carro.',
    servico: true,
  },
];
