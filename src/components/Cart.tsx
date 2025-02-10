'use client';

import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CartProps {
	onClose?: () => void;
}

export default function Cart({ onClose }: CartProps) {
	const { items, removeItem, updateQuantity, totalPrice } = useCart();
	const [countdown, setCountdown] = useState(900); // 15 minutes in seconds

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown(prev => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
	};

	return (
		<AnimatePresence>
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
			onClick={(e) => {
				if (e.target === e.currentTarget && onClose) {
					onClose();
				}
			}}
		>
			<motion.div
				initial={{ x: '100%' }}
				animate={{ x: 0 }}
				exit={{ x: '100%' }}
				className="bg-white w-full max-w-md h-full shadow-xl"
			>
				<div className="p-6 h-full flex flex-col">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-2xl font-bold text-gray-900">Warenkorb</h2>
						<button onClick={onClose} className="text-gray-500 hover:text-gray-700">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					{countdown > 0 && (
						<div className="bg-indigo-100 p-4 rounded-lg mb-6">
							<p className="text-indigo-800 font-medium">
								Dein Warenkorb ist reserviert für: {formatTime(countdown)}
							</p>
						</div>
					)}

					{items.length === 0 ? (
						<div className="flex-grow flex items-center justify-center">
							<p className="text-gray-500">Dein Warenkorb ist leer</p>
						</div>
					) : (
						<>
							<div className="flex-grow overflow-auto">
								<AnimatePresence>
									{items.map((item) => (
										<motion.div
											key={item.id}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-4"
										>
											<Image
												src={item.image}
												alt={item.name}
												width={80}
												height={80}
												className="rounded-lg object-cover"
											/>
											<div className="flex-grow">
												<h3 className="font-medium text-gray-900">{item.name}</h3>
												<p className="text-indigo-600 font-bold">{item.price} €</p>
												<div className="flex items-center gap-2 mt-2">
													<button
														onClick={() => updateQuantity(item.id, item.quantity - 1)}
														className="text-gray-500 hover:text-gray-700"
													>
														-
													</button>
													<span className="font-medium text-gray-900">{item.quantity}</span>
													<button
														onClick={() => updateQuantity(item.id, item.quantity + 1)}
														className="text-gray-500 hover:text-gray-700"
													>
														+
													</button>
												</div>
											</div>
											<button
												onClick={() => removeItem(item.id)}
												className="text-red-500 hover:text-red-700"
											>
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</button>
										</motion.div>
									))}
								</AnimatePresence>
							</div>
							<div className="border-t pt-4 mt-4">
								<div className="flex justify-between items-center mb-4">
									<span className="font-medium text-green-900">Gesamt:</span>
									<span className="text-2xl font-bold text-green-900">{totalPrice.toFixed(2)} €</span>
								</div>
								<Link
									href="/checkout"
									className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
								>
									Zur Kasse
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
							</div>
						</>
					)}
				</div>
			</motion.div>
		</motion.div>
	</AnimatePresence>
);
}
