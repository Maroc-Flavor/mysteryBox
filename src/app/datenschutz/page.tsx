import Layout from '@/components/layout';

export default function Datenschutz() {
	return (
		<Layout>
			<main className="flex-grow">
				<div className="max-w-4xl mx-auto px-4 py-16">
					<h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						Datenschutzerklärung
					</h1>
					<div className="prose max-w-none space-y-6">
						{[
							{
								title: "Datenschutz auf einen Blick",
								content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							},
							{
								title: "Allgemeine Hinweise",
								content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							},
							{
								title: "Datenerfassung auf unserer Website",
								content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
							},
							{
								title: "Analyse-Tools und Werbe-Tools",
								content: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
							},
							{
								title: "Newsletter",
								content: "Excepteur sint occaecat cupidatat non proident."
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