'use client';

import { Quote } from 'lucide-react';
import Image from 'next/image';

export function CEO() {
  return (
    <section className='relative py-16 lg:py-24 bg-card overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8 lg:px-12'>
        {/* Section header - Editorial style */}
        <div className='max-w-3xl mb-12'>
          <p className='editorial-subheading mb-4'>Leadership</p>
          <h2 className='editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6'>
            Message from
            <br />
            <span className='text-accent'>the CEO</span>
          </h2>
          <div className='w-16 h-0.5 bg-accent' />
        </div>

        <div className='grid lg:grid-cols-5 gap-12 lg:gap-16 items-start'>
          {/* Left - Profile */}
          <div className='lg:col-span-2'>
            <div className='cinematic-card p-10 rounded-sm relative overflow-hidden'>
              <div className='absolute top-0 left-0 right-0 h-0.5 gold-gradient' />

              {/* Profile image placeholder */}
              <div className='w-40 h-40 mx-auto bg-muted flex items-center justify-center mb-8'>
                <Image
                  src={'/images/ceo.jpeg'}
                  alt='Logo'
                  width={1000}
                  height={1000}
                  priority
                  className=' object-cover rounded'
                />
              </div>

              <div className='text-center pt-2'>
                <h3 className='text-2xl font-medium text-foreground tracking-tight'>
                  Dr. Ashwani Dhar
                </h3>
                <p className='text-accent font-medium mt-1'>
                  MD, Founder &amp; CEO
                </p>
                <p className='text-sm text-muted-foreground mt-1'>
                  ThinkRoman Ventures
                </p>
              </div>

              {/* Credentials */}
              <div className='mt-8 pt-8 border-t border-border'>
                <p className='text-xs text-muted-foreground tracking-widest uppercase mb-4 text-center'>
                  Expertise
                </p>
                <div className='flex flex-wrap justify-center gap-2'>
                  {[
                    'Physician',
                    'Healthcare Innovation',
                    'Pharma Leadership',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className='text-xs bg-muted px-3 py-1.5 text-muted-foreground'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Message */}
          <div className='lg:col-span-3 space-y-8'>
            {/* Quick Summary */}
            <div className='quick-summary'>
              <p className='text-xs font-semibold text-accent mb-2 tracking-widest uppercase'>
                CEO Vision Summary
              </p>
              <p className='text-foreground/80 leading-relaxed text-lg'>
                Dr. Ashwani Dhar, a practicing physician and entrepreneur,
                founded TrPharma with a mission to deliver quality
                pharmaceutical products that support healthcare professionals in
                providing accessible and effective patient care across India.
              </p>
            </div>

            {/* Quote */}
            <div className='relative pl-8 border-l-2 border-accent'>
              <Quote className='absolute -top-2 -left-4 w-8 h-8 text-accent/20' />
              <div className='space-y-6 text-muted-foreground leading-relaxed text-lg'>
                <p>
                  As a physician and the founder of ThinkRoman, my vision has
                  always been to ensure patients receive the highest quality care
                  through accessible and effective treatments.
                </p>
                <p>
                  TrPharma, a division of ThinkRoman, is dedicated to delivering
                  reliable pharmaceutical products that support healthcare
                  professionals in providing the best outcomes for their
                  patients.
                </p>
                <p>
                  Our goal is to meet a wide range of healthcare needs, ensuring
                  the right solutions are available for those who need them most.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className='pt-8 border-t border-border flex items-center justify-between'>
              <div>
                <p className='text-xl font-medium text-foreground tracking-tight'>
                  Dr. Ashwani Dhar
                </p>
                <p className='text-sm text-muted-foreground'>
                  CEO, ThinkRoman Ventures
                </p>
              </div>
              <div className='text-right'>
                <p className='text-xs text-muted-foreground tracking-widest uppercase'>
                  Medical Review
                </p>
                <p className='text-sm text-muted-foreground'>May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
