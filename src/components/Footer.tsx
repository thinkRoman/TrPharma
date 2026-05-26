'use client';

import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  products: [
    { label: 'All Products', href: '/#products' },
    { label: 'Bone Health', href: '/#products' },
    { label: 'Vitamin D', href: '/#products' },
    { label: 'Nutraceuticals', href: '/#products' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Sunshine Campaign', href: '/about#sunshine' },
    { label: 'Health Articles', href: 'https://orzuv.thinkroman.com' }
  ],
  support: [
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'For Healthcare Professionals', href: '#' },
    { label: 'For Distributors', href: 'https://pharmacy.thinkroman.com/distributor-form' },
    { label: 'FAQs', href: '/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/thinkroman/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/thinkRoman', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/trpharma187/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@ThinkRomanTV', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer id='contact' className='relative bg-primary text-primary-foreground'>
      {/* Main footer content */}
      <div className='max-w-7xl mx-auto px-8 lg:px-12 py-20'>
        <div className='grid lg:grid-cols-5 gap-16 lg:gap-12'>
          {/* Brand column */}
          <div className='lg:col-span-2 space-y-8'>
             <Link href='/' className='flex items-center gap-4 bg-[#F7F3EA] w-max rounded-md p-1'>
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={228}
              height={228}
            />
          </Link>

            <p className='text-primary-foreground/60 leading-relaxed max-w-sm'>
              A division of ThinkRoman Ventures dedicated to delivering quality
              pharmaceutical and nutraceutical products.
            </p>

            {/* Contact info */}
            <div className='space-y-4 pt-4'>
              <div className='flex items-center gap-4 text-primary-foreground/60'>
                <Mail className='w-4 h-4 text-accent' />
                <span>trpharma@thinkroman.com</span>
              </div>
              <div className='flex items-center gap-4 text-primary-foreground/60'>
                <Phone className='w-4 h-4 text-accent' />
                <span>+91 81691 97853</span>
              </div>
              <div className='flex items-start gap-4 text-primary-foreground/60'>
                <MapPin className='w-4 h-4 text-accent mt-1' />
                <span>ThinkRoman Ventures LLP, India</span>
              </div>
            </div>

            {/* Social links */}
            <div className='flex items-center gap-3 pt-4'>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target='_blank'
                  className='p-3 bg-primary-foreground/5 text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/10 transition-colors'
                >
                  <Icon className='w-5 h-5' />
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className='lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <h4 className='font-medium text-primary-foreground text-sm tracking-widest uppercase mb-6'>
                Products
              </h4>
              <ul className='space-y-4'>
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-primary-foreground/50 hover:text-accent transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='font-medium text-primary-foreground text-sm tracking-widest uppercase mb-6'>
                Company
              </h4>
              <ul className='space-y-4'>
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-primary-foreground/50 hover:text-accent transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='font-medium text-primary-foreground text-sm tracking-widest uppercase mb-6'>
                Support
              </h4>
              <ul className='space-y-4'>
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-primary-foreground/50 hover:text-accent transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='font-medium text-primary-foreground text-sm tracking-widest uppercase mb-6'>
                Legal
              </h4>
              <ul className='space-y-4'>
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-primary-foreground/50 hover:text-accent transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-primary-foreground/10'>
        <div className='max-w-7xl mx-auto px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-primary-foreground/40'>
            © {new Date().getFullYear()} ThinkRoman Ventures LLP. All rights
            reserved. For educational purposes only.
          </p>
          <div className='flex items-center gap-2 text-sm text-primary-foreground/40'>
            <span>Part of</span>
            <Link
              href='https://thinkroman.com'
              target='_blank'
              className='text-accent font-medium hover:underline'
            >
              ThinkRoman Ventures LLP
            </Link> 
          </div>
        </div>
      </div>
    </footer>
  );
}
