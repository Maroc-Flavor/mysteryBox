'use client';

import { useCart } from '@/context/CartContext';
import Layout from '@/components/layout';
import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from 'next/image';

export default function Checkout() {
	const { items, totalPrice, clearCart } = useCart();
	const [step, setStep] = useState(1);
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStep(2);
	};

	const initialOptions = {
		clientId: "YOUR_PAYPAL_CLIENT_ID",
		currency: "EUR",
		intent: "capture",
	};

	return (
		<Layout>
			<main className="min-h-screen bg-gray-50 py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-8">
						{/* Checkout Steps */}
						<div className="md:col-span-2">
							<div className="bg-white p-6 rounded-xl shadow-lg">
								{step === 1 ? (
									<>
										<h2 className="text-2xl font-bold mb-6">Lieferadresse</h2>
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
									</>
								) : (
									<>
										<h2 className="text-2xl font-bold mb-6">Zahlung</h2>
										<PayPalScriptProvider options={initialOptions}>
											<PayPalButtons
												createOrder={(data, actions) => {
													return actions.order.create({
														purchase_units: [
															{
																amount: {
																	value: totalPrice.toString(),
																	currency_code: "EUR"
																},
															},
														],
													});
												}}
												onApprove={(data, actions) => {
													return actions.order!.capture().then((details) => {
														clearCart();
														// Handle successful payment
													});
												}}
											/>
										</PayPalScriptProvider>
									</>
								)}
							</div>
						</div>

						{/* Order Summary */}
						<div className="bg-white p-6 rounded-xl shadow-lg h-fit">
							<h2 className="text-2xl font-bold mb-6">Zusammenfassung</h2>
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
											<h3 className="font-medium">{item.name}</h3>
											<p className="text-gray-600">Anzahl: {item.quantity}</p>
											<p className="text-indigo-600 font-bold">{item.price} €</p>
										</div>
									</div>
								))}
								<div className="border-t pt-4 mt-4">
									<div className="flex justify-between items-center mb-2">
										<span>Zwischensumme</span>
										<span>{totalPrice.toFixed(2)} €</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span>Versand</span>
										<span>5,99 €</span>
									</div>
									<div className="flex justify-between items-center text-lg font-bold">
										<span>Gesamt</span>
										<span>{(totalPrice + 5.99).toFixed(2)} €</span>
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