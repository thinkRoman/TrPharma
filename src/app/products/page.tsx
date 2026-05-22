import { Metadata } from 'next';

import { Products } from '@/components/Products';

import { getProducts } from '@/action/products';

export const metadata: Metadata = {
  title: 'Products | TrPharma Pharmaceutical Catalog',
  description:
    'Browse TrPharma pharmaceutical products across antibiotics, pain management, gastric care, vitamins & supplements, women\'s health, diabetes care, and cardiovascular medicines. Quality formulations for Indian healthcare.',
  keywords: [
    'TrPharma products',
    'pharmaceutical catalog',
    'KashCAL Plus',
    'Sohar-D 60K',
    'antibiotics',
    'pain management',
    'vitamin D supplements',
    'calcium supplements',
    'nutraceuticals',
  ],
};

export default async function ProductsPage() {
  const products = await getProducts();
  return <Products products={products} />;
}
