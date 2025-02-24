import { CartItem } from '@/types/cart';

const CART_STORAGE_KEY = 'cart_items';

export const CartStorage = {
	getItems: (): CartItem[] => {
		if (typeof window === 'undefined') return [];
		const items = localStorage.getItem(CART_STORAGE_KEY);
		return items ? JSON.parse(items) : [];
	},

	saveItems: (items: CartItem[]): void => {
		if (typeof window === 'undefined') return;
		localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
	},

	clearItems: (): void => {
		if (typeof window === 'undefined') return;
		localStorage.removeItem(CART_STORAGE_KEY);
	}
};