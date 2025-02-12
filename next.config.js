/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	basePath: '/mysteryBox',
	assetPrefix: '/mysteryBox',
	trailingSlash: true,
	typescript: {
		ignoreBuildErrors: true
	}
}

module.exports = nextConfig

