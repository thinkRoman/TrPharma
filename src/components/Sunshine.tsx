'use client';

import { ArrowRight, Heart, MapPin, Sun, Users } from 'lucide-react';
import Link from 'next/link';

export function Sunshine() {
  return (
    <section
      id='sunshine'
      className='relative py-16 lg:py-24 overflow-hidden bg-secondary text-secondary-foreground'
    >
      <div className='max-w-7xl mx-auto px-8 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left - Content */}
          <div className='space-y-10'>
            {/* Overline */}
            <div className='flex items-center gap-3'>
              <Sun className='w-5 h-5 text-accent' />
              <p className='text-xs tracking-widest uppercase text-secondary-foreground/60'>
                Featured Initiative
              </p>
            </div>

            {/* Title - Large Editorial */}
            <div>
              <h2 className='editorial-heading text-5xl md:text-6xl lg:text-7xl text-secondary-foreground leading-none'>
                The Sunshine
                <br />
                <span className='text-accent'>Campaign</span>
              </h2>
              <p className='mt-6 text-lg text-secondary-foreground/70'>
                from TrPharma, a division of ThinkRoman Ventures
              </p>
            </div>

            {/* Quick Summary for AEO */}
            <div className='bg-secondary-foreground/5 border-l-2 border-accent p-6'>
              <p className='text-xs font-semibold text-accent mb-2 tracking-widest uppercase'>
                What is the Sunshine Campaign?
              </p>
              <p className='text-secondary-foreground/80 leading-relaxed text-lg'>
                The Sunshine Campaign is TrPharma&apos;s initiative to raise
                awareness about vitamin D deficiency and provide
                accessible healthcare solutions to underserved communities.
              </p>
            </div>

            {/* FAQ Items */}
            <div className='space-y-6'>
              <div className='border-b border-secondary-foreground/10 pb-6'>
                <h3 className='text-lg font-medium text-secondary-foreground mb-3'>
                  Why is vitamin D deficiency common in India despite abundant
                  sunlight?
                </h3>
                <p className='text-secondary-foreground/60 leading-relaxed'>
                  Urban indoor lifestyles, limited sun exposure, air pollution,
                  and sedentary work environments contribute to lower vitamin D
                  levels in many Indian adults.
                </p>
              </div>
              <div className='pb-6'>
                <h3 className='text-lg font-medium text-secondary-foreground mb-3'>
                  Who does the Sunshine Campaign serve?
                </h3>
                <p className='text-secondary-foreground/60 leading-relaxed'>
                  Urban adults, office workers, women approaching menopause,
                  elderly individuals at risk of osteopenia, and underserved
                  communities lacking healthcare access.
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
  href='https://sunshine.thinkroman.com/en'
  target='_blank'
  rel='noopener noreferrer'
  className='inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-medium tracking-widest uppercase text-sm hover:bg-accent/90 transition-all'
>
  KNOW ABOUT THE CAMPAIGN
  <ArrowRight className='w-4 h-4' />
</Link>
          </div>

          {/* Right - Stats Card */}
          <div className='relative'>
            <div className='bg-card text-card-foreground p-10 relative overflow-hidden'>
              {/* Gold accent */}
              <div className='absolute top-0 left-0 right-0 h-1 gold-gradient' />

              {/* Campaign stats - Large numbers */}
              <div className='grid grid-cols-2 gap-8 mb-10'>
                {[
                  { icon: Users, value: '10,000+', label: 'People Reached' },
                  { icon: MapPin, value: '15+', label: 'Cities Covered' },
                  {
                    icon: Heart,
                    value: '500+',
                    label: 'Free Health Camps',
                  },
                  {
                    icon: Sun,
                    value: '50+',
                    label: 'Awareness Programs',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className='text-center p-6 bg-background'
                  >
                    <stat.icon className='w-6 h-6 text-accent mx-auto mb-4' />
                    <p className='text-3xl font-light text-foreground mb-1'>
                      {stat.value}
                    </p>
                    <p className='text-xs tracking-widest uppercase text-muted-foreground'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Entity tags */}
              <div className='mb-8'>
                <p className='text-xs tracking-widest uppercase text-muted-foreground mb-4'>
                  Related Topics
                </p>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'Vitamin D Deficiency',
                    'Bone Health',
                    'Urban Wellness',
                    'Preventive Care',
                    'Community Health',
                  ].map((tag) => (
                    <span key={tag} className='entity-tag text-xs'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Citation */}
              <div className='citation-block'>
                <p className='text-xs'>
                  <strong>Initiative by:</strong> TrPharma, ThinkRoman Ventures
                </p>
                <p className='text-xs mt-1'>
                  For awareness and educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
