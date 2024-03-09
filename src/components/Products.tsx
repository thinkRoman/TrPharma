import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Container';

const cards = [
  {
    img: '/images/med-1.jpeg',
    heading: "Live life to the fullest—don't let pain hold you back.",
    desc: 'With One87 Plus embrace an active lifestyle free from discomfort, - talk to your healthcare provider and step into a vibrant, pain-free life today.',
  },
];

export function Products() {
  return (
    <Container className='py-12'>
      <div className='flex justify-center items-center flex-wrap gap-6'>
        {cards.map((card, index) => (
          <Link
            href='#'
            key={index}
            className='group z-1 flex cursor-pointer max-w-md flex-col bg-gray-200 transition-all hover:bg-gray-100'
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
              <div className='flex flex-col items-center gap-4'>
                <span className='text-lg font-medium'>{card.heading}</span>
                <span className=''>{card.desc}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
