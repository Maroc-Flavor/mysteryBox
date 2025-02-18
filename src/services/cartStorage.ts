import { CartItem } from '@/types/cart';

export const CartStorage = {
	getItems: (): CartItem[] => {
		if (typeof window === 'undefined') return [];
		const savedItems = localStorage.getItem('cart');
		return savedItems ? JSON.parse(savedItems) : [];
	},

	saveItems: (items: CartItem[]): void => {
		if (typeof window === 'undefined') return;
		localStorage.setItem('cart', JSON.stringify(items));
	},

	clearItems: (): void => {
		if (typeof window === 'undefined') return;
		localStorage.removeItem('cart');
	}
};