import Layout from '@/components/layout';

export default function Contact() {
	return (
		<Layout>
			<main className="flex-grow">
				<section className="relative py-12 md:py-24 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
					<div className="container mx-auto px-4 relative z-10">
						<h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Kontaktiere uns
						</h1>
						<p className="text-base md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 md:mb-16">
							Hast du Interesse an einer individuellen Mystery Box oder andere Fragen? Wir sind hier, um dir zu helfen!
						</p>

						<div className="max-w-2xl mx-auto">
							<div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-lg border border-gray-100">
								<form className="space-y-4 md:space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
										<input
											type="text"
											id="name"
											required
											className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
											placeholder="Dein Name"
										/>
									</div>
									<div>
										<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Betreff</label>
										<select
											id="subject"
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
											required
											className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
											placeholder="deine@email.com"
										/>
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
										<textarea
											id="message"
											rows={4}
											required
											className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
											placeholder="Wie können wir dir helfen?"
										></textarea>
									</div>
									<button
										type="submit"
										className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] font-medium flex items-center justify-center space-x-2"
									>
										<span>Nachricht senden</span>
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
			</main>
		</Layout>
	);
}