'use client';


import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { paypalOptions } from '@/config/paypal.config';

export function PayPalProvider({ children }: { children: React.ReactNode }) {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      {children}
    </PayPalScriptProvider>
  );
}