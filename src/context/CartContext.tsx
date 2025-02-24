'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, CartContextType } from '@/types/cart';
import { CartStorage } from '@/services/cartStorage';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);

	useEffect(() => {
		const storedItems = CartStorage.getItems();
		if (storedItems && Array.isArray(storedItems)) {
			setItems(storedItems as CartItem[]);
		}
	}, []);

	useEffect(() => {
		const newTotalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
		const newTotalPrice = items.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0);
		
		setTotalItems(newTotalItems);
		setTotalPrice(newTotalPrice);
		CartStorage.saveItems(items);
	}, [items]);

	const validateCartItem = (item: CartItem): boolean => {
		return (
			typeof item.id === 'number' &&
			typeof item.price === 'number' &&
			item.price > 0 &&
			typeof item.quantity === 'number' &&
			item.quantity > 0 &&
			item.quantity <= 10 // Maximale Menge pro Artikel
		);
	};

	const addItem = (newItem: CartItem) => {
		if (!validateCartItem(newItem)) {
			console.error('Ungültiges Produkt');
			return;
		}
		if (typeof newItem.price !== 'number') return;
		
		setItems(currentItems => {
			const existingItem = currentItems.find(item => item.id === newItem.id);
			if (existingItem) {
				return currentItems.map(item =>
					item.id === newItem.id
						? { ...item, quantity: (item.quantity || 0) + 1 }
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
		CartStorage.clearItems();
	};

	return (
		<CartContext.Provider value={{
			items,
			totalItems,
			totalPrice,
			isCartOpen,
			setIsCartOpen,
			addItem,
			removeItem,
			updateQuantity,
			clearCart
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
