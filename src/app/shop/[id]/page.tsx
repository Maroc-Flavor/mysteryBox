'use client';

import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { products } from './products';

type PageProps = {
  params: { id: string };
};

export default function ProductDetail({ params }: PageProps) {
  const { addItem } = useCart();
  const product = products.find(p => p.id === parseInt(params.id));

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl text-gray-600">Product not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg border border-gray-100"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative h-[500px] md:w-[500px] group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    {product.category}
                  </span>
                  <span className="text-3xl font-bold text-indigo-600">
                    {product.price} €
                  </span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.detailDescription}</p>

                <div className="mt-auto flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    In den Warenkorb
                  </button>
                  <Link
                    href="/shop"
                    className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
                  >
                    Zurück zum Shop
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
}



