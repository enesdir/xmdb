import { notFound } from 'next/navigation'
import { TRPCClientError } from '@trpc/client'

import { AppRouter } from '../server/router'
import { server } from '../trpc/server'

export const isTRPCClientError = (cause: unknown): cause is TRPCClientError<AppRouter> =>
	cause instanceof TRPCClientError
export const getUserByUsername = async (username: string) => {
	try {
		return await server.users.getByUsername.query({ username })
	} catch (err) {
		if (isTRPCClientError(err)) {
			switch (err.data?.code) {
				case 'NOT_FOUND':
					notFound()
			}
		}

		throw err
	}
}
