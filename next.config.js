/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
		loader: 'default',
		path: '',
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'flagcdn.com',
			},
		],
	},
	basePath: '/mysteryBox',
	assetPrefix: '/mysteryBox',
	trailingSlash: true,
}

module.exports = nextConfig



