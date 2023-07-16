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
				xxs: '320px',
				xs: '420px',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
