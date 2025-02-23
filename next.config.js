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
			{
				protocol: 'https',
				hostname: 'www.tiktok.com',
			},
			{
				protocol: 'https',
				hostname: '*.tiktok.com',
			}
		],
		domains: ['images.unsplash.com'],
	},
	basePath: '/mysteryBox',
	assetPrefix: '/mysteryBox',
	trailingSlash: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} for tests on localhost:3000
const nextConfig = {
	basePath: '',  // Remove any basePath for local development
	output: 'standalone',
	images: {
	  domains: ['flagcdn.com'],  // Keep this if you're using flag images
	}
  }
  
  module.exports = nextConfig
*/
