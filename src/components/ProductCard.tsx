import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Product, productCategory, productSummary } from '@/lib/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className='product-card'>
      <div className='product-image'>
        {product.img ? (
          <Image
            src={product.img}
            alt={product.heading}
            width={400}
            height={300}
            sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw'
          />
        ) : (
          <span>Product image coming soon</span>
        )}
      </div>
      <div className='product-card-body'>
        <p className='product-category'>{productCategory(product)}</p>
        <h3>{product.heading}</h3>
        <p className='product-description'>{productSummary(product)}</p>
        <span className='card-action'>
          View product <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
