import { products } from '@/data/products';
import { Metadata } from 'next';

export function generateStaticParams() {
	return products.map((product) => ({
		id: product.id.toString(),
	}));
}

export const metadata: Metadata = {
	title: 'MysteryBox - Product Details',
	description: 'Entdecke spannende Überraschungspakete und einzigartige Shopping-Erlebnisse.',
};

export default function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}