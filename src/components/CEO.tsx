import Image from 'next/image';

import { Container } from '@/components/Container';

export function CEO() {
  return (
    <div id='ceo'>
      <Container className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h3 className='text-2xl uppercase font-semibold text-center mb-6'>
          Message from the CEO
        </h3>

        <Image
          src='/images/ceo.jpeg'
          alt='CEO'
          width={100}
          height={100}
          className='w-64 h-auto object-cover mx-auto rounded shadow-lg'
        />

        <div className='max-w-3xl text-lg mx-auto mt-6'>
          <p className='text-gray-600'>
            As a physician and the founder of ThinkRoman, my vision has always
            been to ensure patients receive the highest quality care through
            accessible and effective treatments. TrPharma, a division of
            ThinkRoman, is dedicated to delivering reliable pharmaceutical
            products that support healthcare professionals in providing the best
            outcomes for their patients. Our goal is to meet a wide range of
            healthcare needs, ensuring the right solutions are available for
            those who need them most.
          </p>

          <p className='font-medium mt-1'>Dr. Ashwani Dhar, CEO</p>
        </div>
      </Container>
    </div>
  );
}
