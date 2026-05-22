'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className='relative flex items-center pt-20 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-background' />

      <div className='relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-16 lg:py-20'>
        {/* Editorial Layout */}
        <div className='grid lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
          {/* Left Content - Dominant Typography */}
          <div className='lg:col-span-7 space-y-8'>
            {/* Overline - More presence */}
            <p className='text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground'>
              A Division of ThinkRoman Ventures
            </p>

            {/* Main Headline - MUCH LARGER, HEAVIER */}
            <h1 className='font-serif font-semibold tracking-[-0.03em] leading-[0.95] text-foreground'>
              <span className='block text-[clamp(3.5rem,8vw,7rem)]'>
                Your Health
              </span>
              <span className='block text-[clamp(3.5rem,8vw,7rem)] text-accent'>
                &amp; Wellness
              </span>
              <span className='block text-[clamp(3.5rem,8vw,7rem)]'>
                Partner
              </span>
            </h1>

            {/* Subheadline - Stronger */}
            <p className='text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-xl font-light'>
              Delivering quality{' '}
              <span className='text-foreground font-medium'>
                calcium supplements
              </span>
              ,{' '}
              <span className='text-foreground font-medium'>
                vitamin D formulations
              </span>
              , and{' '}
              <span className='text-foreground font-medium'>
                nutraceuticals
              </span>{' '}
              across India.
            </p>

            {/* Entity tags - Larger */}
            <div className='flex flex-wrap gap-3 pt-4'>
              {[
                'Bone Health',
                'Vitamin D',
                'Calcium',
                'Nutraceuticals',
                'Wellness',
              ].map((tag) => (
                <span
                  key={tag}
                  className='px-5 py-2.5 bg-card text-foreground rounded-full text-sm font-medium border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons - MUCH STRONGER */}
            <div className='flex flex-col sm:flex-row gap-5 pt-4'>
              <Link
                href='/products'
                className='group inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300'
              >
                Explore Products
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1.5 transition-transform' />
              </Link>
              <Link
                href='#about'
                className='inline-flex items-center justify-center gap-3 bg-transparent text-primary px-10 py-5 text-sm font-semibold tracking-[0.15em] uppercase border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300'
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content - Cinematic Product Card */}
          <div className='lg:col-span-5'>
            <div className='relative bg-card shadow-2xl shadow-primary/5 p-12'>
              {/* Gold accent line */}
              <div className='absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-[#D4AF6A]' />

              {/* Header */}
              <div className='mb-10 pb-8 border-b border-border'>
                <p className='text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3'>
                  Featured
                </p>
                <h2 className='font-serif text-4xl font-medium text-foreground'>
                  Our Products
                </h2>
              </div>

              {/* Product list */}
              <div className='space-y-4'>
                {[
                  {
                    name: 'KashCAL PLUS',
                    category: 'Bone Health',
                    desc: 'Calcium + Vitamin D3 + Methylcobalamin',
                  },
                  {
                    name: '880 PLUS',
                    category: 'Multivitamin',
                    desc: 'Complete B-Complex + Zinc + Iron',
                  },
                  {
                    name: 'Vitamin D Range',
                    category: 'Vitamin D',
                    desc: 'Cholecalciferol for bone support',
                  },
                ].map((product) => (
                  <Link
                    key={product.name}
                    href='/products'
                    className='block group p-6 bg-background hover:bg-primary transition-all duration-300'
                  >
                    <div className='flex items-start justify-between'>
                      <div className='space-y-2'>
                        <p className='text-[10px] tracking-[0.2em] uppercase text-accent font-semibold group-hover:text-accent'>
                          {product.category}
                        </p>
                        <h3 className='text-lg font-semibold text-foreground group-hover:text-primary-foreground transition-colors'>
                          {product.name}
                        </h3>
                        <p className='text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors'>
                          {product.desc}
                        </p>
                      </div>
                      <ArrowRight className='w-5 h-5 text-muted-foreground group-hover:text-primary-foreground group-hover:translate-x-1.5 transition-all flex-shrink-0 mt-1' />
                    </div>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <Link
                href='/products'
                className='mt-10 w-full inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground px-8 py-5 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300'
              >
                View All Products
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
