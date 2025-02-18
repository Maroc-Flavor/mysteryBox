export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	originalPrice: number;
	image: string;
	category: string;
	inStock: boolean;
}

export interface ProductListItem {
	id: number;
	category: string;
	name: string;
	image: string;
	price: number | string;
	originalPrice: number | string;
	description: string;
	inStock: boolean;
}