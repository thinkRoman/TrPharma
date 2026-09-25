import { Activity, ArrowUpRight, Bone, Heart, Pill, ShieldPlus, Stethoscope, Wind } from 'lucide-react';
import Link from 'next/link';
import { categories } from '@/lib/products';
const icons = [Pill, Activity, ShieldPlus, Wind, Bone, Heart, Stethoscope, Heart];
export function DrugCategories() {
  return <section className='section border-section' id='therapeutic-areas'><div className='shell'>
    <div className='section-heading'><div><p className='eyebrow'>A RANGE OF CARE</p><h2>Explore by therapeutic area</h2></div><Link className='text-link' href='/products'>All products <ArrowUpRight size={18} /></Link></div>
    <div className='category-grid'>{categories.map((category, index) => { const Icon = icons[index]; return <Link className='category-card' href={`/products?category=${encodeURIComponent(category)}`} key={category}><Icon size={25} strokeWidth={1.4} /><ArrowUpRight className='category-arrow' size={17} /><span>{category}</span></Link>; })}</div>
  </div></section>;
}
