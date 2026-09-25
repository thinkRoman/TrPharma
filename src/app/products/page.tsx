import { Metadata } from 'next';

import { Products } from '@/components/Products';

import { getProducts } from '@/action/products';

export const metadata: Metadata = { title: 'Product catalog', description: 'Explore TrPharma pharmaceuticals and nutraceuticals by name, ingredient, and therapeutic area.' };
export default async function CatalogPage({ searchParams }: { searchParams: { category?: string } }) {
  const products = await getProducts();
  return <Products key={searchParams.category || 'all'} products={products} initialCategory={searchParams.category} />;
}
