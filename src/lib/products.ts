import { Product, PriceType } from '@/types/products';
import { products } from '@/data/products';

export async function fetchProducts(): Promise<Product[]> {
  return products;
}

export function formatPrice(price: PriceType): string {
  if (price === 'individual') {
    return 'Auf Anfrage';
  }
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
} 