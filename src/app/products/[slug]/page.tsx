import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { getProducts } from '@/action/products';
import { generateSEO } from '@/lib/seo';
import { ProductSchema } from '@/components/Schema';
import { PortableText } from '@portabletext/react';

interface PageProps {
  params: {
    slug: string;
  };
}

// Ensure the page is statically generated where possible
export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product: any) => ({
      slug: product.slug,
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const products = await getProducts();
  const product = products.find((p: any) => p.slug === params.slug);

  if (!product) {
    return {};
  }

  return generateSEO({
    title: `${product.heading} | ThinkRoman Pharma`,
    description: product.desc || product.tagline || `Learn more about ${product.heading}`,
    path: `/products/${product.slug}`,
    image: product.img || '/images/og-image.jpg',
  });
}



export default async function ProductPage({ params }: PageProps) {
  const products = await getProducts();
  const product = products.find((p: any) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductSchema
        product={{
          name: product.heading,
          description: product.desc || product.tagline,
          image: product.img,
        }}
      />
      
      <main className='min-h-screen bg-background pb-12 sm:pb-16 lg:pb-20'>

        <article className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-24'>
          <Link 
            href="/products" 
            className="inline-flex pt-14 md:pt-0 items-center text-base sm:text-lg lg:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
          
          <div className='grid lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-20 items-start'>
            {/* Product Image Gallery (Premium styling) */}
            <div className='lg:sticky lg:top-24'>
                
                {product.img ? (
                  <Image
                    src={product.img}
                    alt={product.heading}
                    width={600}
                    height={600}
                    priority
                    className='w-full max-w-xs sm:max-w-md mx-auto h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out'
                  />
                ) : (
                  <div className='w-full aspect-square flex items-center justify-center bg-muted rounded-2xl'>
                    <span className='text-muted-foreground text-base sm:text-xl font-medium'>No Image Available</span>
                  </div>
                )}
              </div>

            {/* Product Details */}
            <div className='space-y-6 sm:space-y-8 lg:space-y-10 lg:col-span-2'>
              <div className='space-y-3 sm:space-y-4'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight tracking-tight'>
                  {product.heading}
                </h1>
                {product.tagline && (
                  <p className='text-lg sm:text-xl text-muted-foreground font-light leading-relaxed'>
                    {product.tagline}
                  </p>
                )}
              </div>

              {/* Long Description / Details */}
              <div className='prose prose-base sm:prose-lg dark:prose-invert max-w-none'>
                <h2 className='text-xl sm:text-2xl font-serif font-semibold text-foreground mb-4 sm:mb-6'>Product Information</h2>
                {product.longDesc ? (
                  <PortableText value={product.longDesc} />
                ) : (
                  <p className='text-muted-foreground leading-relaxed text-base sm:text-lg'>{product.desc}</p>
                )}
              </div>

            </div>
          </div>
        </article>
      </main>
    </>
  );
}
