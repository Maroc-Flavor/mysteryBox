export interface ShippingOption {
	id: string;
	name: string;
	carrier: string;
	description: string;
	estimatedDays: string;
	price: number;
}

export interface CountryShipping {
	id: string;
	name: string;
	code: string;
	flag: string;
	basePrice: number;
	options: ShippingOption[];
}

export const shippingData: CountryShipping[] = [
	{
		id: 'de',
		name: 'Deutschland',
		code: 'DE',
		flag: '🇩🇪',
		basePrice: 5.99,
		options: [
			{
				id: 'dhl-standard',
				name: 'DHL Standard',
				carrier: 'DHL',
				description: 'Standard Versand',
				estimatedDays: '2-3 Werktage',
				price: 5.99
			},
			{
				id: 'dhl-express',
				name: 'DHL Express',
				carrier: 'DHL',
				description: 'Express Versand',
				estimatedDays: '1-2 Werktage',
				price: 9.99
			},
			{
				id: 'hermes',
				name: 'Hermes',
				carrier: 'Hermes',
				description: 'Standard Versand',
				estimatedDays: '2-4 Werktage',
				price: 4.99
			}
		]
	},
	{
		id: 'at',
		name: 'Österreich',
		code: 'AT',
		flag: '🇦🇹',
		basePrice: 9.99,
		options: [
			{
				id: 'dhl-at',
				name: 'DHL Standard',
				carrier: 'DHL',
				description: 'Standard Versand',
				estimatedDays: '3-5 Werktage',
				price: 9.99
			},
			{
				id: 'dhl-at-express',
				name: 'DHL Express',
				carrier: 'DHL',
				description: 'Express Versand',
				estimatedDays: '2-3 Werktage',
				price: 14.99
			}
		]
	},
	{
		id: 'ch',
		name: 'Schweiz',
		code: 'CH',
		flag: '🇨🇭',
		basePrice: 14.99,
		options: [
			{
				id: 'dhl-ch',
				name: 'DHL Standard',
				carrier: 'DHL',
				description: 'Standard Versand',
				estimatedDays: '4-6 Werktage',
				price: 14.99
			},
			{
				id: 'dhl-ch-express',
				name: 'DHL Express',
				carrier: 'DHL',
				description: 'Express Versand',
				estimatedDays: '2-4 Werktage',
				price: 19.99
			}
		]
	}
];