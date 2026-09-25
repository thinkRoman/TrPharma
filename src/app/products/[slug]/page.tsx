import { PortableText } from '@portabletext/react';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Product, productCategory } from '@/lib/products';
import { generateSEO } from '@/lib/seo';

import { ProductSchema } from '@/components/Schema';

import { getProducts } from '@/action/products';

interface PageProps { params: { slug: string } }
export async function generateStaticParams() {
  const products: Product[] = await getProducts();
  return products.map(product => ({ slug: product.slug }));
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const products: Product[] = await getProducts();
  const product = products.find(item => item.slug === params.slug);
  if (!product) return {};
  return generateSEO({ title: `${product.heading} | ThinkRoman Pharma`, description: product.desc || product.tagline, path: `/products/${product.slug}`, image: product.img || '/images/og.png' });
}
export default async function ProductPage({ params }: PageProps) {
  const products: Product[] = await getProducts();
  const product = products.find(item => item.slug === params.slug);
  if (!product) notFound();
  const category = productCategory(product);
  return <main id='main-content' className='shell detail-page'>
    <ProductSchema product={{ name: product.heading, description: product.desc || product.tagline, image: product.img }} />
    <nav aria-label='Breadcrumb' className='breadcrumb'><Link href='/products'>Products</Link><span aria-hidden='true'>/</span><Link href={`/products?category=${encodeURIComponent(category)}`}>{category}</Link><span aria-hidden='true'>/</span><span aria-current='page'>{product.heading}</span></nav>
    <div className='detail-layout'><div className='detail-image'>{product.img ? <Image src={product.img} alt={product.heading} width={600} height={600} sizes='(max-width: 700px) 90vw, 40vw' priority /> : <p>Product image coming soon</p>}</div>
    <div className='detail-summary'><p className='eyebrow'>{category.toUpperCase()}</p><h1>{product.heading}</h1><p className='intro'>{product.desc || product.tagline}</p><dl className='detail-facts'><div><dt>Therapeutic area</dt><dd>{category}</dd></div>{product.ingredients?.length ? <div><dt>Composition</dt><dd>{product.ingredients.join(' · ')}</dd></div> : null}<div><dt>Brand</dt><dd>TrPharma · ThinkRoman Ventures</dd></div></dl><a className='text-link' href='#product-information'>Read product information ↓</a><br /><Link className='button button-outline' href='/contact-us#professionals'>Enquire about this product <ArrowUpRight size={18} /></Link></div></div>
    <section id='product-information' className='detail-info'><aside className='detail-sidebar'><p className='eyebrow'>KNOW YOUR PRODUCT</p><h2>Product<br />information</h2><p>For reference and educational purposes. Consult your healthcare professional for advice about medicines.</p><Link className='text-link' href='/products'>Back to all products ↗</Link></aside><div className='detail-prose'>{product.longDesc?.length ? <PortableText value={product.longDesc} /> : <p>{product.desc}</p>}</div></section>
  </main>;
}
