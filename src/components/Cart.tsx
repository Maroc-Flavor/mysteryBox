'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
	const { items, totalPrice, removeItem, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
	const [countdown, setCountdown] = useState(900); // 15 minutes in seconds

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown(prev => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsCartOpen(false);
			}
		};
		window.addEventListener('keydown', handleEscapeKey);
		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
		};
	}, [setIsCartOpen]);

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
	};

	return (
		<AnimatePresence>
			{isCartOpen && (

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
						onClick={(e) => {
							if (e.target === e.currentTarget) {
								setIsCartOpen(false);
							}
						}}
					>
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg h-full shadow-xl"
						>
							<div className="p-4 sm:p-6 h-full flex flex-col">
								<div className="flex justify-between items-center mb-4 sm:mb-6">
									<h2 className="text-xl sm:text-2xl font-bold text-gray-900">Warenkorb</h2>
									<button 
										onClick={() => setIsCartOpen(false)}
										className="text-gray-500 hover:text-gray-700 p-2"
										aria-label="Warenkorb schließen"
									>
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>

								{countdown > 0 && (
									<div className="bg-indigo-100 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
										<p className="text-sm sm:text-base text-indigo-800 font-medium">
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
										<div className="flex-grow overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
											<AnimatePresence>
												{items.map((item) => (
													<motion.div
														key={item.id}
														initial={{ opacity: 0, y: 20 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{ opacity: 0, y: -20 }}
														className="bg-transparent flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-lg mb-3 sm:mb-4"
													>
														<div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
															<Image
																src={item.image}
																alt={item.name}
																fill
																className="rounded-lg object-cover"
																sizes="(max-width: 640px) 64px, 80px"
																quality={85}
																style={{ objectFit: 'cover' }}
															/>
														</div>
														<div className="flex-grow min-w-0">
															<h3 className="font-medium text-gray-600 truncate">{item.name}</h3>
															<p className="text-indigo-400 font-bold">{item.price} €</p>
															<div className="flex items-center gap-2 mt-2">
																<button
																	onClick={() => updateQuantity(item.id, item.quantity - 1)}
																	className="text-gray-700 hover:text-gray-200 p-1 hover:bg-gray-800 rounded-lg transition-colors"
																	aria-label="Menge reduzieren"
																>
																	<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
																	</svg>
																</button>
																<span className="font-medium text-gray-900 w-8 text-center">{item.quantity}</span>
																<button
																	onClick={() => updateQuantity(item.id, item.quantity + 1)}
																	className="text-gray-700 hover:text-gray-700 p-1"
																	aria-label="Menge erhöhen"
																>
																	<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
																	</svg>
																</button>
															</div>
														</div>
														<button
															onClick={() => removeItem(item.id)}
															className="text-red-500 hover:text-red-700 p-2"
															aria-label="Artikel entfernen"
														>
															<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
															</svg>
														</button>
													</motion.div>
												))}
											</AnimatePresence>
										</div>
										<div className="border-t pt-4 mt-4">
											<div className="flex justify-between items-center mb-4">
												<span className="font-medium text-gray-500">Gesamt:</span>
												<span className="text-xl sm:text-2xl font-bold text-green-600">{totalPrice.toFixed(2)} €</span>
											</div>
											<div className="flex flex-col sm:flex-row gap-3">
												<Link
													href="/shop"
													className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium"
													onClick={() => setIsCartOpen(false)}
												>
													<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
													</svg>
													Weitere Boxen jagen
												</Link>
												<Link
													href="/checkout"
													className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium"
													onClick={() => setIsCartOpen(false)}
												>
													Zur Kasse
													<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
													</svg>
												</Link>
											</div>
										</div>
									</>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		);
	}

