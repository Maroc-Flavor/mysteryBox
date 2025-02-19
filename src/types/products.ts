export type PriceType = number | 'surprise' | 'individual';

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
