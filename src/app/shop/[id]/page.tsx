import { products } from '@/data/products';
import { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find(p => p.id === parseInt(params.id));
  
  return {
    title: product ? `${product.name} - MysteryBox Shop` : 'Produkt nicht gefunden',
    description: product?.description || 'Produkt Details'
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailClient params={params} />;
}



