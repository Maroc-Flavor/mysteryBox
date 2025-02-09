const products = [
	{
		id: 1,
		name: 'Mystery Tech Box',
	},
	{
		id: 2,
		name: 'Mystery Fashion Box',
	},
	{
		id: 3,
		name: 'Mystery Food Box',
	},
	{
		id: 4,
		name: 'Mystery Deluxe Box',
	},
	{
		id: 5,
		name: 'Mystery Mega Box',
	},
	{
		id: 6,
		name: 'Mystery Ultimate Box',
	}
];

export function generateStaticParams() {
	return products.map((product) => ({
		id: product.id.toString(),
	}));
}