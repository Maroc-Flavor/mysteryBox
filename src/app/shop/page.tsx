import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';

const products = [
	{
		id: 1,
		category: 'Tech',
		name: 'Mystery Tech Box',
		image: '/mysteryBox/mysterybox-tech.jpg',
		price: 'Surprise!',
		description: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
		detailDescription: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
	},
	{
		id: 2,
		category: 'Fashion',
		name: 'Mystery Fashion Box',
		image: '/mysteryBox/mysterybox-fashion.jpg',
		price: 'Surprise!',
		description: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker',
		detailDescription: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker.',
	},
	{
		id: 3,
		category: 'Food',
		name: 'Mystery Food Box',
		image: '/mysteryBox/placeholder-box1.jpg',
		price: 'Surprise!',
		description: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 4,
		category: 'Deluxe',
		name: 'Mystery Deluxe Box',
		image: '/mysteryBox/mysterybox-deluxe.jpeg',
		price: 'Surprise!',
		description: 'Ein Hauch von Luxus und Überraschung..',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 5,
		category: 'Mega ',
		name: 'Mystery Mega Box',
		image: '/mysteryBox/mysterybox-mega.jpg',
		price: 'Surprise!',
		description: 'Große Überraschungen für große Freude.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 6,
		category: 'Ultimate',
		name: 'Mystery Ultimate Box',
		image: '/mysteryBox/mysterybox-ultimate.jpg',
		price: 'Surprise!',
		description: 'Die ultimative Überraschungserfahrung.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
];

export default function ShopPage() {
	return (
		<Layout>
			<main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
				{/* Shop Hero Section */}
				<section className="relative py-24 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10"></div>
					<div className="absolute inset-0 bg-[url('/mysteryBox/file.svg')] opacity-5"></div>
					<div className="container mx-auto px-4 relative z-10">
						<h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Unsere Mystery Boxes
						</h1>
						<p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
							Entdecke unsere kuratierte Auswahl an Überraschungspaketen. 
							Jede Box ist ein neues Abenteuer.
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{products.map((product) => (
								<Link href={`/mysteryBox/shop/${product.id}`} key={product.id}>
									<div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
										<div className="relative h-64 overflow-hidden">
											<Image
												src={product.image}
												alt={product.name}
												fill
												className="object-cover transform transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<div className="absolute bottom-4 left-4 right-4">
													<span className="text-white text-lg font-medium">Mehr Details</span>
												</div>
											</div>
										</div>
										
										<div className="p-6">
											<div className="flex items-center justify-between mb-4">
												<span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
													{product.category}
												</span>
												<span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
													{product.price}
												</span>
											</div>
											
											<h2 className="text-xl font-bold mb-3">{product.name}</h2>
											<p className="text-gray-600 mb-6">{product.description}</p>
											
											<button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
												<span>Jetzt entdecken</span>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
													<path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
												</svg>
											</button>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
