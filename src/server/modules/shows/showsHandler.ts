import { TRPCError } from '@trpc/server'
import { deleteImage } from '@/lib/services/cloudinaryService'
import type { ProtectedContext, TRPCContext } from '@/server/createTRPCContext'
import { mapPrismaShowToShow } from './showsMapper'
import type {
	DeleteShowByIdInput,
	GetAllLatestShowsInput,
	GetAllShowsInput,
	GetShowByIdInput,
	GetShowByIdUserInput,
	GetShowsByUserInput,
} from './showsSchemas'
import {
	deleteShowById,
	getAllLatestShows,
	getAllShows,
	getShowById,
	getShowByIdUser,
	getShowsByUsername,
	searchShows,
} from './showsService'
import { getFileNameFromUrl } from './showsUtils'

export const getAllLatestShowsHandler = async (
	{ session }: TRPCContext,
	{ limit, cursor }: GetAllLatestShowsInput
) => {
	const shows = await getAllLatestShows({ limit, cursor })
	const nextCursor = shows.length < limit ? null : shows.at(-1)?.id

	return {
		nextCursor: nextCursor || null,
		items: shows.map(mapPrismaShowToShow),
	}
}
export const getAllShowsHandler = async ({}: GetAllShowsInput) => {
	const shows = await getAllShows()

	return shows.map(mapPrismaShowToShow)
}
export const getShowsByUserHandler = async ({ username }: GetShowsByUserInput) => {
	const shows = await getShowsByUsername(username)

	return shows.map(mapPrismaShowToShow)
}
export const getShowByIdHandler = async ({ id }: GetShowByIdInput) => {
	const show = await getShowById({ id })

	if (!show) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Show not found!',
		})
	}

	return mapPrismaShowToShow(show)
}
export const deleteShowByIdHandler = async ({ session }: ProtectedContext, { id }: DeleteShowByIdInput) => {
	const show = await getShowByIdUser(id, { id: session.user.id })

	if (!show) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Show not found!',
		})
	}

	const names = show.image.map(({ url }) => getFileNameFromUrl(url)).filter(Boolean)

	await Promise.all(names.map(deleteImage))
	await deleteShowById(id)

	return mapPrismaShowToShow(show)
}

export const getShowByIdUserHandler = async (
	{ session }: TRPCContext,
	{ id, username }: GetShowByIdUserInput
) => {
	const show = await getShowByIdUser(id, { username }, session?.user.id)

	if (!show) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Show not found!',
		})
	}

	return mapPrismaShowToShow(show)
}

export const searchShowsHandler = async ({ session }: TRPCContext, { search }: SearchShowsInput) => {
	const shows = await searchShows(search, session?.user.id)

	return shows.map((show) => mapPrismaShowToShow(show))
}
