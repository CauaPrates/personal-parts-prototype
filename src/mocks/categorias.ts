import type { Categoria } from '../types';

export const categorias: Categoria[] = [
  {
    id: 'cat-spoilers',
    nome: 'Spoilers',
    slug: 'spoilers',
    imagem: 'spoiler',
    descricao: 'Aerofólios traseiros que reduzem arrasto e valorizam o visual.',
  },
  {
    id: 'cat-para-choques',
    nome: 'Para-choques',
    slug: 'para-choques',
    imagem: 'parachoque',
    descricao: 'Para-choques esportivos com entradas de ar e encaixe de fábrica.',
  },
  {
    id: 'cat-aerofolios',
    nome: 'Aerofólios',
    slug: 'aerofolios',
    imagem: 'aerofolio',
    descricao: 'Asas e difusores para mais pressão em alta velocidade.',
  },
  {
    id: 'cat-retrovisores',
    nome: 'Retrovisores',
    slug: 'retrovisores',
    imagem: 'retrovisor',
    descricao: 'Retrovisores esportivos em fibra, réplicas de competição.',
  },
  {
    id: 'cat-scoopers',
    nome: 'Scoopers',
    slug: 'scoopers',
    imagem: 'scooper',
    descricao: 'Tomadas de ar para arrefecimento e presença visual.',
  },
  {
    id: 'cat-kits',
    nome: 'Kits Aerodinâmicos',
    slug: 'kits-aerodinamicos',
    imagem: 'kit',
    descricao: 'Conjuntos completos: para-choques, saias e spoiler combinados.',
  },
  {
    id: 'cat-pintura',
    nome: 'Pintura Personalizada',
    slug: 'pintura-personalizada',
    imagem: 'pintura',
    descricao: 'Pintura sob medida para igualar cor e acabamento ao seu carro.',
    servico: true,
  },
];
