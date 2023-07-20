'use server'

import { cache } from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/server/authOptions'

export const getSession = cache(async () => {
	return await getServerSession(authOptions)
})

export const getCurrentUser = cache(async () => {
	const session = await getSession()

	return session?.user
})
