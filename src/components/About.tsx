'use client';

import { CheckCircle, Eye, Target } from 'lucide-react';

export function About() {
  return (
    <section id='about' className='relative py-16 lg:py-24 bg-card overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8 lg:px-12'>
        {/* Section header - Editorial style */}
        <div className='max-w-3xl mb-12'>
          <p className='editorial-subheading mb-4'>About TrPharma</p>
          <h2 className='editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6'>
            Your Health &amp;
            <br />
            <span className='text-accent'>Wellness Partner</span>
          </h2>
          <div className='w-16 h-0.5 bg-accent' />
        </div>

        {/* Quick Summary for AEO */}
        <div className='quick-summary max-w-3xl mb-12'>
          <p className='text-sm font-semibold text-accent mb-2 tracking-widest uppercase'>
            What is TrPharma?
          </p>
          <p className='text-foreground/80 leading-relaxed text-lg'>
            TrPharma is a pharmaceutical division of ThinkRoman Ventures that
            combines clinical expertise with pharmaceutical innovation. Founded
            by healthcare professionals, we specialize in nutraceuticals, bone
            health supplements, and vitamin formulations designed for Indian
            patients.
          </p>
        </div>

        {/* Main content grid */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-start'>
          {/* Left - FAQ structure for AEO */}
          <div className='space-y-12'>
            <div className='space-y-10'>
              <div className='faq-item pb-10'>
                <h3 className='text-xl font-medium text-foreground mb-4 tracking-tight'>
                  What makes TrPharma different from other pharmaceutical
                  companies?
                </h3>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                  At TrPharma, we stand at the unique crossroads of clinical
                  expertise and pharmaceutical innovation. Our leadership team
                  brings together extensive experience from both clinical care
                  and the pharmaceutical industry, enabling us to create products
                  that truly address patient needs.
                </p>
              </div>

              <div className='faq-item pb-10'>
                <h3 className='text-xl font-medium text-foreground mb-4 tracking-tight'>
                  Who does TrPharma serve?
                </h3>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                  We serve healthcare professionals, hospitals, clinics, and
                  patients across India. Our focus is on urban adults, office
                  workers, and individuals seeking nutritional support for bone
                  health, vitamin D deficiency, and overall wellness.
                </p>
              </div>

              <div className='pb-4'>
                <h3 className='text-xl font-medium text-foreground mb-6 tracking-tight'>
                  What are TrPharma&apos;s core specializations?
                </h3>
                <ul className='space-y-4 text-muted-foreground text-lg'>
                  {[
                    'Bone health formulations (calcium, vitamin D3)',
                    'Nutraceutical supplements',
                    'Multivitamin and mineral complexes',
                    'Antibiotic formulations',
                    'Pain management solutions',
                  ].map((item) => (
                    <li key={item} className='flex items-start gap-4'>
                      <CheckCircle className='w-5 h-5 text-accent mt-1 flex-shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Mission & Vision Cards */}
          <div className='space-y-8'>
            {/* Mission Card */}
            <div className='cinematic-card p-10 rounded-sm relative overflow-hidden'>
              <div className='absolute top-0 left-0 right-0 h-0.5 gold-gradient' />
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-primary text-primary-foreground'>
                  <Target className='w-5 h-5' />
                </div>
                <div>
                  <p className='editorial-subheading mb-1'>Our Purpose</p>
                  <h3 className='text-2xl font-medium text-foreground tracking-tight'>
                    Mission
                  </h3>
                </div>
              </div>
              <p className='text-muted-foreground leading-relaxed text-lg'>
                Our mission at TrPharma is to be your partner in health and
                wellness, offering unparalleled products and services to enhance
                your life through accessible and effective treatments that
                support healthcare professionals in providing the best outcomes
                for their patients.
              </p>
            </div>

            {/* Vision Card */}
            <div className='cinematic-card p-10 rounded-sm relative overflow-hidden'>
              <div className='absolute top-0 left-0 right-0 h-0.5 gold-gradient' />
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-accent text-accent-foreground'>
                  <Eye className='w-5 h-5' />
                </div>
                <div>
                  <p className='editorial-subheading mb-1'>Our Aspiration</p>
                  <h3 className='text-2xl font-medium text-foreground tracking-tight'>
                    Vision
                  </h3>
                </div>
              </div>
              <p className='text-muted-foreground leading-relaxed text-lg'>
                TrPharma envisions a world where every individual has access to
                personalized, innovative healthcare solutions, empowering them
                to live their healthiest lives. We leverage our unique clinical
                insights to bring forth treatments that address the nuanced
                needs of diverse communities.
              </p>
            </div>

            {/* Citation block */}
            <div className='citation-block mt-8'>
              <p className='mb-1'>
                <strong>Source:</strong> TrPharma Corporate Overview
              </p>
              <p>
                <strong>Last Updated:</strong> May 2026
              </p>
              <p className='mt-2 text-xs'>
                For educational purposes only. Consult healthcare professionals
                for medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
