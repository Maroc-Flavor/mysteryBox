'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navigation() {
	const { totalItems, setIsCartOpen } = useCart();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="relative flex items-center gap-2">
			{/* Mobile menu button and Cart */}
			<div className="flex items-center gap-2">
				<button 
					className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
					</svg>
				</button>

				<button
					onClick={() => setIsCartOpen(true)}
					className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
					aria-label="Open cart"
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

			{/* Navigation Links */}
			<div 
				className={`${
					isMenuOpen ? 'block' : 'hidden'
				} lg:block absolute top-[calc(100%+0.5rem)] -right-4 lg:right-0 lg:top-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 min-w-[200px] rounded-lg overflow-hidden`}
			>
				<ul className="py-2 lg:py-0 lg:flex lg:space-x-8">
					<li>
						<Link 
							href="/" 
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100 lg:hover:bg-transparent hover:text-indigo-600 transition-colors" 
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link 
							href="/uber-uns" 
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100 lg:hover:bg-transparent hover:text-indigo-600 transition-colors" 
							onClick={() => setIsMenuOpen(false)}
						>
							Über uns
						</Link>
					</li>
					<li>
						<Link 
							href="/shop" 
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100 lg:hover:bg-transparent hover:text-indigo-600 transition-colors" 
							onClick={() => setIsMenuOpen(false)}
						>
							Shop
						</Link>
					</li>
					<li>
						<Link 
							href="/kontakt" 
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100 lg:hover:bg-transparent hover:text-indigo-600 transition-colors" 
							onClick={() => setIsMenuOpen(false)}
						>
							Kontakt
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

