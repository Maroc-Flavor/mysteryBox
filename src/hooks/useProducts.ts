import { products } from '@/data/products';
import { Product } from '@/types/products';
import { ROUTES } from '@/constants/routes';

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
      ? { type: 'contact', text: 'Angebot anfordern', href: ROUTES.CONTACT }
      : { type: 'shop', text: 'Jetzt entdecken', href: `${ROUTES.SHOP}/${product.id}` };
  };

  const formatPrice = (price: number | 'individual'): string => {
    if (price === 'individual') return 'Auf Anfrage';
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  return {
    products,
    getProduct,
    isIndividualBox,
    getFilteredProducts,
    getProductAction,
    formatPrice
  };
} 