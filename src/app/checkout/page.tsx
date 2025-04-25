'use client';

import { useCart } from '@/context/CartContext';
import { useState, useEffect, useCallback } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Update import
import { PayPalCheckoutButton } from '@/components/payment';
import { shippingData, type ShippingOption, type CountryShipping } from '@/data/shipping';

interface CountryFlagProps {
	countryCode: string;
}

const CountryFlag = ({ countryCode }: CountryFlagProps) => {
	const [error, setError] = useState(false);

	if (error) {
		return <span className="inline-block w-6 h-4 bg-gray-200 rounded mr-2" />;
	}

	return (
		<Image
			src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
			alt={`${countryCode} flag`}
			width={24}
			height={16}
			className="inline-block align-middle mr-2"
			style={{ verticalAlign: '-2px' }}
			loading="lazy"
			onError={() => setError(true)}
		/>
	);
};


const steps = [
	{
		id: 1,
		name: 'Lieferadresse',
		icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' // Haus-Icon
	},
	{
		id: 2,
		name: 'Versand',
		icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' // LKW-Icon
  },
	{
		id: 3,
		name: 'Bestätigung',
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' // Original Bestätigungs-Icon
	}
];


export default function Checkout() {
	const router = useRouter();
	const { items, totalPrice, clearCart } = useCart();
	const [step, setStep] = useState(1);
	const [selectedCountry, setSelectedCountry] = useState<CountryShipping>(() => {
		// Initialize with the first country from shipping data
		return shippingData[0];
	});

	const [selectedShipping, setSelectedShipping] = useState<ShippingOption>(() => {
		// Initialize with the first shipping option of the selected country
		return shippingData[0].options[0];
	});

	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		postalCode: '',
		country: selectedCountry.name,
		tiktokUsername: '',
		isOver18: false,
		acceptTerms: false
	});

	const [finalPrice, setFinalPrice] = useState(totalPrice);

	// Update final price when shipping or total price changes
	useEffect(() => {
		if (selectedShipping) {
			// Wenn nur eine Bieternummer im Warenkorb ist, keine Versandkosten berechnen
			const hasOnlyBidderNumber = items.length === 1 && items[0].id === 10;
			setFinalPrice(hasOnlyBidderNumber ? totalPrice : totalPrice + selectedShipping.price);
		}
	}, [totalPrice, selectedShipping, items]);

	// Form validation with error messages
	const [formErrors, setFormErrors] = useState<Record<string, string>>({});

	const validateField = useCallback((name: string, value: string | boolean): string => {
		if (typeof value === 'boolean') {
			if (name === 'isOver18' && !value) return 'Sie müssen mindestens 18 Jahre alt sein';
			if (name === 'acceptTerms' && !value) return 'Sie müssen die AGB akzeptieren';
			return '';
		}

		if (!value.toString().trim()) return 'Pflichtfeld';

		switch (name) {
			case 'email':
				return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toString()) 
					? 'Bitte geben Sie eine gültige E-Mail-Adresse ein' 
					: '';
			case 'postalCode':
				return !/^\d{5}$/.test(value.toString()) 
					? 'Die PLZ muss aus 5 Ziffern bestehen' 
					: '';
			case 'firstName':
			case 'lastName':
				return value.toString().length < 2 
					? 'Muss mindestens 2 Zeichen lang sein' 
					: '';
			case 'address':
				return value.toString().length < 5 
					? 'Bitte geben Sie eine vollständige Adresse ein' 
					: '';
			case 'city':
				return value.toString().length < 2 
					? 'Bitte geben Sie einen gültigen Ort ein' 
					: '';
			case 'tiktokUsername':
				return value.toString().length < 2 
					? 'Bitte geben Sie Ihren TikTok-Username ein' 
					: '';
			default:
				return '';
		}
	}, []);

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		const error = validateField(name, value);
		setFormErrors(prev => ({ ...prev, [name]: error }));
	}, [validateField]);

	const handleCountryChange = useCallback((countryId: string) => {
		try {
			if (!shippingData || shippingData.length === 0) {
				throw new Error('Keine Versanddaten verfügbar');
			}

			const country = shippingData.find(c => c.id === countryId);
			if (!country) {
				throw new Error('Ungültige Länderauswahl');
			}

			if (!country.options || country.options.length === 0) {
				throw new Error('Keine Versandoptionen für dieses Land verfügbar');
			}

			setSelectedCountry(country);
			const defaultShipping = country.options[0];
			setSelectedShipping(defaultShipping);
			setFormData(prev => ({ ...prev, country: country.name }));
			setFormErrors(prev => ({ ...prev, country: '' }));
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten';
			setFormErrors(prev => ({ ...prev, country: errorMessage }));
		}
	}, []);

	const handleShippingChange = useCallback((option: ShippingOption) => {
		setSelectedShipping(option);
		setFormErrors(prev => ({ ...prev, shipping: '' }));
	}, []);

	// Effect to update form errors when shipping changes
	useEffect(() => {
		if (!selectedShipping) {
			setFormErrors(prev => ({ ...prev, shipping: 'Bitte wählen Sie eine Versandoption' }));
		}
	}, [selectedShipping]);

	const validateForm = useCallback(() => {
		const fields = ['email', 'firstName', 'lastName', 'address', 'city', 'postalCode'];
		const errors: Record<string, string> = {};
		let isValid = true;

		// Wenn es sich um eine Bieternummer handelt, zusätzliche Felder validieren
		const isBidderNumber = items.some(item => item.id === 10);
		
		if (isBidderNumber) {
			// Prüfen, ob mehr als eine Bieternummer im Warenkorb ist
			const bidderNumberCount = items.filter(item => item.id === 10).length;
			if (bidderNumberCount > 1) {
				errors.bidderNumber = 'Sie können nur eine Bieternummer erwerben.';
				isValid = false;
			}

			if (!formData.tiktokUsername) {
				errors.tiktokUsername = 'Bitte geben Sie Ihren TikTok-Username ein';
				isValid = false;
			}
			if (!formData.isOver18) {
				errors.isOver18 = 'Sie müssen mindestens 18 Jahre alt sein';
				isValid = false;
			}
			if (!formData.acceptTerms) {
				errors.acceptTerms = 'Sie müssen die AGB akzeptieren';
				isValid = false;
			}
		}

		fields.forEach(field => {
			const error = validateField(field, formData[field as keyof typeof formData]);
			if (error) {
				errors[field] = error;
				isValid = false;
			}
		});

		setFormErrors(errors);
		return isValid;
	}, [formData, validateField, items]);

	const handleSubmit = useCallback((e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			// Wenn es sich um eine Bieternummer handelt, direkt zum Bestätigungsschritt springen
			const isBidderNumber = items.some(item => item.id === 10);
			setStep(isBidderNumber ? 3 : 2);
		}
	}, [validateForm, items]);

	const handleOrderComplete = useCallback(() => {
		const orderData = {
			items,
			customerInfo: formData,
			shippingMethod: selectedShipping,
			totalPrice: finalPrice
		};
		
		sessionStorage.setItem('orderComplete', 'true');
		sessionStorage.setItem('orderData', JSON.stringify(orderData));
		clearCart();
		router.push('/checkout/success');
	}, [clearCart, router, items, formData, selectedShipping, finalPrice]);




	return (
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
												className={`w-7 h-7 transition-all duration-700 transform group-hover:scale-110 ${step >= s.id ? 'text-white filter drop-shadow-md' : 'text-gray-400'
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
														className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500"
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
														className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500"
													/>
												</div>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													E-Mail
												</label>
												<div className="space-y-1">
													<input
														type="email"
														name="email"
														required
														value={formData.email}
														onChange={handleInputChange}
														className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 ${
															formErrors.email ? 'border-red-500' : ''
														}`}
													/>
													{formErrors.email && (
														<p className="text-red-500 text-sm">{formErrors.email}</p>
													)}
												</div>
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
													className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500"
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
														className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500"
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
														className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500"
													/>
												</div>
											</div>
											{/* Additional fields for bidder number */}
											{items.some(item => item.id === 10) && (
												<div className="space-y-4 mt-8 pt-8 border-t border-gray-200">
													<h3 className="text-xl font-bold text-gray-900">Bieternummer-Registrierung</h3>
													
													<div>
														<label className="block text-sm font-medium text-gray-700 mb-1">
															TikTok Username
														</label>
														<input
															type="text"
															name="tiktokUsername"
															required
															value={formData.tiktokUsername}
															onChange={handleInputChange}
															className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500"
														/>
													</div>

													<div className="space-y-4">
														<div className="flex items-center">
															<input
																type="checkbox"
																name="isOver18"
																checked={formData.isOver18}
																onChange={(e) => {
																	setFormData(prev => ({ ...prev, isOver18: e.target.checked }));
																	setFormErrors(prev => ({ ...prev, isOver18: '' }));
																}}
																className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
															/>
															<label className="ml-2 block text-sm text-gray-700">
																Ich bestätige, dass ich mindestens 18 Jahre alt bin
															</label>
														</div>

														<div className="flex items-center">
															<input
																type="checkbox"
																name="acceptTerms"
																checked={formData.acceptTerms}
																onChange={(e) => {
																	setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }));
																	setFormErrors(prev => ({ ...prev, acceptTerms: '' }));
																}}
																className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
															/>
															<label className="ml-2 block text-sm text-gray-700">
																Ich akzeptiere die <a href="/agb" className="text-indigo-600 hover:text-indigo-500">AGB</a>
															</label>
														</div>
													</div>

													{formErrors.isOver18 && (
														<p className="text-red-500 text-sm">{formErrors.isOver18}</p>
													)}
													{formErrors.acceptTerms && (
														<p className="text-red-500 text-sm">{formErrors.acceptTerms}</p>
													)}
												</div>
											)}
											<button
												type="submit"
												className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
											>
												Weiter zur Bestätigung
											</button>
										  </form>
										)}

										{step === 2 && !items.some(item => item.id === 10) && (
										  <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-6">
											<h2 className="text-2xl font-bold text-gray-900 mb-6">Versandoptionen</h2>
											<div className="space-y-4">
											  <div>
												<label className="block text-sm font-medium text-gray-900 mb-2">Land</label>
												<div className="relative">
												  <select
													className="w-full px-10 py-2 border rounded-lg focus:ring-2 text-gray-900 focus:ring-indigo-500 appearance-none"
													value={selectedCountry.id}
													onChange={(e) => handleCountryChange(e.target.value)}
												  >
													{shippingData.map((country) => (
													  <option key={country.id} value={country.id}>
														{country.name}
													  </option>
													))}
												  </select>
												  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
													<CountryFlag countryCode={selectedCountry.id.toLowerCase()} />
												  </div>

												  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
													<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
													  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
													</svg>
												  </div>
												</div>
											  </div>

											  <div className="space-y-4 mt-6">
												{selectedCountry.options.map((option) => (
												  <div
													key={option.id}
													className={`border border-gray-700 rounded-lg p-4 cursor-pointer transition-all transform hover:scale-[1.01] ${
													  selectedShipping.id === option.id
														? 'border-indigo-500 bg-violet-300/50 shadow-md'
														: 'hover:border-gray-600 hover:shadow-sm'
													}`}
													onClick={() => handleShippingChange(option)}
												  >
													<div className="flex justify-between items-center">
													  <div className="flex-grow">
														<h3 className="font-medium text-gray-900">{option.name}</h3>
														<p className="text-sm text-gray-600">{option.description}</p>
														<p className="text-sm text-gray-500 mt-1">
														  <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full text-xs">
															{option.estimatedDays}
														  </span>
														</p>
													  </div>
													  <div className="flex items-center ml-4">
														<span className="font-bold text-lg text-indigo-600">{option.price.toFixed(2)} €</span>
														{selectedShipping.id === option.id && (
														  <div className="ml-4 h-5 w-5 text-indigo-600 animate-checkmark">
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
											  <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
												<div className="flex justify-between items-center">
												  <span className="text-gray-700">Aktueller Versandpreis:</span>
												  <span className="font-bold text-indigo-600">{selectedShipping.price.toFixed(2)} €</span>
												</div>
											  </div>
											</div>
											<button
											  type="submit"
											  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
											>
											  Weiter zur Bestätigung
											</button>
										  </form>
										)}

										{step === 2 && items.some(item => item.id === 10) && (
										  <div className="text-center py-8">
											<h2 className="text-2xl font-bold text-gray-900 mb-4">Bieternummer-Registrierung</h2>
											<p className="text-gray-600 mb-6">Ihre Bieternummer wird Ihnen nach erfolgreicher Zahlung per E-Mail zugesendet.</p>
											<button
											  onClick={() => setStep(3)}
											  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-colors"
											>
											  Weiter zur Zahlung
											</button>
										  </div>
										)}

										{step === 3 && (
										  <div className="space-y-6">
											<h2 className="text-2xl font-bold mb-6 text-gray-900">Bestellübersicht</h2>
											<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6">
											  <p className="text-gray-700 mb-4">Gesamtbetrag: <span className="font-bold text-xl">{finalPrice.toFixed(2)} €</span></p>
											  {!items.some(item => item.id === 10) && (
												<>
												  <p className="text-gray-600 mb-4">Ihre Bestellung wird an folgende Adresse geliefert:</p>
												  <div className="text-gray-700">
													<p>{formData.firstName} {formData.lastName}</p>
													<p>{formData.address}</p>
													<p>{formData.postalCode} {formData.city}</p>
													<p>{formData.country}</p>
												  </div>
												</>
											  )}
											  {items.some(item => item.id === 10) && (
												<div className="text-gray-700">
												  <p className="mb-2">TikTok Username: {formData.tiktokUsername}</p>
												  <p>Ihre Bieternummer wird Ihnen nach erfolgreicher Zahlung per E-Mail zugesendet.</p>
												</div>
											  )}
											</div>
											<div className="space-y-4">
											  <PayPalCheckoutButton 
												amount={finalPrice}
												orderData={{
												  items,
												  customerInfo: formData,
												  shippingMethod: selectedShipping
												}}
												onSuccess={handleOrderComplete}
											  />
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

									{/* Versandkosten nur anzeigen, wenn keine Bieternummer im Warenkorb ist */}
									{!items.some(item => item.id === 10) && (
										<div className="flex justify-between items-center mb-2 text-gray-700">
											<span>Versand</span>
											<span>{selectedShipping.price.toFixed(2)} €</span>
										</div>
									)}
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
	);

}