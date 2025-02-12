import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import { getImagePath } from '@/utils/getImagePath';

const products = [
	{
		id: 1,
		category: 'Tech',
		name: 'Mystery Tech Box',
		image: getImagePath('/mysteryBox/mysterybos-tech.jpg'),
		price: 'Surprise!',
		description: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
		detailDescription: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
	},
	{
		id: 2,
		category: 'Fashion',
		name: 'Mystery Fashion Box',
		image: getImagePath('/mysteryBox/mysterybox-fashion.jpg'),
		price: 'Surprise!',
		description: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker',
		detailDescription: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker.',
	},
	{
		id: 3,
		category: 'Food',
		name: 'Mystery Food Box',
		image: getImagePath('/mysteryBox/placeholder-box1.jpg'),
		price: 'Surprise!',
		description: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 4,
		category: 'Deluxe',
		name: 'Mystery Deluxe Box',
		image: getImagePath('/mysteryBox/mysterybox-deluxe.jpeg'),
		price: 'Surprise!',
		description: 'Ein Hauch von Luxus und Überraschung.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 5,
		category: 'Mega ',
		name: 'Mystery Mega Box',
		image: getImagePath('/mysteryBox/mysterybox-mega.jpg'),
		price: 'Surprise!',
		description: 'Große Überraschungen für große Freude.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 6,
		category: 'Ultimate',
		name: 'Mystery Ultimate Box',
		image: getImagePath('/mysteryBox/mysterybox-ultimate.jpg'),
		price: 'Surprise!',
		description: 'Die ultimative Überraschungserfahrung.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 7,
		category: 'XXL',
		name: 'XXL Premium Mystery Box',
		price: 99.99,
		originalPrice: 279.99,
		image: getImagePath('/mysteryBox/mysterybox-premium1.jpg'),
		description: '10 KG Überraschungsbox',
		detailDescription: '10 KG Überraschungsbox',
	  },
	  {
		id: 8,
		category: 'Starter',
		name: 'Starter Mystery Box',
		price: 39.99,
		originalPrice: 120.00,
		image: getImagePath('/mysteryBox/starterbox.jpg'),
		description: '3 KG Überraschungskarton',
		detailDescription: '3 KG Überraschungskarton.',
	  },
	  {
		id: 9,
		category: 'Individuell',
		name: 'Individuelle Mystery Box',
		price: 'Individuell',
		offer: 'Flexible',
		image: getImagePath('/mysteryBox/starterbox.jpg'),
		description: 'individuell anpassbar. Sprich mit uns.',
		detailDescription: 'individuell anpassbar. Sprich mit uns.',
	  }
];

export default function ShopPage() {
	return (
		<Layout>
			<main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
				<section className="relative py-12 md:py-24 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10"></div>
					<div className="absolute inset-0 bg-[url('/mysteryBox/file.svg')] opacity-5"></div>
					<div className="container mx-auto px-4 relative z-10">
						<h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Unsere Mystery Boxes
						</h1>
						<p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 md:mb-16">
							Entdecke unsere kuratierte Auswahl an Überraschungspaketen.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
							{products.map((product) => (
								<Link href={product.id === 9 ? '/kontakt' : `/shop/${product.id}`} key={product.id}>
									<div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
										<div className="relative h-48 sm:h-64 overflow-hidden">
											<Image
												fill
												src={product.image}
												alt={product.name}
												className="object-cover transform transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<div className="absolute bottom-4 left-4 right-4">
													<span className="text-white text-lg font-medium">Mehr Details</span>
												</div>
											</div>
										</div>

										<div className="p-4 md:p-6">
											<div className="flex items-center justify-between mb-3 md:mb-4">
												<span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
													{product.category}
												</span>
												<div className="text-right">
													{product.id === 9 ? (
														<span className="text-xl md:text-2xl font-bold text-indigo-700">
															Individuell
														</span>
													) : (
														<>
															<span className="text-xl md:text-2xl font-bold text-indigo-700">
																{typeof product.price === 'number' ? `${product.price} €` : product.price}
															</span>
															{product.originalPrice && (
																<span className="ml-2 text-sm text-gray-500 line-through">
																	{product.originalPrice} €
																</span>
															)}
														</>
													)}
												</div>
											</div>

											<h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{product.name}</h2>
											<p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">{product.description}</p>

											<button 
												className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 md:py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 font-semibold"
											>
												<span>{product.id === 9 ? 'Angebot anfordern' : 'Jetzt entdecken'}</span>
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

