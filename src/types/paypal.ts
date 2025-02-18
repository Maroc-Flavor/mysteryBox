export type PayPalMode = 'sandbox' | 'production';
export type PayPalCurrency = 'EUR' | 'USD' | 'GBP';

export interface PayPalConfig {
	clientId: string;
	currency: PayPalCurrency;
	mode: PayPalMode;
}

export interface PayPalOrderData {
	items: Array<{
		id: number;
		name: string;
		price: number;
		quantity: number;
	}>;
	customerInfo: {
		email: string;
		firstName: string;
		lastName: string;
		address: string;
		city: string;
		postalCode: string;
		country:string;
	};
	shippingMethod: {
		id: string;
		price: number;
	};
}