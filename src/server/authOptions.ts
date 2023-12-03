import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

import { env } from '@/env.mjs'
import { userSchema } from '@/server/modules/users/usersSchemas'
import { getUserByCredentials, initCreatedUser } from '@/server/modules/users/usersService'
import { prisma } from '@/server/prisma'

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	secret: env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/',
	},
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async session({ session, token }) {
			session.user.id = token.id
			session.user.username = token.username

			return session
		},
		async jwt({ token, trigger, user, session }) {
			if (trigger === 'update') {
				const result = userSchema.safeParse(session)

				if (result.success) {
					token.name = result.data.name
					token.email = result.data.email
					token.username = result.data.username
					token.picture = result.data.image
				}
			}

			if (user) {
				token.id = user.id
				token.username = user.username
			}

			return Promise.resolve(token)
		},
	},
	events: {
		createUser: async ({ user: createdUser }) => {
			const user = await initCreatedUser(createdUser)

			if (user) {
				createdUser.username = user.username
			}
		},
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},

			authorize: async (credentials) => {
				const parsedCredentials = z
					.object({ username: z.string(), password: z.string().min(6) })
					.safeParse(credentials)

				if (parsedCredentials.success) {
					return getUserByCredentials(parsedCredentials.data)
				}
				console.log('Invalid credentials')
				return null
			},
		}),
	],
}
