import { products } from '@/data/products';
import { Product } from '@/types/products';

export function useProducts() {
  const getProduct = (id: string | number) => {
    return products.find(p => p.id === (typeof id === 'string' ? parseInt(id) : id));
  };

  const isIndividualBox = (product?: Product) => product?.id === 9;
  
  const getFilteredProducts = (category?: string) => {
    return category 
      ? products.filter(p => p.category === category)
      : products;
  };

  const getProductAction = (product?: Product) => {
    if (!product) return null;
    return isIndividualBox(product) 
      ? { type: 'contact', text: 'Angebot anfordern' }
      : { type: 'shop', text: 'Jetzt entdecken' };
  };

  return {
    products,
    getProduct,
    isIndividualBox,
    getFilteredProducts,
    getProductAction
  };
} 