interface Product {

	id: number;
	category: string;
	name: string;
	image: string;
	price: number | string;
	originalPrice: number | string;
	offer: string;
	description: string;
	detailDescription: string;
}

export const products: Product[] = [
	{
		id: 1,
		category: 'Tech',
		name: 'Mystery Tech Box',
		image: '/images/mysterybox-tech.jpg',
		price: 99.99,
		originalPrice: 129.99,
		offer: '',
		description: 'What tech treasures await? Only one kind of person will find out: YOU!',
		detailDescription: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
	},
	{
		id: 2,
		category: 'Fashion',
		name: 'Mystery Fashion Box',
		image: '/images/mysterybox-fashion.jpg',
		price: 79.99,
		originalPrice: 99.99,
		offer: '',
		description: 'Unleash your inner fashion icon! Prepare for a stylish surprise.',
		detailDescription: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker.',
	},
	{
		id: 3,
		category: 'Food',
		name: 'Mystery Food Box',
		image: '/images/placeholder-box1.jpg',
		price: 49.99,
		originalPrice: 69.99,
		offer: '',
		description: 'A culinary adventure awaits! Taste the unexpected.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 4,
		category: 'Deluxe',
		name: 'Mystery Deluxe Box',
		image: '/images/mysterybox-deluxe.jpeg',
		price: 149.99,
		originalPrice: 199.99,
		offer: '',
		description: 'Ein Hauch von Luxus und Überraschung.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 5,
		category: 'Mega',
		name: 'Mystery Mega Box',
		image: '/images/mysterybox-mega.jpg',
		price: 199.99,
		originalPrice: 249.99,
		offer: '',
		description: 'Große Überraschungen für große Freude.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
	{
		id: 6,
		category: 'Ultimate',
		name: 'Mystery Ultimate Box',
		image: '/images/mysterybox-ultimate.jpg',
		price: 299.99,
		originalPrice: 399.99,
		offer: '',
		description: 'Die ultimative Überraschungserfahrung.',
		detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
	},
    {
		id: 7,
		category: 'XXL',
		name: 'XXL Premium Mystery Box',
		price: 99.99,
		originalPrice: 279.99,
		offer: '',
		image: '/images/mysterybox-premium1.jpg',
		description: '10 KG Überraschungsbox',
		detailDescription: '10 KG Überraschungsbox.',
	},
	{
		id: 8,
		category: 'Starter',
		name: 'Starter Mystery Box',
		price: 39.99,
		originalPrice: 120.00,
		offer: 'Flexible',
		image: '/images/starterbox.jpg',
		description: '3 KG Überraschungskarton',
		detailDescription: '3 KG Überraschungsbox.',
	},
	{
		id: 9,
		category: 'Individuell',
		name: 'Individuelle Mystery Box',
		price: '',
		originalPrice: '',
		offer: 'Flexible',
		image: '/images/starterbox.jpg',
		description: 'individuell anpassbar. Sprich mit uns.',
		detailDescription: 'individuell anpassbar. Sprich mit uns.',
	}
];