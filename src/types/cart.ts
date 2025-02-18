export interface CartItem {
	id: number;
	name: string;
	price: number;
	originalPrice: number | string;
	image: string;
	quantity: number;
}

export interface CartContextType {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	removeItem: (id: number) => void;
	updateQuantity: (id: number, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
	isCartOpen: boolean;
	setIsCartOpen: (isOpen: boolean) => void;
}