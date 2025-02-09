import Layout from '@/components/layout';

export default function AGB() {
	return (
		<Layout>
			<main className="flex-grow">
				<div className="max-w-4xl mx-auto px-4 py-16">
					<h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						Allgemeine Geschäftsbedingungen
					</h1>
					<div className="prose max-w-none space-y-6">
						{[
							{
								title: "1. Geltungsbereich",
								content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							},
							{
								title: "2. Vertragsschluss",
								content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							},
							{
								title: "3. Widerrufsrecht",
								content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
							},
							{
								title: "4. Preise und Versandkosten",
								content: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
							}
						].map((section, index) => (
							<div key={index} className="bg-white p-8 rounded-xl shadow-sm">
								<h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
								<p className="text-gray-600">{section.content}</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}