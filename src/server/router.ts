import { createTRPCRouter } from '@/server/trpc'
import { followsRouter } from './modules/follows/followsRouter'
import { likesRouter } from './modules/likes/likesRouter'
import { showsRouter } from './modules/shows/showsRouter'
import { usersRouter } from './modules/users/usersRouter'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	users: usersRouter,
	follows: followsRouter,
	shows: showsRouter,
	likes: likesRouter,
})

// Export type definition of API
export type AppRouter = typeof appRouter
