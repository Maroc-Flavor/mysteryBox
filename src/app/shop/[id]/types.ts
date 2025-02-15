export interface Product {
	id: number;
	category: string;
	name: string;
	image: string;
	price: number | string;
	originalPrice: number | string;
	offer: string;
	description: string;
	detailDescription: string;
}