import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Container } from '@/components/Container';

const cards = [
  {
    img: '/images/medicine-1.jpeg',
    heading: 'KashMOX 625: The Double Defense.',
    desc: 'Amoxicillin meets Clavulanic Acid to tackle infections head-on. Quick. Effective. Resilient. Get back to full strength faster.',
    tagline: 'KashMOX 625 — Guard Your Health.',
  },
  {
    img: '/images/medicine-2.jpeg',
    heading: "Live life to the fullest—don't let pain hold you back.",
    desc: 'With One87 Plus embrace an active lifestyle free from discomfort, - talk to your healthcare provider and step into a vibrant, pain-free life today.',
  },
  {
    img: '/images/medicine-3.jpeg',
    heading: 'Sohar-D 60k: Essential Wellness, Effortlessly Delivered.',
    desc: 'Packed with 60,000 IU of Vitamin D3, Sohar-D 60k sachets provide the boost you need for bone health and immune support in a single, convenient dose. Trust in Sohar-D to fortify your vitality with ease.',
    tagline: 'Your health, our science: Sohar-D 60k.',
  },
];

export function Products() {
  return (
    <Container className='py-12 px-8'>
      <div className='flex flex-col items-center gap-6'>
        {cards.map((card, index) => (
          <div key={index}>
            <Link
              href='#'
              className='group z-1 block md:hidden cursor-pointer max-w-sm bg-white transition-all hover:bg-gray-100'
            >
              <div className='overflow-hidden flex justify-center bg-white group-hover:bg-white'>
                <Image
                  src={card.img}
                  alt='Medicine Image'
                  width={2669}
                  height={1782}
                  loading='lazy'
                  className='transition-transform group-hover:scale-105 h-60 w-auto'
                />
              </div>

              <div className='flex flex-shrink-0 items-end px-4 pb-8 pt-6'>
                <div className='flex flex-col gap-4'>
                  <span className='text-lg text-center font-medium'>
                    {card.heading}
                  </span>
                  <span className=''>{card.desc}</span>
                  <span className='text-left'>{card.tagline}</span>
                </div>
              </div>
            </Link>

            <Link
              href='#'
              className={cn(
                'group z-1 hidden h-[450px] md:flex justify-between items-center cursor-pointer w-full bg-white transition-all hover:bg-gray-100',
                index & 1 && 'flex-row-reverse'
              )}
            >
              <div className='overflow-hidden w-2/3 h-full flex justify-center items-center bg-white group-hover:bg-white'>
                <Image
                  src={card.img}
                  alt='Medicine Image'
                  width={2669}
                  height={1782}
                  loading='lazy'
                  className='transition-transform group-hover:scale-105 object-center h-full w-auto'
                />
              </div>

              <div className='flex items-end px-8 w-1/3'>
                <div className='flex flex-col gap-4'>
                  <span className='text-lg text-center font-medium'>
                    {card.heading}
                  </span>
                  <span className=''>{card.desc}</span>
                  <span className='text-left'>{card.tagline}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
