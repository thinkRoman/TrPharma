import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  const oldDomain = 'trpharma.thinkroman.com';
  const newDomain = 'thinkromanpharma.com';

  if (hostname.includes(oldDomain)) {
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
