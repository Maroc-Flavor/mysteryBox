// Sandbox vs Production Environment
export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID;

// Validiere Environment Variables beim Start
if (!PAYPAL_CLIENT_ID) {
  console.error('PayPal Sandbox Client ID ist nicht konfiguriert');
}

export interface PayPalConfig {
  currency: string;
  clientId: string;
}

export const getPayPalConfig = (): PayPalConfig => ({
  currency: 'EUR',
  clientId: PAYPAL_CLIENT_ID || ''
});

export const validatePayPalTransaction = (details: any): boolean => {
  return (
    details?.status === 'COMPLETED' &&
    typeof details?.purchase_units?.[0]?.amount?.value === 'string' &&
    !isNaN(parseFloat(details.purchase_units[0].amount.value))
  );
}; 