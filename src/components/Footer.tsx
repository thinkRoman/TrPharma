import Image from 'next/image';
import Link from 'next/link';
export function Footer() {
  return (
    <footer className='site-footer'>
      <div className='shell footer-top'>
        <div className='footer-brand'>
          <Link className='brand' href='/' aria-label='TrPharma home'>
            <Image
              src='/images/logo.png'
              alt='TrPharma'
              width={398}
              height={138}
            />
            <span>FROM THINKROMAN</span>
          </Link>
          <p>
            Pharmaceuticals and nutraceuticals.
            <br />A shared commitment to everyday care.
          </p>
        </div>
        <div className='footer-column'>
          <h2>Explore</h2>
          <Link href='/products'>Product catalog</Link>
          <Link href='/#therapeutic-areas'>Therapeutic areas</Link>
          <Link href='/about'>About TrPharma</Link>
          <Link href='/about#sunshine'>Sunshine Campaign</Link>
        </div>
        <div className='footer-column'>
          <h2>Connect</h2>
          <Link href='/contact-us#professionals'>Healthcare professionals</Link>
          <Link href='/contact-us#partners'>Distribution partners</Link>
          <Link href='/#faqs'>Common questions</Link>
          <Link href='https://www.instagram.com/trpharma187/'>Instagram ↗</Link>
        </div>
        <div className='footer-column'>
          <h2>Get in touch</h2>
          <a href='mailto:trpharma@thinkroman.com'>trpharma@thinkroman.com</a>
          <a href='tel:+918169197853'>+91 81691 97853</a>
          <Link href='/contact-us'>Contact our team ↗</Link>
        </div>
      </div>
      <div className='shell footer-bottom'>
        <p>
          © {new Date().getFullYear()} ThinkRoman Ventures LLP. For educational
          purposes only.
        </p>
        <div>
          <Link href='/privacy-policy'>Privacy policy</Link>
          <Link href='/terms-and-conditions'>Terms & conditions</Link>
        </div>
      </div>
    </footer>
  );
}
