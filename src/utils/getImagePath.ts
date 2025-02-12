export function getImagePath(path: string): string {
	const basePath = process.env.NODE_ENV === 'production' ? '/MysteryBox-Aide-NEXTJS' : '';
	return `${basePath}${path}`;
}