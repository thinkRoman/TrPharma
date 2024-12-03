import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Container } from '@/components/Container';
import { ProductLink } from '@/components/ProductLink';

interface Product {
  id: string;
  img: string;
  heading: string;
  desc: string;
  tagline: string;
}

export function Products({ products }: { products: Product[] }) {
  return (
    <Container className='py-12 px-8'>
      <div className='flex flex-col items-center gap-6'>
        {products.map((product, index) => (
          <div key={index} id={product.id}>
            <div className='group z-1 block md:hidden cursor-pointer max-w-sm bg-white transition-all hover:bg-gray-100'>
              <div className='overflow-hidden flex justify-center bg-white group-hover:bg-white'>
                <Image
                  src={product.img}
                  alt='Medicine Image'
                  width={2669}
                  height={1782}
                  loading='lazy'
                  className='transition-transform group-hover:scale-105 h-60 w-auto'
                />
              </div>

              <div className='flex relative flex-shrink-0 items-end px-4 pb-8 pt-6'>
                <ProductLink id={product.id} />
                <div className='flex flex-col gap-4'>
                  <span className='text-lg text-center font-medium'>
                    {product.heading}
                  </span>
                  <span className=''>{product.desc}</span>
                  <span className='text-left'>{product.tagline}</span>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'group z-1 hidden h-[450px] md:flex justify-between items-center cursor-pointer w-full bg-white transition-all hover:bg-gray-100',
                index & 1 && 'flex-row-reverse'
              )}
            >
              <div className='overflow-hidden w-2/3 h-full flex justify-center items-center bg-white group-hover:bg-white'>
                <Image
                  src={product.img}
                  alt='Medicine Image'
                  width={2669}
                  height={1782}
                  loading='lazy'
                  className='transition-transform group-hover:scale-105 object-center h-full w-auto'
                />
              </div>

              <div className='flex items-center relative h-full px-8 w-1/3'>
                <ProductLink id={product.id} />
                <div className='flex flex-col gap-4'>
                  <span className='text-lg text-center font-medium'>
                    {product.heading}
                  </span>
                  <span className=''>{product.desc}</span>
                  <span className='text-left'>{product.tagline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
