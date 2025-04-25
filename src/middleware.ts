import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimitConfig } from './lib/security';

// Einfache In-Memory Rate Limiting Implementierung
const ipRequests = new Map<string, { count: number; timestamp: number }>();

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Rate Limiting
  const ip = request.ip ?? '127.0.0.1';
  const now = Date.now();
  const requestData = ipRequests.get(ip);

  if (requestData) {
    if (now - requestData.timestamp > rateLimitConfig.windowMs) {
      ipRequests.set(ip, { count: 1, timestamp: now });
    } else if (requestData.count >= rateLimitConfig.max) {
      return new NextResponse(rateLimitConfig.message, { status: 429 });
    } else {
      requestData.count++;
    }
  } else {
    ipRequests.set(ip, { count: 1, timestamp: now });
  }

  // Sicherheitsheader
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  // CSRF-Schutz für POST/PUT/DELETE Anfragen
  if (['POST', 'PUT', 'DELETE'].includes(request.method)) {
    const csrfToken = request.headers.get('x-csrf-token');
    if (!csrfToken) {
      return new NextResponse('CSRF Token fehlt', { status: 403 });
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 