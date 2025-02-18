'use client';

import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import { useCart } from '@/context/CartContext';


const products = [
    {
        id: 1,
        category: 'Tech',
        name: 'Mystery Tech Box',
        image: '/mysteryBox/images/mysterybox-tech.webp',
        price: 'Surprise!',
        description: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
        detailDescription: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
    },
    {
        id: 2,
        category: 'Fashion',
        name: 'Mystery Fashion Box',
        image: '/mysteryBox/images/mysterybox-fashion.webp',
        price: 'Surprise!',
        description: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker',
        detailDescription: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker.',
    },
    {
        id: 3,
        category: 'Food',
        name: 'Mystery Food Box',
        image: '/mysteryBox/images/placeholder-box1.webp',
        price: 'Surprise!',
        description: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
        detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
    },
    {
        id: 4,
        category: 'Deluxe',
        name: 'Mystery Deluxe Box',
        image: '/mysteryBox/images/mysterybox-deluxe.webp',
        price: 'Surprise!',
        description: 'Ein Hauch von Luxus und Überraschung.',
        detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
    },
    {
        id: 5,
        category: 'Mega ',
        name: 'Mystery Mega Box',
        image: '/mysteryBox/images/mysterybox-mega.webp',
        price: 'Surprise!',
        description: 'Große Überraschungen für große Freude.',
        detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
    },
    {
        id: 6,
        category: 'Ultimate',
        name: 'Mystery Ultimate Box',
        image: '/mysteryBox/images/mysterybox-ultimate.webp',
        price: 'Surprise!',
        description: 'Die ultimative Überraschungserfahrung.',
        detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
    },
    {
        id: 7,
        category: 'XXL',
        name: 'XXL Premium Mystery Box',
        price: 99.99,
        originalPrice: 279.99,
        image: '/mysteryBox/images/mysterybox-premium1.webp',
        description: '10 KG Überraschungsbox',
        detailDescription: '10 KG Überraschungsbox',
    },
    {
        id: 8,
        category: 'Starter',
        name: 'Starter Mystery Box',
        price: 39.99,
        originalPrice: 120.00,
        image: '/mysteryBox/images/starterbox.webp',
        description: '3 KG Überraschungskarton',
        detailDescription: '3 KG Überraschungskarton.',
    },
    {
        id: 9,
        category: 'Individuell',
        name: 'Individuelle Mystery Box',
        price: 'Individuell',
        offer: 'Flexible',
        image: '/mysteryBox/images/starterbox.webp',
        description: 'individuell anpassbar. Sprich mit uns.',
        detailDescription: 'individuell anpassbar. Sprich mit uns.',
    }
];

export default function ShopPage() {
    const { addItem, setIsCartOpen } = useCart();

    const handleAddToCart = (product: any) => {
        if (product && typeof product.price === 'number') {
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

    return (
        <Layout>
            <main className="min-h-screen">
                <section className="relative py-12 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8 text-white">
                            Unsere Mystery Boxes
                        </h1>
                        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 md:mb-16 leading-relaxed">
                            Entdecke unsere kuratierte Auswahl an Überraschungspaketen.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

                            {products.map((product) => (
                                <div key={product.id} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100/20">
                                    <Link href={product.id === 9 ? '/kontakt' : `/shop/${product.id}`}>
                                        <div className="relative h-48 sm:h-64 overflow-hidden">
                                            <Image
                                                fill
                                                src={product.image}
                                                alt={product.name}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                                                priority={product.id <= 3}
                                                quality={85}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <span className="text-white text-lg font-medium">Mehr Details</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                                                    {product.category}
                                                </span>
                                                <div className="text-right">
                                                    {product.id === 9 ? (
                                                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                                            Individuell
                                                        </span>
                                                    ) : (
                                                        <>
                                                            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                                                {typeof product.price === 'number' ? `${product.price} €` : product.price}
                                                            </span>
                                                            {product.originalPrice && (
                                                                <span className="ml-2 text-sm text-gray-400 line-through">
                                                                    {product.originalPrice} €
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{product.name}</h2>
                                            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                                            </div>
                                        </Link>
                                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                                            <div className="flex flex-col gap-3">
                                                <Link 
                                                    href={product.id === 9 ? '/kontakt' : `/shop/${product.id}`}
                                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 rounded-2xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2 font-medium"
                                                >
                                                    <span>{product.id === 9 ? 'Angebot anfordern' : 'Jetzt entdecken'}</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                                {product.id !== 9 && typeof product.price === 'number' && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleAddToCart(product);
                                                        }}
                                                        className="w-full bg-white border-2 border-indigo-600 text-indigo-600 py-3 md:py-4 rounded-2xl hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-lg"
                                                    >
                                                        <span>In den Warenkorb</span>
                                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

