import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";

const cards = [
  {
    img: '/images/med-1.jpeg'
  },
];

export function Gallery() {
  return (
    <Container className="py-12">
      <div className="flex justify-center items-center flex-wrap gap-6">
        {cards.map((card, index) => (
          <Link
            href='#'
            key={index}
            className='group z-1 flex cursor-pointer max-w-lg flex-col bg-gray-200 transition-all hover:bg-gray-100'
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

            {/* <div className='flex flex-shrink-0 items-end px-8 pb-8 pt-6'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-full bg-gray-500 p-2 group-hover:bg-gray-900'>
                <RiArrowRightLine className='h-6 w-6 text-white' />
              </div>
              <span className='text-lg font-medium'>Learn more about {name}</span>
            </div>
          </div> */}
          </Link>
        ))}
      </div>
    </Container>
  )
}