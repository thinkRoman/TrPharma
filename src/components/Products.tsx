import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Container } from '@/components/Container';
import { ProductLink } from '@/components/ProductLink';

const cards = [
  {
    id: 'kashmox-625',
    img: '/images/medicine-1.jpeg',
    heading: 'KashMOX 625: The Double Defense.',
    desc: 'Amoxicillin meets Clavulanic Acid to tackle infections head-on. Quick. Effective. Resilient. Get back to full strength faster.',
    tagline: 'KashMOX 625 — Guard Your Health.',
  },
  {
    id: 'one87-plus',
    img: '/images/medicine-2.jpeg',
    heading: "Live life to the fullest—don't let pain hold you back.",
    desc: 'With One87 Plus embrace an active lifestyle free from discomfort, - talk to your healthcare provider and step into a vibrant, pain-free life today.',
  },
  {
    id: 'sohar-d-60k',
    img: '/images/medicine-3.jpeg',
    heading: 'Sohar-D 60k: Essential Wellness, Effortlessly Delivered.',
    desc: 'Packed with 60,000 IU of Vitamin D3, Sohar-D 60k sachets provide the boost you need for bone health and immune support in a single, convenient dose. Trust in Sohar-D to fortify your vitality with ease.',
    tagline: 'Your health, our science: Sohar-D 60k.',
  },
  {
    id: 'comfortide-425',
    img: '/images/medicine-4.png',
    heading: 'ComforTide 425',
    desc: 'Provides targeted relief from acute and chronic pain. Acts as a non-opioid painkiller with a unique mechanism to soothe discomfort. Offers reliable and safe relief from pain and fever. Enhances pain management when combined with Flupirtine.',
    tagline: 'Effective relief meets enhanced safety in one powerful formula.',
  },
  {
    id: 'acidblock-40',
    img: '/images/medicine-5.png',
    heading: 'AcidBlock 40',
    desc: 'Targets and suppresses excess stomach acid production. Rapidly absorbs for quick onset of action. Designed for sustained relief from gastric discomfort.',
    tagline: 'Reliable relief, comprehensive protection.',
  },
  {
    id: 'reliefon-forte',
    img: '/images/medicine-6.jpg',
    heading: 'Reliefon Forte',
    desc: 'Targets and swiftly reduces pain and inflammation. Acts rapidly to provide relief and improve mobility. Acts as a muscle relaxant, effectively reducing spasms and discomfort. Enhances the therapeutic effects by easing muscle tension.',
    tagline: 'Dual-action formula for lasting relief and muscle relaxation.',
  },
  {
    id: 'zoovistat-20',
    img: '/images/medicine-7.png',
    heading: 'Zoovistat 20',
    desc: 'Effectively lowers bad cholesterol (LDL) and triglycerides in the blood. Increases good cholesterol (HDL), supporting cardiovascular health.',
    tagline: 'Powerful Cholesterol Control for a healthier tomorrow.',
  },
  {
    id: '880-plus',
    img: '/images/medicine-8.jpg',
    heading: '880 PLUS',
    desc: 'A comprehensive multivitamin supplement that provides essential vitamins and minerals for overall health and vitality. Supports energy metabolism, immune function, and overall well-being.',
    tagline: 'Targeted Multivitamin Supplementation for Complete Wellness.',
  },
  {
    id: '280-plus',
    img: '/images/medicine-9.png',
    heading: '280 PLUS',
    desc: 'Iron, Folic Acid, and Zinc work together to boost energy, immunity, and healthy development during pregnancy. They support neural growth, maternal health, and healing, ensuring strong foundations for both mother and baby.',
    tagline:
      'Essential supplement for 280 days of healthy pregnancy and motherhood.',
  },
];

export function Products() {
  return (
    <Container className='py-12 px-8'>
      <div className='flex flex-col items-center gap-6'>
        {cards.map((card, index) => (
          <div key={index} id={card.id}>
            <div className='group relative z-1 block md:hidden cursor-pointer max-w-sm bg-white transition-all hover:bg-gray-100'>
              <ProductLink id={card.id} />

              <div className='overflow-hidden flex justify-center bg-white group-hover:bg-white'>
                <Image
                  src={card.img}
                  alt='Medicine Image'
                  width={2669}
                  height={1782}
                  loading='lazy'
                  className='transition-transform group-hover:scale-105 h-60 w-auto'
                />
              </div>

              <div className='flex flex-shrink-0 items-end px-4 pb-8 pt-6'>
                <div className='flex flex-col gap-4'>
                  <span className='text-lg text-center font-medium'>
                    {card.heading}
                  </span>
                  <span className=''>{card.desc}</span>
                  <span className='text-left'>{card.tagline}</span>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'group relative z-1 hidden h-[450px] md:flex justify-between items-center cursor-pointer w-full bg-white transition-all hover:bg-gray-100',
                index & 1 && 'flex-row-reverse'
              )}
            >
              <ProductLink id={card.id} />

              <div className='overflow-hidden w-2/3 h-full flex justify-center items-center bg-white group-hover:bg-white'>
                <Image
                  src={card.img}
                  alt='Medicine Image'
                  width={2669}
                  height={1782}
                  loading='lazy'
                  className='transition-transform group-hover:scale-105 object-center h-full w-auto'
                />
              </div>

              <div className='flex items-end px-8 w-1/3'>
                <div className='flex flex-col gap-4'>
                  <span className='text-lg text-center font-medium'>
                    {card.heading}
                  </span>
                  <span className=''>{card.desc}</span>
                  <span className='text-left'>{card.tagline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
