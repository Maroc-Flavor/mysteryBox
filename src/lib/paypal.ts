export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export interface PayPalConfig {
  currency: string;
  clientId: string;
}

export const getPayPalConfig = (): PayPalConfig => ({
  currency: 'EUR',
  clientId: PAYPAL_CLIENT_ID || ''
}); 