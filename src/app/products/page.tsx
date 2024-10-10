import { Metadata } from 'next';

import { Products } from '@/components/Products';

export const metadata: Metadata = {
  title: 'Products',
};

export const revalidate = 7200; // 2 hours

async function getProducts() {
  const res = await fetch('https://pharma247.thinkroman.com/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: process.env.PHARMA_API_SECRET as string,
    },
  }).then((res) => res.json());
  return res.data;
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <Products products={products} />;
}
