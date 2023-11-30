import { env } from '@/env.mjs'

export const siteConfig = {
	siteUrl: env.NEXT_PUBLIC_BASE_URL,
	seoTitle: 'XMDB',
	seoDescription:
		"YourMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. Get personalized recommendations, and learn where to watch across hundreds of streaming providers.",
	og: {
		twitterCreator: '@codenuru',
	},
	manifest: {
		id: 'com.enesesen.xmdb',
		name: 'xmdb',
	},
}
