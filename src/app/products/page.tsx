import { Metadata } from 'next';

import { Products } from '@/components/Products';

import { getProducts } from '@/action/products';

export const metadata: Metadata = {
  title: 'Products',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return <Products products={products} />;
}
