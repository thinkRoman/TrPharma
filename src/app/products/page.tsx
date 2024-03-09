import { Metadata } from 'next';

import { Products } from '@/components/Products';

export const metadata: Metadata = {
  title: 'Products',
};

export default function ProductsPage() {
  return <Products />;
}
