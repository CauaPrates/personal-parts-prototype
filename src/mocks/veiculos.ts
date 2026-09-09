import type { Marca } from '../types';

export const marcas: Marca[] = [
  { nome: 'Audi', modelos: ['A3', 'A4', 'A5', 'TT'] },
  { nome: 'BMW', modelos: ['Série 1', 'Série 3', 'M3', 'M5'] },
  { nome: 'Volkswagen', modelos: ['Golf', 'Fusca', 'Gol', 'Polo'] },
  { nome: 'Fiat', modelos: ['Uno', 'Punto', '500'] },
  { nome: 'Honda', modelos: ['Civic', 'Fit'] },
  { nome: 'Toyota', modelos: ['Corolla', 'Hilux'] },
  { nome: 'Hyundai', modelos: ['HB20', 'Elantra'] },
  { nome: 'Chevrolet', modelos: ['Opala', 'Chevette'] },
];

export const listaMarcas = marcas.map((m) => m.nome);

export function modelosDaMarca(marca: string): string[] {
  return marcas.find((m) => m.nome === marca)?.modelos ?? [];
}
