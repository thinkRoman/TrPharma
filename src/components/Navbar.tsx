'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/products', label: 'Products' },
  { href: '/#therapeutic-areas', label: 'Therapeutic areas' },
  { href: '/about', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className='site-header'>
      <a href='#main-content' className='skip-link'>Skip to content</a>
      <div className='shell header-inner'>
        <Link href='/' aria-label='TrPharma home' onClick={() => setOpen(false)} className='brand'>
          <Image src='/images/logo.png' alt='TrPharma' width={398} height={138} priority />
          <span>FROM THINKROMAN</span>
        </Link>
        <nav aria-label='Main navigation' className='desktop-nav'>
          {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}
        </nav>
        <Link href='/contact-us#partners' className='button button-outline header-cta'>Partner with us <ArrowUpRight size={16} /></Link>
        <button ref={toggle} type='button' className='menu-toggle' aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls='mobile-navigation' onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id='mobile-navigation' aria-label='Mobile navigation' className='mobile-nav shell'>
        {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16} /></Link>)}
        <Link href='/contact-us#partners' className='button' onClick={() => setOpen(false)}>Partner with us <ArrowUpRight size={16} /></Link>
      </nav>}
    </header>
  );
}
