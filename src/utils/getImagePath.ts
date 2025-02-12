export function getImagePath(path: string): string {
	const basePath = process.env.NODE_ENV === 'production' ? '/MysteryBox-Aide-NEXTJS' : '';
	// Remove any double slashes and ensure proper path formatting
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	return `${basePath}${cleanPath}`;
}