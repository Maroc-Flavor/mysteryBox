import { useState, useEffect } from 'react';
import type { CartItem } from '@/types/product';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item: CartItem) => {
    // Implementierung
  };

  const removeFromCart = (id: string) => {
    // Implementierung
  };

  return { items, total, addToCart, removeFromCart };
} 