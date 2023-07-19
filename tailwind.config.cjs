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
				xxs: '320px',
				// => @media (min-width: 480px) { ... }
				xs: '480px',
				// => @media (min-width: 600px) { ... }
				sm: '600px',
				'max-sm': { raw: 'not all and (min-width: 600px)' },
				'max-hsm': { raw: '(max-height: 680px)' },
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
						'border-color': theme('colors.blue.200'),
					},
					'40%': {
						'border-color': theme('colors.blue.200'),
					},
				},
				highlight: {
					'0%': {
						background: theme('colors.blue.400'),
						color: theme('colors.white'),
					},
					'40%': {
						background: theme('colors.blue.400'),
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
