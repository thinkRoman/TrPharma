import Image from 'next/image';
import Link from 'next/link';

import SunshineImg from '~/images/sunshine.png';

export function Sunshine() {
  return (
    <Link id='sunshine' href='https://sunshine.thinkroman.com/' target='_blank'>
      <Image
        src={SunshineImg}
        alt='Sunshine'
        width={2669}
        height={1782}
        className='mx-auto w-full'
      />
    </Link>
  );
}
