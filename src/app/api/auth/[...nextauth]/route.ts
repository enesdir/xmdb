import NextAuth from 'next-auth'

import { authOptions } from '@/server/authOptions'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions) as unknown

export { handler as GET, handler as POST }
