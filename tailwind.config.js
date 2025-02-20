/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'custom-brown': '#C4A484',
			},
			height: {
				'screen-90': '90vh',
			},
			animation: {
				'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'border-pulse': 'border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'border-pulse': {
					'0%, 100%': { borderColor: 'rgba(239, 68, 68, 0.8)' },
					'50%': { borderColor: 'rgba(239, 68, 68, 0.4)' },
				},
			},
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	},
}
