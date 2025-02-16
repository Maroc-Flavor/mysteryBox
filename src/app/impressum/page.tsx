import Layout from '@/components/layout';

export default function Impressum() {
	return (
		<Layout>
			<main className="flex-grow">
				<div className="max-w-4xl mx-auto px-4 py-16">
					<h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						Impressum
					</h1>
					<div className="prose max-w-none space-y-6">
						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
							<p className="text-gray-600">
								MysteryBox GmbH<br />
								[Straße Nr.]<br />
								[PLZ] [Stadt]<br />
								Deutschland
							</p>
						</div>
						
						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
							<p className="text-gray-600">
								Telefon: [Ihre Telefonnummer]<br />
								E-Mail: [Ihre E-Mail]<br />
								Handelsregister: [Registergericht] [Registernummer]<br />
								USt-IdNr.: [Ihre USt-IdNr.]
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
							<p className="text-gray-600">
								[Name des Geschäftsführers]<br />
								Geschäftsführer
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">Aufsichtsbehörde</h2>
							<p className="text-gray-600">
								[Name der zuständigen Aufsichtsbehörde]<br />
								[Anschrift der Aufsichtsbehörde]
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
							<p className="text-gray-600">
								Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.<br />
								Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
								Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
							</p>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}