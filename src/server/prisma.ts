/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 *
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
import { PrismaClient } from '@prisma/client'

import { env } from '@/env.mjs'

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined
}

export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: env.VERCEL_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
	})

if (env.VERCEL_ENV !== 'production') globalForPrisma.prisma = prisma
