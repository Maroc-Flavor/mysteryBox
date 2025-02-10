'use client';

import { useCart } from '@/context/CartContext';
import Layout from '@/components/layout';
import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from 'next/image';
import { shippingData, type ShippingOption, type CountryShipping } from '@/data/shipping';


const steps = [
	{ 
		id: 1, 
		name: 'Lieferadresse', 
		icon: 'M18.364 17.364A9 9 0 007.636 6.636M18.364 17.364A9 9 0 119 3a9 9 0 019 9 9 9 0 010 .364M15 9l-3-3m0 0l-3 3m3-3v12'
	},
	{ 
		id: 2, 
		name: 'Versand', 
		icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
	},
	{ 
		id: 3, 
		name: 'Zahlung', 
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
	}
];

export default function Checkout() {
	const { items, totalPrice, clearCart } = useCart();
	const [step, setStep] = useState(1);
	const [isProcessing, setIsProcessing] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState<CountryShipping>(shippingData[0]);
	const [selectedShipping, setSelectedShipping] = useState<ShippingOption>(shippingData[0].options[0]);
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		postalCode: '',
		country: 'Deutschland'
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleCountryChange = (countryId: string) => {
		const country = shippingData.find(c => c.id === countryId) || shippingData[0];
		setSelectedCountry(country);
		setSelectedShipping(country.options[0]);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStep(2);
	};

	const handleShippingSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStep(3);
	};

	const finalPrice = totalPrice + selectedShipping.price;

	const initialOptions = {
		clientId: "AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS",
		currency: "EUR",
		intent: "capture",
	};

	return (
		<Layout>
			<main className="min-h-screen bg-gray-50 py-12">
				<div className="max-w-4xl mx-auto px-4 mb-12">
				  <div className="relative">
					{/* Progress Line */}
					<div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 rounded-full overflow-hidden">
					  <div 
						className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
						style={{ 
						  width: `${((step - 1) / (steps.length - 1)) * 100}%`,
						  filter: 'blur(0.5px)'
						}}
					  />
					</div>
					
					{/* Steps */}
					<div className="relative flex justify-between">
					  {steps.map((s, _idx) => (
						<div key={s.id} className="flex items-center">
						  <div className="flex flex-col items-center">
							<div 
							  className={`
								relative z-10 flex items-center justify-center w-16 h-16 rounded-full 
								transition-all duration-700 ease-out transform
								${step >= s.id 
								  ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 scale-110 shadow-[0_0_15px_rgba(99,102,241,0.3)] ring-4 ring-purple-100' 
								  : 'bg-white border-2 border-gray-300 hover:border-indigo-300 hover:shadow-md'
								}
								${step === s.id ? 'animate-pulse-subtle' : ''}
								group
							  `}
							>
							  <svg 
								className={`w-7 h-7 transition-all duration-700 transform group-hover:scale-110 ${
								  step >= s.id ? 'text-white filter drop-shadow-md' : 'text-gray-400'
								}`} 
								fill="none" 
								viewBox="0 0 24 24" 
								stroke="currentColor"
							  >
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
							  </svg>
							  
							  {step > s.id && (
								<div className="absolute inset-0 flex items-center justify-center animate-checkmark">
								  <svg 
									className="w-8 h-8 text-white filter drop-shadow-lg" 
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								  >
									<polyline points="20 6 9 17 4 12" />
								  </svg>
								</div>
							  )}
							</div>
							
							<div className={`
							  mt-4 text-sm font-medium transition-all duration-500
							  ${step >= s.id ? 'text-indigo-600 scale-110' : 'text-gray-500'}
							`}>
							  {s.name}
							</div>
						  </div>
						  
						  {_idx < steps.length - 1 && (
							<div className="w-full mx-6">
							  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
								<div 
								  className={`h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-700 ease-in-out transform
									${step > s.id ? 'w-full scale-100' : 'w-0 scale-95'}`}
								></div>
							  </div>
							</div>
						  )}
						</div>
					  ))}
					</div>
				  </div>
				  <style jsx global>{`
					@keyframes pulse-subtle {
					  0%, 100% { transform: scale(1.1); }
					  50% { transform: scale(1.15); }
					}
					@keyframes checkmark {
					  0% { transform: scale(0); opacity: 0; }
					  50% { transform: scale(1.2); }
					  100% { transform: scale(1); opacity: 1; }
					}
					.animate-pulse-subtle {
					  animation: pulse-subtle 2s infinite;
					}
					.animate-checkmark {
					  animation: checkmark 0.5s ease-out forwards;
					}
				  `}</style>
				</div>

				<div className="max-w-7xl mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-8">
						{/* Main Content */}
						<div className="md:col-span-2">
							<div className="bg-white p-6 rounded-xl shadow-lg">
								{step === 1 && (
								  <form onSubmit={handleSubmit} className="space-y-4">

											<div className="grid md:grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-1">
														Vorname
													</label>
													<input
														type="text"
														name="firstName"
														required
														value={formData.firstName}
														onChange={handleInputChange}
														className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-1">
														Nachname
													</label>
													<input
														type="text"
														name="lastName"
														required
														value={formData.lastName}
														onChange={handleInputChange}
														className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
													/>
												</div>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													E-Mail
												</label>
												<input
													type="email"
													name="email"
													required
													value={formData.email}
													onChange={handleInputChange}
													className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Adresse
												</label>
												<input
													type="text"
													name="address"
													required
													value={formData.address}
													onChange={handleInputChange}
													className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
											<div className="grid md:grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-1">
														Stadt
													</label>
													<input
														type="text"
														name="city"
														required
														value={formData.city}
														onChange={handleInputChange}
														className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-1">
														PLZ
													</label>
													<input
														type="text"
														name="postalCode"
														required
														value={formData.postalCode}
														onChange={handleInputChange}
														className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
													/>
												</div>
											</div>
											<button
												type="submit"
												className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
											>
												Weiter zur Zahlung
											</button>
										  </form>
										)}

										{step === 2 && (
										  <form onSubmit={handleShippingSubmit} className="space-y-6">
											<h2 className="text-2xl font-bold test-gray-900 mb-6">Versandoptionen</h2>
											<div className="space-y-4">
											  <div>
												<label className="block text-sm font-medium text-gray-900 mb-2">Land</label>
												<select
												  className="w-full px-4 py-2 border rounded-lg focus:ring-2 text-gray-900 focus:ring-indigo-500"
												  value={selectedCountry.id}
												  onChange={(e) => handleCountryChange(e.target.value)}
												>
												  {shippingData.map((country) => (
													<option key={country.id} value={country.id}>
													  {country.flag} {country.name}
													</option>
												  ))}
												</select>
											  </div>

											  <div className="space-y-4">
												{selectedCountry.options.map((option) => (
												  <div
													key={option.id}
													className={`border rounded-lg p-4 cursor-pointer transition-all ${
													  selectedShipping.id === option.id
														? 'border-indigo-600 bg-indigo-50'
														: 'hover:border-gray-400'
													}`}
													onClick={() => setSelectedShipping(option)}
												  >
													<div className="flex justify-between items-center">
													  <div>
														<h3 className="font-medium">{option.name}</h3>
														<p className="text-sm text-gray-600">{option.description}</p>
														<p className="text-sm text-gray-600">{option.estimatedDays}</p>
													  </div>
													  <div className="flex items-center">
														<span className="font-bold text-lg">{option.price} €</span>
														{selectedShipping.id === option.id && (
														  <div className="ml-4 h-5 w-5 text-indigo-600">
															<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
															  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
															</svg>
														  </div>
														)}
													  </div>
													</div>
												  </div>
												))}
											  </div>
											</div>
											<button
											  type="submit"
											  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
											>
											  Weiter zur Zahlung
											</button>
										  </form>
										)}

										{step === 3 && (
											<div className="space-y-6">
												<h2 className="text-2xl font-bold mb-6 text-gray-900">Zahlung</h2>
												<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6">
													<p className="text-gray-700 mb-4">Gesamtbetrag: <span className="font-bold text-xl">{finalPrice.toFixed(2)} €</span></p>
													<p className="text-gray-600">Bitte wählen Sie Ihre bevorzugte Zahlungsmethode:</p>
												</div>
												<div className="bg-white border border-gray-200 rounded-xl p-6 relative">
													{isProcessing && (
														<div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
															<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
														</div>
													)}
													<PayPalScriptProvider options={initialOptions}>
														<PayPalButtons
															style={{
																color: "blue",
																shape: "rect",
																label: "pay",
																height: 50
															}}
															disabled={isProcessing}
															createOrder={(_, actions) => {
																return actions.order.create({
																	intent: "CAPTURE",
																	purchase_units: [{
																		amount: {
																			value: finalPrice.toFixed(2),
																			currency_code: "EUR"
																		},
																		description: `MysteryBox Bestellung - ${items.map(item => item.name).join(', ')}`
																	}]
																});
															}}
															onApprove={async (_, actions) => {
																try {
																	setIsProcessing(true);
																	const order = await actions.order?.capture();
																	if (order) {
																		const response = await fetch('/api/orders', {
																			method: 'POST',
																			headers: {
																				'Content-Type': 'application/json',
																			},
																			body: JSON.stringify({
																				orderDetails: {
																					items,
																					totalPrice: finalPrice,
																					paypalOrderId: order.id,
																				},
																				customerInfo: formData
																			}),
																		});

																		if (!response.ok) {
																			throw new Error('Failed to process order');
																		}

																		sessionStorage.setItem('orderComplete', 'true');
																		clearCart();
																		window.location.href = '/checkout/success';
																	}
																} catch (error) {
																	console.error('Error processing order:', error);
																	alert('There was an error processing your order. Please try again.');
																} finally {
																	setIsProcessing(false);
																}
															}}
														/>
													</PayPalScriptProvider>
												</div>
											</div>
										)}
							</div>
						</div>

						{/* Order Summary */}
						<div className="bg-white p-6 rounded-xl shadow-lg h-fit">
							<h2 className="text-2xl font-bold mb-6 text-gray-900">Zusammenfassung</h2>
							<div className="space-y-4">
								{items.map((item) => (
									<div key={item.id} className="flex gap-4">
										<div className="relative w-20 h-20">
											<Image
												src={item.image}
												alt={item.name}
												fill
												className="rounded-lg object-cover"
											/>
										</div>
										<div className="flex-grow">
											<h3 className="font-medium text-gray-900">{item.name}</h3>
											<p className="text-gray-600">Anzahl: {item.quantity}</p>
											<p className="text-indigo-600 font-bold">{item.price} €</p>
										</div>
									</div>
								))}
								<div className="border-t pt-4 mt-4">
									<div className="flex justify-between items-center mb-2 text-gray-700">
										<span>Zwischensumme</span>
										<span>{totalPrice.toFixed(2)} €</span>
									</div>
									<div className="flex justify-between items-center mb-2 text-gray-700">
										<span>Versand</span>
										<span>{selectedShipping.price.toFixed(2)} €</span>
									</div>
									<div className="flex justify-between items-center text-lg font-bold text-gray-900">
										<span>Gesamt</span>
										<span>{finalPrice.toFixed(2)} €</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}