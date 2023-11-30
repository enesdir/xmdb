import type { Prisma } from '@prisma/client'
import type { Show } from './showsSchemas'
import type { createShowSelect } from './showsUtils'

export const mapPrismaShowToShow = ({
	id,
	description,
	image,
	like,
	title,
	original_title,
	overview,
	original_language,
	media_type,
	// @ts-expect-error:todo
	release_date,
	// @ts-expect-error:todo
	first_air_date,
	// @ts-expect-error:todo
	last_air_date,
	// @ts-expect-error:todo
	number_of_seasons,
	// @ts-expect-error:todo
	number_of_episodes,
	// @ts-expect-error:todo
	revenue,
	// @ts-expect-error:todo
	runtime,
	// @ts-expect-error:todo
	trailer,
	adult,
	director,
	cast,
	createdAt,
	_count,
	user: { id: userId, image: userImage, username, name },
}: Prisma.ShowGetPayload<{
	select: ReturnType<typeof createShowSelect>
}>): Show => ({
	id,
	description,
	createdAt: createdAt.toISOString(),
	images: image.map(({ url }) => url),
	like: Boolean(like?.length),
	author: {
		id: userId,
		image: userImage,
		username,
		name,
	},
	statistics: {
		likes: _count.like,
	},
	title,
	original_title,
	overview,
	original_language,
	media_type,
	// @ts-expect-error:todo
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
