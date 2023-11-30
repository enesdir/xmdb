import crypto from 'node:crypto'
import { NextResponse } from 'next/server'

import { mapPrismaShowToShow } from '@/server/modules/shows/showsMapper'
import { createShowSchema } from '@/server/modules/shows/showsSchemas'
import { createShow } from '@/server/modules/shows/showsService'
import { createJsonResponse, protectRoute } from '@/utils/route'
import { createImage } from '~/src/lib/cloudinary/cloudinaryService'

export const POST = async (request: Request) => {
	const [err, session] = await protectRoute()

	if (err) return err

	const data = await request.formData()
	const result = await createShowSchema.safeParseAsync({
		description: data.get('description'),
		title: data.get('title'),
		original_title: data.get('original_title'),
		overview: data.get('overview'),
		original_language: data.get('original_language'),
		media_type: data.get('media_type'),
		trailer: data.get('trailer'),
		adult: Boolean(data.get('adult')),
		director: data.get('director'),
		images: data.getAll('images'),
	})

	if (!result.success) {
		return createJsonResponse({ message: `Invalid payload! ${JSON.stringify(result.error)}` }, 400)
	}

	const {
		description,
		images,
		title,
		original_title,
		overview,
		original_language,
		media_type,
		trailer,
		adult,
		director,
	} = result.data

	const urls = await Promise.all(images.map((image) => createImage(image, { publicId: crypto.randomUUID() })))

	const show = await createShow({
		description,
		title,
		// @ts-expect-error: todo
		original_title,
		// @ts-expect-error: todo
		overview,
		original_language,
		media_type,
		// @ts-expect-error: todo
		trailer,
		adult,
		// @ts-expect-error: todo
		director,
		images: urls.map(({ secure_url }) => secure_url),
		userId: session.user.id,
	})

	return NextResponse.json(mapPrismaShowToShow(show))
}
