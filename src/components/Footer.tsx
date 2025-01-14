import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Container } from '@/components/Container';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import { WhatsAppIcon } from '@/components/icons/WhatsappIcon';

import { siteConfig } from '@/constant/config';

import Logo from '~/images/tr-pharma-new-logo.png';

export function Footer() {
  return (
    <footer className='bg-[#EBEAE7] py-4'>
      <Container>
        <nav className='flex w-full flex-col' aria-label='Footer'>
          <div className='flex w-full flex-col items-center justify-between gap-8 lg:flex-row'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src={Logo}
                alt='logo'
                width={200}
                height={100}
                className='h-16 w-auto object-cover'
              />
            </Link>

            <div className='flex flex-col items-center justify-center space-y-4 lg:items-end'>
              <div className='flex flex-wrap items-end justify-between gap-4 md:gap-8 lg:gap-4'>
                <Link href='/privacy-policy'>
                  <span className='text-xs text-gray-400 transition-all hover:text-gray-600 hover:underline hover:underline-offset-4'>
                    Privacy Policy
                  </span>
                </Link>

                <Link href='/terms-and-conditions'>
                  <span className='text-xs text-gray-400 transition-all hover:text-gray-600 hover:underline hover:underline-offset-4'>
                    Terms and Conditions
                  </span>
                </Link>

                <Link href='/contact-us'>
                  <span className='text-xs text-gray-400 transition-all hover:text-gray-600 hover:underline hover:underline-offset-4'>
                    Contact Us
                  </span>
                </Link>
              </div>

              <div className='flex justify-center gap-6'>
                <Link href={siteConfig.socialLinks.instagram} target='_blank'>
                  <InstagramIcon className='h-6 w-6' />
                </Link>

                <Link href={siteConfig.socialLinks.linkedin} target='_blank'>
                  <LinkedInIcon className='h-6 w-6' />
                </Link>

                <Link href={siteConfig.socialLinks.whatsapp} target='_blank'>
                  <WhatsAppIcon className='h-6 w-6' />
                </Link>

                <Link
                  href={siteConfig.socialLinks.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TwitterIcon className='h-6 w-6' />
                </Link>

                <Link href={siteConfig.socialLinks.facebook} target='_blank'>
                  <FacebookIcon className='h-6 w-6' />
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-center'>
            <span className='text-xs text-gray-400'>
              &copy; {new Date().getFullYear()}&nbsp;
              <Link
                href='https://thinkroman.com/'
                target='_blank'
                className='hover:text-blue-500'
              >
                ThinkRoman
              </Link>
              &nbsp;Ventures LLP
            </span>
          </div>
        </nav>
      </Container>
    </footer>
  );
}
