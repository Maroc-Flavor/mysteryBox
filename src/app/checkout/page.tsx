'use client';

import { useCart } from '@/context/CartContext';
import Layout from '@/components/layout';
import { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from 'next/image';
import { shippingData, type ShippingOption, type CountryShipping } from '@/data/shipping';
import { motion } from 'framer-motion';

const steps = [
	{ id: 1, name: 'Lieferadresse' },
	{ id: 2, name: 'Versand' },
	{ id: 3, name: 'Zahlung' }
];

export default function Checkout() {
	const { items, totalPrice, clearCart } = useCart();
	const [step, setStep] = useState(1);
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
		clientId: "YOUR_PAYPAL_CLIENT_ID",
		currency: "EUR",
		intent: "capture",
	};

	return (
		<Layout>
			<main className="min-h-screen bg-gray-50 py-12">
				{/* Process Line */}
				<div className="max-w-7xl mx-auto px-4 mb-8">
					<div className="flex justify-between">
						{steps.map((s, idx) => (
							<div key={s.id} className="flex items-center">
								<div className={`flex items-center justify-center w-10 h-10 rounded-full ${
									step >= s.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
								}`}>
									{s.id}
								</div>
								<div className="ml-4">
									<p className="text-sm font-medium text-gray-900">{s.name}</p>
								</div>
								{idx < steps.length - 1 && (
									<div className={`flex-1 h-0.5 mx-4 ${
										step > s.id ? 'bg-indigo-600' : 'bg-gray-200'
									}`}></div>
								)}
							</div>
						))}
					</div>
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
											<h2 className="text-2xl font-bold mb-6">Versandoptionen</h2>
											<div className="space-y-4">
											  <div>
												<label className="block text-sm font-medium text-gray-700 mb-2">Land</label>
												<select
												  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
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
										  <>
											<h2 className="text-2xl font-bold mb-6">Zahlung</h2>
											<PayPalScriptProvider options={initialOptions}>
											  <PayPalButtons
												createOrder={(data, actions) => {
												  return actions.order.create({
													purchase_units: [
													  {
														amount: {
														  value: finalPrice.toFixed(2),
														  currency_code: "EUR"
														},
													  },
													],
												  });
												}}
												onApprove={(data, actions) => {
												  return actions.order!.capture().then(() => {
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
								<span>{selectedShipping.price.toFixed(2)} €</span>
							  </div>
							  <div className="flex justify-between items-center text-lg font-bold">
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