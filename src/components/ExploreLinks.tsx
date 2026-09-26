import { ArrowUpRight, BookOpen, Leaf } from 'lucide-react';

const destinations = [
  {
    href: 'https://www.880plus.com/',
    label: 'Nutraceutical Portal',
    description: 'Explore 880 PLUS supplements and everyday nutrition.',
    tone: 'nutrition',
    Icon: Leaf,
  },
  {
    href: 'https://orzuv.thinkroman.com/',
    label: 'Healthcare Magazine',
    description: 'Read health insights and wellness stories from ORZUV.',
    tone: 'magazine',
    Icon: BookOpen,
  },
];

export function ExploreLinks({
  compact = false,
  onNavigate,
}: {
  compact?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className={`explore-links${compact ? ' explore-links-compact' : ''}`}>
      {destinations.map(({ href, label, description, tone, Icon }) => (
        <a
          key={href}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={`explore-link explore-link-${tone}`}
          onClick={onNavigate}
        >
          <Icon className='explore-link-icon' size={20} aria-hidden='true' />
          <span>
            <strong>{label}</strong>
            {!compact && <span className='explore-description'>{description}</span>}
          </span>
          <ArrowUpRight size={16} aria-hidden='true' />
          <span className='sr-only'> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
