/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	basePath: process.env.NODE_ENV === 'production' ? '/MysteryBox-Aide-NEXTJS/mysterybox' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/MysteryBox-Aide-NEXTJS/mysterybox/' : '',
	trailingSlash: true,
}

module.exports = nextConfig


