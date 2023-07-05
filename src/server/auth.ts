import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/server/authOptions'

export function auth() {
	return getServerSession(authOptions)
}
