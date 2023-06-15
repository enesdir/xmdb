import type { Prisma } from '@prisma/client'
import type { Post } from './postsSchemas'
import type { select } from './postsService'

export const mapPrismaPostToPost = ({
	id,
	description,
	image,
	user: { id: userId, username, name },
	title,
	original_title,
	overview,
	original_language,
	media_type,
	release_date,
	first_air_date,
	last_air_date,
	number_of_seasons,
	number_of_episodes,
	revenue,
	runtime,
	trailer,
	adult,
	director,
	cast,
}: Prisma.PostGetPayload<{ select: typeof select }>): Post => ({
	id,
	description,
	images: image.map(({ url }) => url),
	author: {
		id: userId,
		username,
		name,
	},
	title,
	original_title,
	overview,
	original_language,
	media_type,
	release_date,
	first_air_date,
	last_air_date,
	number_of_seasons,
	number_of_episodes,
	revenue,
	runtime,
	trailer,
	adult,
	director,
	cast,
})
