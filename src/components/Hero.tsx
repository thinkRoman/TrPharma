import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Container } from '@/components/Container';

import HERO_BACKGROUND_IMAGE from '~/images/hero-img.jpg';

export function Hero() {
  return (
    <div id='home' className=''>
      <div className='relative isolate min-h-[300px] items-center shadow-xl sm:overflow-hidden md:min-h-[450px]'>
        <div className='absolute inset-0'>
          <Image
            className='h-full w-full object-cover'
            src={HERO_BACKGROUND_IMAGE}
            alt='ThinkRoman Care'
            priority
            width={2830}
            height={1939}
          />
        </div>
        <div className='absolute inset-0 bg-black/60 mix-blend-multiply' />

        <Container className='absolute w-full bottom-4'>
          <div className='relative flex h-full flex-col justify-between items-start sm:items-center px-4 py-6 sm:px-6 sm:py-10 lg:px-16 lg:py-16'>
            <h1 className='my-0 font-canela space-y-2 text-xl font-light tracking-wide text-[rgb(243,244,244)] sm:text-3xl md:space-y-3 lg:text-5xl'>
              <span className='block'>Your health and wellness partner</span>
            </h1>
            <Link
              href='mailto:admin@thinkroman.com'
              target='_blank'
              className='mt-4 inline-flex justify-center font-primary tracking-normal bg-white text-black py-1 px-3 text-base md:text-lg font-medium rounded-sm hover:bg-gray-100'
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
