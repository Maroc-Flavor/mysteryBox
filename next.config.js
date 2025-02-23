/** @type {import('next').NextConfig} */
const nextConfig = {
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
			}
		],
		domains: ['images.unsplash.com'],
	},
	trailingSlash: true,
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
					{ key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
					{ key: 'Content-Security-Policy', value: "frame-src 'self' *.tiktok.com;" }
				],
			},
		];
	},
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/tiktok-status',
				destination: '/api/tiktok-status',
			},
		];
	},
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
