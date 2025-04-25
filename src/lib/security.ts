import { headers } from 'next/headers';

// Content Security Policy Header
export const securityHeaders = {
  'Content-Security-Policy': `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://www.paypalobjects.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https: blob:;
    font-src 'self';
    connect-src 'self' https://api.paypal.com;
    frame-src 'self' https://www.paypal.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim(),
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

// Erweiterte Input-Validierung
export const validateInput = (input: string, type: 'text' | 'email' | 'phone' | 'address'): boolean => {
  const patterns = {
    text: /^[a-zA-Z0-9\s\-_.,!?()]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
    address: /^[a-zA-Z0-9\s\-_.,]+$/,
  };
  
  return patterns[type].test(input.trim());
};

// Erweiterte XSS-Prävention
export const sanitizeHTML = (dirty: string): string => {
  return dirty
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/`/g, '&#x60;')
    .replace(/\//g, '&#x2F;');
};

// CSRF-Token-Generierung
export const generateCSRFToken = (): string => {
  return crypto.randomUUID();
};

// Rate Limiting Konfiguration
export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 100, // Limit pro IP
  message: 'Zu viele Anfragen von dieser IP, bitte versuchen Sie es später erneut.',
};

// Session-Konfiguration
export const sessionConfig = {
  maxAge: 24 * 60 * 60, // 24 Stunden
  secure: true,
  httpOnly: true,
  sameSite: 'strict' as const,
}; 