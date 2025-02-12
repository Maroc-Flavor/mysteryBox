'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CartButton from './CartButton';


export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
			isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
		}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Hauptnavigation */}
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="relative flex items-center">
							<div className="relative w-[60px] h-[24px] md:w-[100px] md:h-[40px] bg-white/80 rounded-full p-1">
								<Image
									src="/mysteryBox/images/logo.jpg"
									alt="Wundertüten.de"
									fill
									className="object-contain rounded-full transition-all duration-300 hover:opacity-90"
									priority
									sizes="(max-width: 768px) 60px, 100px"
									quality={85}
									style={{ objectFit: 'contain' }}
								/>



							</div>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex lg:items-center lg:space-x-8">
						<Link 
							href="/" 
							className="text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50"
						>
							Home
						</Link>
						<Link 
							href="/uber-uns" 
							className="text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50"
						>
							Über uns
						</Link>
						<Link 
							href="/shop" 
							className="text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50"
						>
							Shop
						</Link>
						<Link 
							href="/kontakt" 
							className="text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50"
						>
							Kontakt
						</Link>
					</div>

					{/* Right side buttons */}
					<div className="flex items-center gap-4">
						{/* Mobile menu button */}
						<button 
							className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100/50 transition-colors"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
								/>
							</svg>
						</button>
						<Link
							href="/shop"
							className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
						>
							Jetzt entdecken
						</Link>
						<CartButton />
					</div>
				</div>
			</div>

			{/* Mobile menu - Now absolute instead of part of the fixed header */}
			<div className={`lg:hidden absolute w-full transition-all duration-300 ${
				isMenuOpen 
					? 'opacity-100 translate-y-0' 
					: 'opacity-0 -translate-y-2 pointer-events-none'
			}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg border-t border-gray-200">
					<Link 
						href="/" 
						className="block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Home
					</Link>
					<Link 
						href="/uber-uns" 
						className="block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Über uns
					</Link>
					<Link 
						href="/shop" 
						className="block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Shop
					</Link>
					<Link 
						href="/kontakt" 
						className="block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Kontakt
					</Link>
				</div>
			</div>
		</nav>
	);
}