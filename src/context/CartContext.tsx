'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
	id: number;
	name: string;
	price: number;
	image: string;
	quantity: number;
}

interface CartContextType {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	removeItem: (id: number) => void;
	updateQuantity: (id: number, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>(() => {
		if (typeof window !== 'undefined') {
			const savedItems = localStorage.getItem('cart');
			return savedItems ? JSON.parse(savedItems) : [];
		}
		return [];
	});
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		// Update totals whenever items change
		const newTotalItems = items.reduce((sum, item) => sum + item.quantity, 0);
		const newTotalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
		setTotalItems(newTotalItems);
		setTotalPrice(newTotalPrice);
		
		// Save to localStorage
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart', JSON.stringify(items));
		}
	}, [items]);

	const addItem = (newItem: CartItem) => {
		setItems(currentItems => {
			const existingItem = currentItems.find(item => item.id === newItem.id);
			if (existingItem) {
				return currentItems.map(item =>
					item.id === newItem.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...currentItems, { ...newItem, quantity: 1 }];
		});
	};

	const removeItem = (id: number) => {
		setItems(currentItems => currentItems.filter(item => item.id !== id));
	};

	const updateQuantity = (id: number, quantity: number) => {
		if (quantity < 1) return;
		setItems(currentItems =>
			currentItems.map(item =>
				item.id === id ? { ...item, quantity } : item
			)
		);
	};

	const clearCart = () => {
		setItems([]);
	};

	return (
		<CartContext.Provider value={{
			items,
			addItem,
			removeItem,
			updateQuantity,
			clearCart,
			totalItems,
			totalPrice
		}}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}