import type { FC, SVGProps } from 'react';
import {
  SpoilerIcon,
  ParachoqueIcon,
  AerofolioIcon,
  RetrovisorIcon,
  ScooperIcon,
  KitIcon,
  PinturaIcon,
} from '../components/ui/PartIcons';

export type PartIconComponent = FC<SVGProps<SVGSVGElement>>;

export const categoryIcons: Record<string, PartIconComponent> = {
  spoilers: SpoilerIcon,
  'para-choques': ParachoqueIcon,
  aerofolios: AerofolioIcon,
  retrovisores: RetrovisorIcon,
  scoopers: ScooperIcon,
  'kits-aerodinamicos': KitIcon,
  'pintura-personalizada': PinturaIcon,
};

export function iconForCategorySlug(slug: string): PartIconComponent {
  return categoryIcons[slug] ?? KitIcon;
}
