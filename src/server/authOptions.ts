import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { type AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import { userSchema } from '@/server/modules/users/usersSchemas'
import { getUserByCredentials, initCreatedUser } from '@/server/modules/users/usersService'

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/',
	},
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		session({ session, token }) {
			session.user.id = token.id
			session.user.username = token.username

			return session
		},
		jwt({ token, trigger, user, session }) {
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

			return token
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
			credentials: {
				username: {},
				password: {},
			},
			authorize: (credentials) => {
				if (!credentials) {
					return null
				}

				return getUserByCredentials(credentials)
			},
		}),
	],
}
