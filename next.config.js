/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	basePath: '/mysteryBox',
	assetPrefix: '/mysteryBox/',
	trailingSlash: true,
}

module.exports = nextConfig

