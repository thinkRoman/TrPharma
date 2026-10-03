import { Metadata } from 'next';

import { Products } from '@/components/Products';

import { getProducts } from '@/action/products';

export const metadata: Metadata = {
  title: 'TrPharma | Care, in every formulation',
  description:
    'Explore pharmaceuticals and nutraceuticals from TrPharma, a division of ThinkRoman Ventures. Product information, therapeutic areas, and partnership enquiries.',
};
export default async function CatalogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const products = await getProducts();
  return (
    <Products
      key={searchParams.category || 'all'}
      products={products}
      initialCategory={searchParams.category}
    />
  );
}
