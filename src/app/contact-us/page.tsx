import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className='flex h-[80vh] flex-col items-center justify-center'>
      <h1 className='mb-4 text-2xl font-bold text-gray-800 sm:text-4xl'>
        CONTACT US
      </h1>
      <div className='mb-4 text-sm text-blue-500 sm:text-base'>
        <Link
          target='_blank'
          href='https://thinkroman.com/'
          className='text-blue-500 hover:text-blue-700'
        >
          www.thinkroman.com
        </Link>
      </div>
      <div className='mb-4 text-sm text-gray-600 sm:text-base'>
        Email:{' '}
        <Link
          href='mailto:contact@thinkroman.com'
          className='text-blue-500 hover:text-blue-700'
        >
          contact@thinkroman.com
        </Link>
      </div>
      <p className='mb-4 text-sm text-gray-600 sm:text-base'>
        Phone:{' '}
        <span className='text-blue-500 hover:text-blue-700'>
          +91 8169197853
        </span>
      </p>
    </div>
  );
};

export default Contact;
