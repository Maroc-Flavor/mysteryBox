'use client';

import { useCart } from '@/context/CartContext';

export default function CartButton() {
	const { totalItems, setIsCartOpen } = useCart();

	return (
		<button
			onClick={() => setIsCartOpen(true)}
			className="group relative p-2.5 rounded-xl hover:bg-[#C4A484]/10 transition-all duration-300"
			aria-label="Warenkorb öffnen"
		>
			{/* Background effect */}
			<div className="absolute inset-0 rounded-xl border border-[#C4A484]/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
			
			{/* Cart icon */}
			<div className="relative">
				<svg 
					className="w-5 h-5 text-gray-700 transition-colors group-hover:text-[#C4A484]" 
					fill="none" 
					stroke="currentColor" 
					viewBox="0 0 24 24"
				>
					<path 
						strokeLinecap="round" 
						strokeLinejoin="round" 
						strokeWidth={2} 
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
					/>
				</svg>
				
				{/* Item count badge */}
				{totalItems > 0 && (
					<span className="absolute -top-2 -right-2 bg-[#C4A484] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
						{totalItems}
					</span>
				)}
				
				{/* Hover tooltip */}
				<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm text-[#C4A484] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-[#C4A484]/20">
					Warenkorb öffnen
				</span>
			</div>
		</button>
	);
}