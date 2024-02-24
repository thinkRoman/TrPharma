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
            width={2830}
            height={1939}
          />
        </div>
        <div className='absolute inset-0 bg-black/60 mix-blend-multiply' />

        <Container className='relative flex h-full flex-col justify-between items-start md:items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-16 lg:py-32'>
          <h1 className='font-canela space-y-2 text-5xl font-light tracking-wide text-[rgb(243,244,244)] sm:text-5xl md:space-y-3 lg:text-[4rem]'>
            <span className='block'>Your health and wellness partner</span>
          </h1>
          <Link href='mailto:admin@thinkroman.com' target='_blank' className='inline-flex justify-center font-primary tracking-normal bg-white text-black py-2 px-4 text-base md:text-xl font-medium rounded-sm hover:bg-gray-100'>
            Contact Us
          </Link>
        </Container>
      </div>
    </div>
  );
}
