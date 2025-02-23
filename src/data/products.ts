import { Product, PriceType } from '@/types/products';

export const products: Product[] = [
	{
		id: 1,
		name: 'Mystery Tech Box',
		description: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
		price: 99.99,
		originalPrice: 129.99,
		image: '/mysteryBox/images/products/mysterybox-tech.webp',
		category: 'Tech',
		inStock: true

	},
	{
		id: 2,
		name: 'Mystery Fashion Box',
		description: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker.',
		price: 79.99,
		originalPrice: 99.99,
		image: '/mysteryBox/images/products/mysterybox-fashion.webp',
		category: 'Fashion',
		inStock: true

	},
	{
		id: 3,
		name: 'Mystery Food Box',
		description: 'Eine kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Geschmackserlebnissen.',
		price: 49.99,
		originalPrice: 69.99,
		image: '/mysteryBox/images/products/mysterybox-food.webp',
		category: 'Food',
		inStock: true

	},
	{
		id: 4,
		name: 'Mystery Deluxe Box',
		description: 'Premium-Überraschungen der Extraklasse! Hochwertige Produkte für besondere Ansprüche.',
		price: 149.99,
		originalPrice: 199.99,
		image: '/mysteryBox/images/products/mysterybox-deluxe.webp',
		category: 'Deluxe',
		inStock: true

	},
	{
		id: 5,
		name: 'Mystery Mega Box',
		description: 'Eine riesige Box voller hochwertiger Überraschungen! Mehr Inhalt, mehr Freude.',
		price: 199.99,
		originalPrice: 249.99,
		image: '/mysteryBox/images/products/mysterybox-mega.webp',
		category: 'Mega',
		inStock: true

	},
	{
		id: 6,
		name: 'Mystery Ultimate Box',
		description: 'Das Beste vom Besten! Die ultimative Mystery Box mit exklusiven Produkten.',
		price: 299.99,
		originalPrice: 399.99,
		image: '/mysteryBox/images/products/mysterybox-ultimate.webp',
		category: 'Ultimate',
		inStock: true

	},
{
	id: 7,
	name: 'XXL Premium Mystery Box',
	description: 'Eine gigantische 10 KG Box voller spannender Überraschungen und Produkte.',
	price: 99.99,
	originalPrice: 279.99,
	image: '/mysteryBox/images/mysterybox-xxl.webp',
	category: 'XXL',
	inStock: true
},

	{
		id: 8,
		name: 'Starter Mystery Box',
		description: 'Eine 3 KG Box voller Überraschungen - ideal für Mystery Box Einsteiger!',
		price: 39.99,
		originalPrice: 120.00,
		image: '/mysteryBox/images/products/starterbox.webp',
		category: 'Starter',
		inStock: true

	},
	{
		id: 9,
		name: 'Individuelle Mystery Box',
		description: 'Eine komplett individuell anpassbare Mystery Box nach deinen Wünschen und Vorstellungen.',
		price: 'individual' as PriceType,
		originalPrice: 'individual' as PriceType,
		image: '/mysteryBox/images/products/individuellBox.webp.webp',
		category: 'Individuell',
		inStock: true
	}
];
