'use client';

import { useEffect, useState } from 'react';
import { useLayout } from '@/context/LayoutContext';
import { FormStatus } from '@/types/layout';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function Kontakt() {
	const { setPageMeta, setLayoutVariant } = useLayout();
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [status, setStatus] = useState<FormStatus>('idle');
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		setPageMeta('Kontakt', 'Kontaktieren Sie uns - MysteryBox Support');
		setLayoutVariant('static');
	}, [setPageMeta, setLayoutVariant]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('loading');
		setMessage('');
		try {
			// Implementiere hier die Formular-Logik
			console.log('Form submitted:', formData);
			setStatus('success');
			setMessage('Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.');
			// Optional: Formular zurücksetzen
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (error) {
			setStatus('error');
			setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	return (
		<main className="relative min-h-screen">
			<section className="relative py-12 overflow-hidden">

				<div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900"></div>
				<div className="container mx-auto px-4 relative z-10">
					<h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8 text-white">
						Kontaktiere uns
					</h1>
					<p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 md:mb-16 leading-relaxed">
						Hast du Interesse an einer individuellen Mystery Box oder andere Fragen? Wir sind hier, um dir zu helfen!
					</p>

					<div className="max-w-2xl mx-auto">
						<div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-lg border border-gray-100">
							<form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
										placeholder="Dein Name"
									/>
								</div>
								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Betreff</label>
									<select
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
									>
										<option value="">Bitte wählen Sie einen Betreff</option>
										<option value="individual">Individuelle Mystery Box Anfrage</option>
										<option value="support">Allgemeine Anfrage</option>
										<option value="other">Sonstiges</option>
									</select>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
										placeholder="deine@email.com"
									/>
								</div>
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										value={formData.message}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
										placeholder="Wie können wir dir helfen?"
									></textarea>
								</div>
								<button
									type="submit"
									disabled={status === 'loading'}
									className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] font-medium flex items-center justify-center space-x-2 disabled:opacity-50"
								>
									<span>{status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}</span>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</button>
							</form>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-12">
							<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
								<h3 className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] font-medium flex items-center justify-center space-x-2">E-Mail Support</h3>
								<p className="mt-6 text-gray-600 text-center font-medium tracking-wide hover:text-indigo-600 transition-colors duration-300">support@mysterybox.de</p>
							</div>
							<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
								<h3 className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] font-medium flex items-center justify-center space-x-2">Telefon</h3>
								<p className="mt-6 text-gray-600 text-center font-medium tracking-wide hover:text-indigo-600 transition-colors duration-300">+49 (0) 123 456789</p>
							</div>
						</div>

					</div>
				</div>
			</section>
			
			{message && (
				<div className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-xl shadow-lg z-50 ${
					status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
				}`}>
					{message}
				</div>
			)}
		</main>
	);
}