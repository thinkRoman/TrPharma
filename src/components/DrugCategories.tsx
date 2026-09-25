import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

type Area = {
  name: string;
  tint: string; // card background
  ink: string; // icon, border, watermark
  icon: ReactNode; // inner SVG paths (24x24 viewBox)
};

const areas: Area[] = [
  {
    name: 'Antibiotics',
    tint: '#e8f3f1',
    ink: '#1f6f68',
    icon: (
      <>
        <path d='M10.5 20.5a4.95 4.95 0 0 1-7-7l10-10a4.95 4.95 0 0 1 7 7z' />
        <path d='M8.5 8.5l7 7' />
      </>
    ),
  },
  {
    name: 'Pain management',
    tint: '#f7eee3',
    ink: '#9a5b1e',
    icon: <path d='M22 12h-4l-3 9L9 3l-3 9H2' />,
  },
  {
    name: 'Gastric care',
    tint: '#edf2e5',
    ink: '#4f6b2a',
    icon: (
      <>
        <path d='M8 3v4c0 2-2 3-2 6a6 6 0 0 0 6 6h3a4 4 0 0 0 0-8h-2a3 3 0 0 1-3-3V3' />
        <path d='M15 19v2' />
      </>
    ),
  },
  {
    name: 'Respiratory care',
    tint: '#e7f0f7',
    ink: '#2a5f8c',
    icon: (
      <>
        <path d='M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2' />
        <path d='M9.6 4.6A2 2 0 1 1 11 8H2' />
        <path d='M12.6 19.4A2 2 0 1 0 14 16H2' />
      </>
    ),
  },
  {
    name: 'Vitamins & supplements',
    tint: '#f6f1dc',
    ink: '#7d6515',
    icon: (
      <>
        <path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z' />
        <path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' />
      </>
    ),
  },
  {
    name: 'Women’s health',
    tint: '#f6e9ee',
    ink: '#9b3656',
    icon: (
      <>
        <circle cx='12' cy='9' r='5.5' />
        <path d='M12 14.5V22M8.5 18.5h7' />
      </>
    ),
  },
  {
    name: 'Diabetes care',
    tint: '#edeaf6',
    ink: '#5a4a92',
    icon: (
      <>
        <path d='M12 2.7s-6 6.6-6 11.3a6 6 0 0 0 12 0c0-4.7-6-11.3-6-11.3z' />
        <path d='M9.5 15h5M12 12.5v5' />
      </>
    ),
  },
  {
    name: 'Cardiovascular',
    tint: '#f6e7e6',
    ink: '#8f1d2c',
    icon: (
      <>
        <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
        <path d='M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27' />
      </>
    ),
  },
];

function Icon({
  children,
  className,
  strokeWidth = 1.7,
}: {
  children: ReactNode;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      className={className}
    >
      {children}
    </svg>
  );
}

const ArrowUpRight = ({ className }: { className?: string }) => (
  <Icon strokeWidth={2} className={className}>
    <path d='M7 17L17 7M8 7h9v9' />
  </Icon>
);

export function DrugCategories() {
  return (
    <section
      className='section border-section therapeutic-section'
      id='therapeutic-areas'
    >
      <div className='shell'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow'>A RANGE OF CARE</p>
            <h2>Explore by therapeutic area</h2>
          </div>
          <Link href='/products' className='text-link'>
            All products <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
        <ul className='category-grid'>
          {areas.map((area) => (
            <li key={area.name}>
              <Link
                href={`/products?category=${encodeURIComponent(area.name)}`}
                style={
                  { '--tint': area.tint, '--ink': area.ink } as CSSProperties
                }
                className='category-card'
              >
                <Icon strokeWidth={1.2} className='category-watermark'>
                  {area.icon}
                </Icon>
                <span className='category-icon'>
                  <Icon>{area.icon}</Icon>
                </span>
                <span className='category-name'>{area.name}</span>
                <ArrowUpRight className='category-arrow' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
