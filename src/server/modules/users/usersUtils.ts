import type { Prisma } from '@prisma/client'

/**
 * Default selector for User. It's important to always explicitly say which fields you want to return in order
 * to not leak extra information
 *
 * @see https://github.com/prisma/prisma/issues/9353
 */
export const createUserSelect = ({ followerId }: { followerId?: string } = {}) =>
	({
		id: true,
		name: true,
		email: true,
		username: true,
		password: true,
		image: true,
		biography: true,
		_count: { select: { show: true, follower: true, following: true } },
		...(followerId && { follower: { where: { followerId } } }),
	}) satisfies Prisma.UserSelect

export const generateUsername = async ({ email }: { email: string }) => {
	const array = new Uint8Array(3)
	crypto.getRandomValues(array)
	const randomPart = Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('')
	return `${email.split('@')[0]}-${randomPart}`
}
