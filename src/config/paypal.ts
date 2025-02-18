import { PayPalConfig, PayPalMode, PayPalCurrency } from '@/types/paypal';

const PAYPAL_MODE: PayPalMode = 'sandbox';
const PAYPAL_CURRENCY: PayPalCurrency = 'EUR';
const PAYPAL_CLIENT_ID = 'AT-sESrHwmv3BKCDYUUxmPdxA8JnKt-xNh-3kNsPiBgcRJr44IYEfnJQUJ1TwvV4m-H3GQUhceW4SXeS';

export const paypalConfig: PayPalConfig = {
  clientId: PAYPAL_CLIENT_ID,
  currency: PAYPAL_CURRENCY,
  mode: PAYPAL_MODE
};

export const paypalOptions = {
  clientId: PAYPAL_CLIENT_ID,
  currency: PAYPAL_CURRENCY,
  intent: 'capture',
  enableFunding: ['paypal'] as string[],
  disableFunding: ['card', 'sofort', 'sepa', 'venmo', 'paylater'] as string[],
  dataNamespace: 'paypal_sdk',
  components: 'buttons'
} as const;