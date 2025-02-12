/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			maxWidth: {
				'8xl': '88rem',
			},
			aspectRatio: {
				'product': '3/4',
			},
			height: {
				'screen-90': '90vh',
			},
			keyframes: {
				'wing-left': {
					'0%, 100%': { transform: 'rotate(-30deg) scaleY(0.9)' },
					'50%': { transform: 'rotate(20deg) scaleY(1.1)' },
				},
				'wing-right': {
					'0%, 100%': { transform: 'rotate(30deg) scaleY(0.9)' },
					'50%': { transform: 'rotate(-20deg) scaleY(1.1)' },
				},
				'particle-explosion': {
					'0%': {
						transform: 'translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(var(--scale))',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-50%, -50%) rotate(var(--angle)) translateY(-100px) scale(0)',
						opacity: '0'
					}
				},
				'trail': {
					'0%': { transform: 'translateX(-100%) scaleX(0.5)', opacity: '0' },
					'50%': { transform: 'translateX(0) scaleX(1.2)', opacity: '0.5' },
					'100%': { transform: 'translateX(100%) scaleX(0.5)', opacity: '0' }
				}
			},
			animation: {
				'wing-left': 'wing-left 1.5s ease-in-out infinite',
				'wing-right': 'wing-right 1.5s ease-in-out infinite',
				'particle-explosion': 'particle-explosion 0.8s ease-out forwards',
				'trail': 'trail 2s ease-in-out infinite'
			}
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	},
};