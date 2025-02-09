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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						
						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
							<p className="text-gray-600">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
							<p className="text-gray-600">
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</p>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}