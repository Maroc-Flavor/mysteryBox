'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Cart from './Cart';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Navigation() {
	const { totalItems } = useCart();
	const [isCartOpen, setIsCartOpen] = useState(false);

	return (
		<>
			<nav className="backdrop-blur-xl bg-white/80 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center py-4">
						<ul className="flex space-x-8">
							<li>
								<Link href="/" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors flex items-center gap-2">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
									</svg>
									Home
								</Link>
							</li>
							<li>
								<Link href="/uber-uns" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors flex items-center gap-2">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Über uns
								</Link>
							</li>
							<li>
								<Link href="/shop" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors flex items-center gap-2">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
									</svg>
									Shop
								</Link>
							</li>
							<li>
								<Link href="/kontakt" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors flex items-center gap-2">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									Kontakt
								</Link>
							</li>
						</ul>
						<button 
							onClick={() => setIsCartOpen(true)} 
							className="relative group p-2 hover:bg-gray-100 rounded-full transition-colors"
						>
							<div className="relative">
								<svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
								{totalItems > 0 && (
									<span className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
										{totalItems}
									</span>
								)}
							</div>
						</button>
					</div>
				</div>
			</nav>
			<AnimatePresence>
				{isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
			</AnimatePresence>
		</>
	);
}