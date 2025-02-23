export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
} 