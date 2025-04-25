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
	// Sicherheitsheader
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains'
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()'
					}
				]
			}
		];
	}
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
