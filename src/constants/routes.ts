export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  CONTACT: '/kontakt',
  ABOUT: '/uber-uns',
  LEGAL: {
    TERMS: '/agb',
    PRIVACY: '/datenschutz',
    IMPRINT: '/impressum'
  },
  STATIC_PAGES: ['/uber-uns', '/kontakt', '/agb', '/datenschutz', '/impressum']
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES]; 