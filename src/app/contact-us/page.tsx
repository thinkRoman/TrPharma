import { ArrowUpRight, Mail, PackageCheck, Phone, Stethoscope } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Contact TrPharma' };
export default function ContactPage() {
 return <main id='main-content' className='shell page-hero'><p className='eyebrow'>LET’S CONNECT</p><h1>A conversation.<br /><em>A next step.</em></h1><p className='intro'>For product information, professional enquiries, or distribution partnerships, get in touch with the TrPharma team.</p><div className='contact-grid'>
 <section className='contact-card'><Mail size={25} /><h2>Write to us</h2><p>Share your enquiry and the product or area you are interested in.</p><a className='text-link' href='mailto:trpharma@thinkroman.com'>trpharma@thinkroman.com <ArrowUpRight size={16} /></a></section>
 <section className='contact-card'><Phone size={25} /><h2>Give us a call</h2><p>Speak with our team about TrPharma and our product range.</p><a className='text-link' href='tel:+918169197853'>+91 81691 97853 <ArrowUpRight size={16} /></a></section>
 <section className='contact-card' id='professionals'><Stethoscope size={25} /><h2>Healthcare professionals</h2><p>Browse formulation details or contact us with a product information enquiry.</p><Link className='text-link' href='/products'>Browse product information <ArrowUpRight size={16} /></Link></section>
 <section className='contact-card' id='partners'><PackageCheck size={25} /><h2>Distribution partners</h2><p>Tell us about your network and start a conversation about working together.</p><Link className='text-link' href='https://pharmacy.thinkroman.com/distributor-form'>Make a partnership enquiry <ArrowUpRight size={16} /></Link></section>
 </div></main>;
}
