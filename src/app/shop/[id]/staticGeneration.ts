import { Metadata } from 'next';

export function generateStaticParams() {
	return [
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
		{ id: '4' },
		{ id: '5' },
		{ id: '6' },
	];
}

export const metadata: Metadata = {
	title: 'MysteryBox - Product Details',
	description: 'Entdecke spannende Überraschungspakete und einzigartige Shopping-Erlebnisse.',
};