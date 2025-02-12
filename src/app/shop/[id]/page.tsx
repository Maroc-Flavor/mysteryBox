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
  const { addItem, setIsCartOpen } = useCart();
  const product = products.find(p => p.id === parseInt(params.id));

  const handleAddToCart = () => {
    if (product && product.id !== 9 && typeof product.price === 'number') {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice || '',
        image: product.image,
        quantity: 1
      });
      setIsCartOpen(true);
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

  const isIndividualBox = product.id === 9;

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg border border-gray-100"
          >
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[500px] h-[300px] md:h-[500px] relative group">
                <Image
                  fill
                  src={product.image}
                  alt={product.name}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  quality={85}
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

              <div className="p-6 md:p-10 flex flex-col flex-grow">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    {product.category}
                  </span>
                  {!isIndividualBox && product.price && (
                    <span className="text-2xl md:text-3xl font-bold text-indigo-600">
                      {product.price} €
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{product.name}</h1>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">{product.detailDescription}</p>

                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  {isIndividualBox ? (
                    <Link
                      href="/kontakt"
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Kontaktieren Sie uns
                    </Link>
                  ) : (
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      In den Warenkorb
                    </button>
                  )}
                    <Link
                    href="/shop"
                    className="flex-1 px-6 md:px-8 py-3 md:py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
                    >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
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



