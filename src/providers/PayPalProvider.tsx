'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PAYPAL_CLIENT_ID, PAYPAL_CURRENCY, PAYPAL_MODE } from '@/config/paypal';

// PayPal Provider Konfiguration
const paypalOptions = {
	clientId: PAYPAL_CLIENT_ID,
	currency: PAYPAL_CURRENCY,
	intent: 'capture',
	enableFunding: ['paylater', 'venmo'],
	disableFunding: ['card', 'sofort'],
	dataNamespace: 'paypal_sdk',
};

export function PayPalProvider({ children }: { children: React.ReactNode }) {
	return (
		<PayPalScriptProvider options={paypalOptions}>
			{children}
		</PayPalScriptProvider>
	);
}