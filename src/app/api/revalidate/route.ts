import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

const PHARMA_API_SECRET = process.env.PHARMA_API_SECRET;

export async function GET() {
  const authorizationToken = headers().get('authorization');

  if (!authorizationToken) {
    return NextResponse.json(
      { message: 'Authorization token missing' },
      { status: 401 }
    );
  }

  if (PHARMA_API_SECRET !== authorizationToken) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  revalidateTag('products');

  return NextResponse.json({ success: true }, { status: 200 });
}
