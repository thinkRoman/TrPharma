'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/about#ceo', label: 'CEO' },
    { href: '/about#sunshine', label: 'Sunshine Campaign' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/98 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-8 lg:px-12'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-4 bg-[#F7F3EA] rounded-md p-1'>
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={128}
              height={128}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-10'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide uppercase font-medium'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className='hidden lg:flex items-center gap-4'>
            <Link href='/#products' className='matte-button'>
              View Products
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 text-foreground'
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-card border-t border-border'>
          <div className='px-8 py-8 space-y-4'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className='block text-foreground hover:text-accent transition-colors py-3 font-medium tracking-wide uppercase text-sm border-b border-border'
              >
                {link.label}
              </Link>
            ))}
            <Link
              href='/products'
              className='block w-full text-center matte-button mt-6'
            >
              View Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
