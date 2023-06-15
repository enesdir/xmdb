import { TRPCError } from '@trpc/server'
import { mapPrismaPostToPost } from './postsMapper'
import type {
	GetAllPostsInput,
	GetPostByIdInput,
	GetPostByIdUserInput,
	GetPostsByUserInput,
} from './postsSchemas'
import { getAllPosts, getPostById, getPostByIdUser, getPostsByUsername } from './postsService'

export const getAllPostsHandler = async ({}: GetAllPostsInput) => {
	const posts = await getAllPosts()

	return posts.map(mapPrismaPostToPost)
}
export const getPostsByUserHandler = async ({ username }: GetPostsByUserInput) => {
	const posts = await getPostsByUsername(username)

	return posts.map(mapPrismaPostToPost)
}
export const getPostByIdHandler = async ({ id }: GetPostByIdInput) => {
	const post = await getPostById({ id })

	if (!post) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Post not found!',
		})
	}

	return mapPrismaPostToPost(post)
}
export const getPostByIdUserHandler = async ({ id, username }: GetPostByIdUserInput) => {
	const post = await getPostByIdUser({ id, username })

	if (!post) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Post not found!',
		})
	}

	return mapPrismaPostToPost(post)
}
