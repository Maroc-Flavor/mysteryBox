import Image from 'next/image';
import Layout from '@/components/layout';


export default function AboutUs() {
	const milestones = [
		{
			year: '2021',
			title: 'Die Idee',
			description: 'Aus einer spontanen Idee während des Online-Shopping-Booms entstand MysteryBox.'
		},
		{
			year: '2022',
			title: 'Der erste Test',
			description: 'Launch der Beta-Version mit 100 handverlesenen Testkunden.'
		},
		{
			year: '2023',
			title: 'Durchbruch',
			description: 'Über 5000 versendete Pakete und eine wachsende Community.'
		},
		{
			year: '2024',
			title: 'Expansion',
			description: 'Internationalisierung und Einführung neuer Mystery-Kategorien.'
		}
	];

	return (
		<Layout>
			<main className="flex-grow">
				{/* Hero Section */}
				<section className="relative py-24 bg-gradient-to-b from-indigo-900 to-purple-900">
					<div className="#')] opacity-10"></div>
					<div className="container mx-auto px-4 relative z-10">
						<div className="max-w-3xl mx-auto text-center text-white">
							<h1 className="text-5xl font-bold mb-8">Unsere Geschichte</h1>
							<p className="text-xl text-gray-300 leading-relaxed">
								Was als verrückte Idee begann, wurde zu einer Revolution im Online-Shopping.
								Wir machen aus jedem Einkauf ein Abenteuer!
							</p>
						</div>
					</div>
				</section>

				{/* Founder Story Section */}
				<section className="py-24 px-4">
					<div className="max-w-7xl mx-auto">
						<div className="grid md:grid-cols-2 gap-16 items-center">
							<div className="relative h-[600px] rounded-2xl overflow-hidden">
								<Image
									src="/mysteryBox/images/founder-portrait.jpg"
									alt="Unser Gründer"
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									style={{ objectFit: 'cover' }}
									className="hover:scale-105 transition-transform duration-500"
									priority
									quality={85}
								/>
							</div>
							<div className="space-y-8">
								<h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
									Von der Idee zur Innovation
								</h2>
								<p className="text-xl text-gray-600 leading-relaxed">
									&quot;Als leidenschaftlicher Online-Shopper war ich oft von der Monotonie des 
									digitalen Einkaufens gelangweilt. Ich träumte von einem Shoppingerlebnis, 
									das Spannung und Überraschung vereint. So entstand MysteryBox - ein Konzept, 
									das das klassische Online-Shopping revolutioniert.&quot;
								</p>
								<p className="text-xl text-gray-600 leading-relaxed">
									&quot;Heute sind wir stolz darauf, tausenden Menschen täglich ein Lächeln ins 
									Gesicht zu zaubern. Jede Box ist ein neues Abenteuer, jede Überraschung 
									sorgfältig ausgewählt.&quot;
								</p>
								<div className="flex items-center space-x-4">
									<div className="h-16 w-16 relative">
										<Image
											src="/mysteryBox/images/logo.jpg"
											alt="Don Simo"
											fill
											sizes="64px"
											className="rounded-full object-cover"
											quality={85}
											style={{ objectFit: 'cover' }}
										/>
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900">Don Simo</h3>
										<p className="text-gray-600">Gründer & CEO</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Timeline Section */}
				<section className="py-12 md:py-24 px-4 bg-gray-50">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Unsere Meilensteine
						</h2>
						<div className="relative">
							{/* Timeline line - hidden on mobile */}
							<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600"></div>

							<div className="space-y-8 md:space-y-24">
								{milestones.map((milestone, index) => (
									<div key={index} className={`relative flex flex-col md:flex-row items-center ${
										index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
									}`}>
										<div className={`w-full md:w-1/2 ${
											index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
										}`}>
											<div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
												<span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
													{milestone.year}
												</span>
												<h3 className="text-xl text-gray-600 md:text-2xl font-bold mt-4 mb-2">{milestone.title}</h3>
												<p className="text-gray-600">{milestone.description}</p>
											</div>
										</div>

										{/* Timeline dot - hidden on mobile */}
										<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-indigo-600"></div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className="py-24 px-4">
					<div className="max-w-4xl mx-auto text-center">
						<div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
							<h2 className="text-4xl font-bold mb-6">
								Werde Teil der Überraschungs-Community!
							</h2>
							<p className="text-xl mb-8 opacity-90">
								Erhalte exklusive Angebote, Sneak Peeks und die Chance auf besondere Mystery Boxes.
							</p>
							<form className="max-w-md mx-auto">
								<div className="flex gap-4">
									<input
										type="email"
										placeholder="Deine E-Mail Adresse"
										className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
									/>
									<button
										type="submit"
										className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300"
									>
										Anmelden
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}