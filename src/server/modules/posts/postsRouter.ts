import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import {
	getAllPostsHandler,
	getPostByIdHandler,
	getPostByIdUserHandler,
	getPostsByUserHandler,
} from './postsHandler'
import {
	getAllPostsSchema,
	getPostByIdSchema,
	getPostByIdUserSchema,
	getPostsByUserSchema,
	postSchema,
} from './postsSchemas'

export const postsRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(getAllPostsSchema)
		.output(z.array(postSchema))
		.query(({ input }) => getAllPostsHandler(input)),
	getPostsByUser: publicProcedure
		.input(getPostsByUserSchema)
		.output(z.array(postSchema))
		.query(({ input }) => getPostsByUserHandler(input)),
	getById: publicProcedure
		.input(getPostByIdSchema)
		.output(postSchema)
		.query(({ input }) => getPostByIdHandler(input)),
	getByIdUser: publicProcedure
		.input(getPostByIdUserSchema)
		.output(postSchema)
		.query(({ input }) => getPostByIdUserHandler(input)),
})
