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
					'0%, 100%': { transform: 'rotate(-20deg)' },
					'50%': { transform: 'rotate(20deg)' },
				},
				'wing-right': {
					'0%, 100%': { transform: 'rotate(20deg)' },
					'50%': { transform: 'rotate(-20deg)' },
				},
				'particle-explosion': {
					'0%': {
						transform: 'translate(-50%, -50%) rotate(var(--angle)) translateY(-20px)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-50%, -50%) rotate(var(--angle)) translateY(-100px)',
						opacity: '0'
					}
				}
			},
			animation: {
				'wing-left': 'wing-left 1s ease-in-out infinite',
				'wing-right': 'wing-right 1s ease-in-out infinite',
				'particle-explosion': 'particle-explosion 0.5s ease-out forwards'
			}
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	},
};