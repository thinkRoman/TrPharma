import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  const oldDomains = ['trpharma.thinkroman.com', 'pharma.thinkroman.com'];
  const newDomain = 'thinkromanpharma.com';

  const isOldDomain = oldDomains.some(domain => hostname.includes(domain));
  const isProductsLandingRoute = pathname === '/products' || pathname === '/products/';

  if (isProductsLandingRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.hash = 'products';

    if (isOldDomain) {
      url.hostname = newDomain;
      url.port = '';
      url.protocol = 'https:';
    }

    return NextResponse.redirect(url, 308);
  }

  if (isOldDomain) {
    const isInternalRoute = pathname.startsWith('/api');

    if (!isInternalRoute) {
      const url = request.nextUrl.clone();
      url.hostname = newDomain;
      url.port = '';
      url.protocol = 'https:';
      
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
