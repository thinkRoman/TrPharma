import Image from 'next/image';
import Link from 'next/link';

import Logo from '~/images/logo.png';

export function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center top-0 sticky py-1 px-4 md:px-8 lg:px-12 bg-[#EBEAE7]'>
        <Link href='/' className=''>
          <Image
            src={Logo}
            alt='logo'
            width={200}
            height={100}
            className='h-12 md:h-16 w-auto object-cover'
          />
        </Link>
        <div className='flex space-x-2 md:space-x-4'>
          <Link
            href='/#home'
            className='text-gray-600 hover:text-gray-800 hover:underline text-xs md:text-base'
          >
            Home
          </Link>
          <Link
            href='/products'
            className='text-gray-600 hover:text-gray-800 hover:underline text-xs md:text-base'
          >
            Products
          </Link>
          <Link
            href='/#about'
            className='text-gray-600 hover:text-gray-800 hover:underline text-xs md:text-base'
          >
            About
          </Link>
          <Link
            href='/#wellness'
            className='text-gray-600 hover:text-gray-800 hover:underline text-xs md:text-base'
          >
            Wellness
          </Link>
        </div>
      </div>
    </div>
  );
}
