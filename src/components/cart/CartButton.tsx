'use client';

import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartButton() {
	const { totalItems, setIsCartOpen } = useCart();

	return (
		<button
			onClick={() => setIsCartOpen(true)}
			className="relative p-2 rounded-xl hover:bg-indigo-50 transition-all duration-300"
			aria-label="Warenkorb öffnen"
		>
			<div className="relative">
				<svg 
					className="w-6 h-6 text-gray-700 transition-colors hover:text-indigo-600" 
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
				
				<AnimatePresence>
					{totalItems > 0 && (
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
						>
							{totalItems}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</button>
	);
}