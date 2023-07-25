/** @type {import('tailwindcss').Config} */
module.exports = {
	dark: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				default: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '5vw',
				screens: {
					'2xl': '1400px',
				},
			},
			screens: {
				// => @media (min-width: 320px) { ... }
				xs: '320px',
				// => @media (min-width: 480px) { ... }
				sm: '480px',
				// => @media (min-width: 600px) { ... }
				md: '600px',
				'max-xs': { raw: 'not all and (min-width: 480px)' },
				'max-sm': { raw: 'not all and (min-width: 600px)' },
				'max-wsm': { raw: '(max-width: 600px)' },
			},
			keyframes: ({ theme }) => ({
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				rerender: {
					'0%': {
						'border-color': theme('colors.red.200'),
					},
					'40%': {
						'border-color': theme('colors.red.600'),
					},
				},
				highlight: {
					'0%': {
						background: theme('colors.red.400'),
						color: theme('colors.white'),
					},
					'40%': {
						background: theme('colors.red.600'),
						color: theme('colors.white'),
					},
				},
			}),
			animation: {
				'fade-in-down': 'fade-in-down 0.5s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
