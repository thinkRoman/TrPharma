/* eslint-env jest */
import { act, fireEvent, render, screen } from '@testing-library/react';

import { FeaturedProducts } from './FeaturedProducts';

const products = [
  { slug: 'kashcal-tm-plus', heading: 'KashCAL Plus', img: '' },
  { slug: '880-plus', heading: '880 Plus', img: '' },
  { slug: 'sohar-d-60k', heading: 'Sohar-D 60K', img: '' },
  { slug: 'kashmox-625', heading: 'KashMOX 625', img: '' },
  { slug: 'acidblock-40', heading: 'AcidBlock 40', img: '' },
];
let desktop;
let reducedMotion;
beforeEach(() => {
  jest.useFakeTimers(); desktop = true; reducedMotion = false;
  window.matchMedia = jest.fn(query => ({ matches: query.includes('prefers-reduced-motion') ? reducedMotion : desktop, addEventListener: jest.fn(), removeEventListener: jest.fn() }));
});
afterEach(() => jest.useRealTimers());
const advance = () => act(() => jest.advanceTimersByTime(6500));

it('rotates at 6.5 seconds and keeps the product link in sync', () => {
  render(<FeaturedProducts products={products} />);
  expect(screen.getByRole('link', { name: 'Explore KashCAL Plus' })).toHaveAttribute('href', '/products/kashcal-tm-plus');
  advance();
  expect(screen.getByRole('link', { name: 'Explore 880 Plus' })).toHaveAttribute('href', '/products/880-plus');
  advance(); advance(); advance(); advance();
  expect(screen.getByRole('button', { name: 'Show KashCAL Plus' })).toHaveAttribute('aria-pressed', 'true');
});
it('pauses on hover, keyboard focus, and explicit pause', () => {
  render(<FeaturedProducts products={products} />);
  const region = screen.getByRole('region', { name: 'Featured products' });
  fireEvent.mouseEnter(region); advance();
  expect(screen.getByRole('link', { name: 'Explore KashCAL Plus' })).toBeInTheDocument();
  fireEvent.mouseLeave(region);
  const dot = screen.getByRole('button', { name: 'Show KashCAL Plus' });
  fireEvent.focus(dot); advance();
  expect(screen.getByRole('link', { name: 'Explore KashCAL Plus' })).toBeInTheDocument();
  fireEvent.blur(dot); fireEvent.click(screen.getByRole('button', { name: 'Pause product rotation' })); advance();
  expect(screen.getByRole('link', { name: 'Explore KashCAL Plus' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Play product rotation' })); advance();
  expect(screen.getByRole('link', { name: 'Explore 880 Plus' })).toBeInTheDocument();
});
it.each(['mobile', 'reduced motion'])('keeps %s manual and supports dot navigation', mode => {
  if (mode === 'mobile') desktop = false; else reducedMotion = true;
  render(<FeaturedProducts products={products} />); advance();
  expect(screen.getByRole('link', { name: 'Explore KashCAL Plus' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Pause product rotation' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Show Sohar-D 60K' }));
  expect(screen.getByRole('link', { name: 'Explore Sohar-D 60K' })).toHaveAttribute('href', '/products/sohar-d-60k');
});
it('supports horizontal swipes without treating vertical scrolling as a swipe', () => {
  desktop = false;
  const { container } = render(<FeaturedProducts products={products} />);
  const image = container.querySelector('.showcase-slides');
  fireEvent.touchStart(image, { touches: [{ clientX: 250, clientY: 100 }] });
  fireEvent.touchEnd(image, { changedTouches: [{ clientX: 100, clientY: 110 }] });
  expect(screen.getByRole('link', { name: 'Explore 880 Plus' })).toBeInTheDocument();
  fireEvent.touchStart(image, { touches: [{ clientX: 250, clientY: 100 }] });
  fireEvent.touchEnd(image, { changedTouches: [{ clientX: 190, clientY: 300 }] });
  expect(screen.getByRole('link', { name: 'Explore 880 Plus' })).toBeInTheDocument();
});
it('does not show carousel controls for a single product', () => {
  render(<FeaturedProducts products={products.slice(0, 1)} />); advance();
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});
