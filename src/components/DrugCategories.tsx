'use client';

import {
  Activity,
  ArrowRight,
  Droplets,
  Heart,
  Pill,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

// Entity-rich category data for GEO optimization
const categories = [
  {
    icon: Pill,
    name: 'Antibiotics',
    description:
      'Antimicrobial pharmaceutical formulations for treating bacterial infections, developed with clinical precision.',
    entities: ['Bacterial Infections', 'Antimicrobial', 'Healthcare'],
  },
  {
    icon: Heart,
    name: 'Pain Management',
    description:
      'Interdisciplinary pain relief solutions for improving quality of life in patients with chronic conditions.',
    entities: ['Chronic Pain', 'Quality of Life', 'Relief'],
  },
  {
    icon: Sparkles,
    name: 'Vitamin D Supplements',
    description:
      'Cholecalciferol formulations for calcium absorption and bone health, addressing vitamin D deficiency in urban adults.',
    entities: ['Vitamin D3', 'Bone Health', 'Deficiency'],
  },
  {
    icon: ShieldCheck,
    name: 'Calcium Supplements',
    description:
      'Advanced calcium formulations including KashCAL PLUS for bone density and osteopenia prevention.',
    entities: ['Calcium', 'Bone Density', 'Osteopenia'],
  },
  {
    icon: Activity,
    name: 'Multivitamins',
    description:
      'Complete nutritional support with essential vitamins, minerals, and micronutrients for daily wellness.',
    entities: ['Nutrition', 'Wellness', 'Daily Health'],
  },
  {
    icon: Droplets,
    name: 'Nutraceuticals',
    description:
      'Science-backed nutritional products bridging the gap between food and pharmaceuticals.',
    entities: ['Preventive Care', 'Nutrition Science', 'Wellness'],
  },
];

export function DrugCategories() {
  return (
    <section
      id='categories'
      className='relative py-16 lg:py-24 bg-background overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-8 lg:px-12'>
        {/* Section header - Editorial style */}
        <div className='max-w-3xl mb-10'>
          <p className='editorial-subheading mb-4'>Product Categories</p>
          <h2 className='editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6'>
            Our Drug
            <br />
            <span className='text-accent'>Categories</span>
          </h2>
          <div className='w-16 h-0.5 bg-accent' />
        </div>

        {/* Quick Summary for AEO */}
        <div className='quick-summary max-w-3xl mb-10'>
          <p className='text-sm font-semibold text-accent mb-2 tracking-widest uppercase'>
            What products does TrPharma offer?
          </p>
          <p className='text-foreground/80 leading-relaxed text-lg'>
            TrPharma specializes in bone health supplements (calcium, vitamin
            D3), multivitamins, nutraceuticals, antibiotics, and pain management
            solutions. Our flagship products include KashCAL PLUS for bone
            health and comprehensive vitamin formulations designed for Indian
            patients.
          </p>
        </div>

        {/* Categories grid - Cinematic cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {categories.map((category) => (
            <Link
              key={category.name}
              href='/products'
              className='group cinematic-card p-8 rounded-sm relative overflow-hidden'
            >
              {/* Gold accent line on hover */}
              <div className='absolute bottom-0 left-0 right-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500' />

              {/* Icon */}
              <div className='inline-flex p-4 bg-muted mb-6'>
                <category.icon className='w-6 h-6 text-foreground' />
              </div>

              {/* Content */}
              <h3 className='text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors tracking-tight'>
                {category.name}
              </h3>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                {category.description}
              </p>

              {/* Entity tags */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {category.entities.map((entity) => (
                  <span
                    key={entity}
                    className='text-xs text-muted-foreground bg-muted px-3 py-1'
                  >
                    {entity}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className='flex items-center gap-2 text-accent font-medium text-sm tracking-widest uppercase'>
                <span>View Products</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-2 transition-transform duration-300' />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-10'>
          <Link
            href='/products'
            className='matte-button inline-flex items-center gap-3'
          >
            Browse All Products
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}
