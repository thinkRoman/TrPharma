import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Container';

const cards = [
  {
    img: '/images/med-1.png',
    heading: 'KashMOX 625: The Double Defense.',
    desc: 'Amoxicillin meets Clavulanic Acid to tackle infections head-on. Quick. Effective. Resilient. Get back to full strength faster.',
    tagline: 'KashMOX 625 — Guard Your Health.',
  },
  {
    img: '/images/med-2.jpeg',
    heading: "Live life to the fullest—don't let pain hold you back.",
    desc: 'With One87 Plus embrace an active lifestyle free from discomfort, - talk to your healthcare provider and step into a vibrant, pain-free life today.',
  },
  {
    img: '/images/med-3.png',
    heading: 'Sohar-D 60k: Essential Wellness, Effortlessly Delivered.',
    desc: 'Packed with 60,000 IU of Vitamin D3, Sohar-D 60k sachets provide the boost you need for bone health and immune support in a single, convenient dose. Trust in Sohar-D to fortify your vitality with ease.',
    tagline: 'Your health, our science: Sohar-D 60k.',
  },
];

export function Products() {
  return (
    <Container className='py-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {cards.map((card, index) => (
          <Link
            href='#'
            key={index}
            className='group z-1 cursor-pointer max-w-sm bg-gray-200 transition-all hover:bg-gray-100'
          >
            {/* <div className='flex-1 space-y-6 px-6 pb-6 pt-8'>
            <h3 className='animated-underline group-hover:animated-underline-start text-center font-heading text-3xl font-normal '>
              {name}
            </h3>
          </div> */}

            <div className='aspect-video overflow-hidden'>
              <Image
                src={card.img}
                alt='Medicine Image'
                width={2669}
                height={1782}
                loading='lazy'
                className='transition-transform group-hover:scale-105'
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
        ))}
      </div>
    </Container>
  );
}
