'use client';

import Image from 'next/image';
import Layout from '@/components/layout';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
	description: string;
}

const products: Product[] = [
	{
		id: 1,
		name: 'Mystery Tech Box',
		price: 99.99,
		image: '/mysteryBox/mysterybos-tech.jpg',
		description: 'What tech treasures await? Only one kind of person will find out: YOU!'
	},
	{
		id: 2,
		name: 'Mystery Fashion Box',
		price: 79.99,
		image: '/mysteryBox/mysterybox-fashion.jpg',
		description: 'Unleash your inner fashion icon! Prepare for a stylish surprise.'
	},
	{
		id: 3,
		name: 'Mystery Food Box',
		price: 49.99,
		image: '/mysteryBox/placeholder-box1.jpg',
		description: 'A culinary adventure awaits! Taste the unexpected.'
	},
	{
		id: 4,
		name: 'Mystery Deluxe Box',
		price: 149.99,
		image: '/mysteryBox/mysterybox-deluxe.jpeg',
		description: 'Ein Hauch von Luxus und Überraschung.'
	},
	{
		id: 5,
		name: 'Mystery Mega Box',
		price: 199.99,
		image: '/mysteryBox/mysterybox-mega.jpg',
		description: 'Große Überraschungen für große Freude.'
	},
	{
		id: 6,
		name: 'Mystery Ultimate Box',
		price: 299.99,
		image: '/mysteryBox/mysterybox-ultimate.jpg',
		description: 'Die ultimative Überraschungserfahrung.'
	}
];

export default function Shop() {
	const { addItem } = useCart();

	const handleAddToCart = (product: any) => {
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			quantity: 1
		});
	};

	return (
		<Layout>
			<main className="min-h-screen py-12 px-4">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						Entdecke unsere Mystery Boxes
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{products.map((product) => (
							<motion.div
								key={product.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
							>
								<Link href={`/shop/${product.id}`}>
									<div className="relative h-72">
										<Image
											src={product.image}
											alt={product.name}
											fill
											style={{ objectFit: 'cover' }}
											className="transition-transform duration-300 hover:scale-105"
										/>
									</div>
								</Link>
								<div className="p-6">
									<h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
									<p className="text-gray-600 mb-4">{product.description}</p>
									<div className="flex items-center justify-between">
										<span className="text-2xl font-bold text-indigo-600">{product.price} €</span>
										<button
											onClick={() => handleAddToCart(product)}
											className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
										>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
											</svg>
											In den Warenkorb
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}

