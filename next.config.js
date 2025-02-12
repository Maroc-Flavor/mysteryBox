/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	basePath: process.env.NODE_ENV === 'production' ? '/mysteryBox' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/mysteryBox/' : '',
	trailingSlash: true,
	typescript: {
		ignoreBuildErrors: true
	}
}

module.exports = nextConfig

