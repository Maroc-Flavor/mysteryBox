export type PriceType = number | 'individual';

export interface Product {
	id: number;
	name: string;
	description: string;
	price: PriceType;
	originalPrice: PriceType;
	image: string;
	category: string;
	inStock: boolean;
}

export interface CartItem extends Product {
	quantity: number;
}
