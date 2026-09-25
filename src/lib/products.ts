import type { PortableTextBlock } from '@portabletext/types';

export interface Product {
  id: string;
  slug: string;
  img: string;
  heading: string;
  desc: string;
  tagline: string;
  orderRank?: number;
  category?: string;
  ingredients?: string[];
  longDesc?: PortableTextBlock[];
}

export const categories = [
  'Antibiotics', 'Pain management', 'Gastric care', 'Respiratory care',
  'Vitamins & supplements', "Women’s health", 'Diabetes care', 'Cardiovascular',
];

// Preserve the existing product feed; provide navigation labels for its established range.
const categorySlugs: Record<string, string[]> = {
  Antibiotics: ['kashmox-625', 'kashfex-200', 'kashzee-500'],
  'Pain management': ['one87-plus', 'comfortide-425', 'reliefon-forte'],
  'Gastric care': ['acidblock-40', 'acidblock-d'],
  'Respiratory care': ['kashair-m'],
  'Vitamins & supplements': ['880-plus', '880-junior', 'sohar-d-60k', 'kashcal-tm-plus'],
  'Women’s health': ['280-plus', 'progestasyn-200'],
  'Diabetes care': ['tc-a1c'],
  Cardiovascular: ['suwake-40', 'zoovistat-20'],
};

export function productCategory(product: Product) {
  return Object.entries(categorySlugs).find(([, slugs]) => slugs.includes(product.slug.toLowerCase()))?.[0]
    || product.category || 'Other products';
}

export function productSummary(product: Product) {
  if (product.ingredients?.length) return product.ingredients.join(' · ');
  return product.desc;
}

export function sortProducts(products: Product[]) {
  return [...products].sort((a, b) => (a.orderRank ?? Infinity) - (b.orderRank ?? Infinity));
}
