'use server'

import { cache } from 'react'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/server/authOptions'

import type { Session } from 'next-auth'

export const getSession: () => Promise<Session | null> = cache(async () => {
	return await getServerSession(authOptions)
})

export const getCurrentUser = cache(async () => {
	const session = await getSession()

	return session?.user
})
