import { ArrowUpRight, Sun } from 'lucide-react';
import Link from 'next/link';
export function Sunshine() {
  return <section className='section sunshine-section' id='sunshine'><div className='shell sunshine-layout'>
    <div className='sun-art' aria-hidden='true'><div className='sun-orbit orbit-one' /><div className='sun-orbit orbit-two' /><Sun size={80} strokeWidth={0.7} /><span>A LITTLE AWARENESS.<br />A BRIGHTER TOMORROW.</span></div>
    <div><p className='eyebrow'>BEYOND THE PRODUCT</p><h2>A little sunshine.<br /><em>A lasting conversation.</em></h2><p className='intro'>The Sunshine Campaign brings awareness of vitamin D and bone health into everyday conversations.</p><p className='muted'>An initiative from TrPharma, connecting our commitment to health with the communities we serve.</p><Link href='https://sunshine.thinkroman.com/en' className='text-link'>Explore the Sunshine Campaign <ArrowUpRight size={18} /></Link></div>
  </div></section>;
}
