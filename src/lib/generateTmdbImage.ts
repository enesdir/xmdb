const BASE_URL = 'https://image.tmdb.org/t/p/'

interface IImageOptions {
	path: string | null | undefined
	size?: 'sm' | 'md' | 'lg'
	category: 'backdrop' | 'poster' | 'person'
}

export const getTmdbImageURL = ({ path, size, category }: IImageOptions): string => {
	if (path === undefined || path === null || path === 'null') return '/images/noimage.png'

	switch (category) {
		case 'backdrop':
			switch (size) {
				case 'sm':
					return `${BASE_URL}w300${path}`
				case 'md':
					return `${BASE_URL}w780${path}`
				case 'lg':
					return `${BASE_URL}w1280${path}`
				default:
					return `${BASE_URL}original${path}`
			}
		case 'poster':
			switch (size) {
				case 'sm':
					return `${BASE_URL}w342${path}`
				case 'md':
					return `${BASE_URL}w500${path}`
				case 'lg':
					return `${BASE_URL}w780${path}`
				default:
					return `${BASE_URL}original${path}`
			}
		case 'person':
			switch (size) {
				case 'sm':
					return `${BASE_URL}w185${path}`
				case 'md':
					return `${BASE_URL}h632${path}`
				default:
					return `${BASE_URL}original${path}`
			}
		default:
			return `${BASE_URL}original${path}`
	}
}
