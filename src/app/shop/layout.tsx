import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'MysteryBox - Shop',
	description: 'Entdecke spannende Überraschungspakete und einzigartige Shopping-Erlebnisse.',
};

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}