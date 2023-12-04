/** @type {import('tailwindcss').Config} */
module.exports = {
	dark: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'brand-gray': '#dddddd',
				'brand-gray2': '#ededec',
				'brand-gray3': '#333333',
				'brand-gray4': '#D4D9DD',
				'brand-gray5': '#999999',
				'brand-black': '#1F1F1F',
				'brand-black2': '#1A1A1A',
				'brand-black3': '#121212',
				'brand-yellow': '#F5C518',
				'brand-yellow2': '#DEC616',
				'brand-yellow3': '#E4B721',
				'brand-yellow4': '#BFAD13',
				'brand-blue': '#5799EF',
				'brand-blue2': '#136CB2',
			},
			letterSpacing: {
				'brand-tight': '0.00937em',
				'brand-wide': '0.03125em',
				'brand-widest': '0.03333em',
			},
			spacing: {
				'brand-s-1': 'calc(1.5rem + 0.125rem)',
				'brand-s-2': 'calc(50% - 0.125rem)',
				'brand-s-3': 'calc(60% - 0.125rem)',
				'brand-s-4': 'calc(72.35% - 0.125rem)',
				'brand-s-5': 'calc(22.75% - 0.125rem)',
				'brand-s-6': 'calc(27.65% - 0.125rem)',
				'brand-s-7': 'calc(100% + 0.75rem)',
				'brand-s-8': 'calc(177.6px + 0.5rem)',
				'brand-s-9': 'calc(95px + 1rem)',
				'brand-s-10': 'calc(66.66% - 0.5rem)',
				'brand-s-11': 'calc(120px + 1rem)',
				'brand-s-12': 'calc(33.33% - (1rem * 2) + 0.25rem)',
			},
			minHeight: {
				'brand-s-1': 'calc(140.6px + 0.5rem)',
				'brand-s-2': 'calc(177.6px + 0.5rem)',
			},
			maxWidth: {
				'brand-s-1': 'calc(50% - 0.125rem)',
			},
			maxHeight: {
				'brand-s-1': 'calc(50% - 0.125rem)',
			},
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
