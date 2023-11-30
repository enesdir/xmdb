import { Decorator } from '@storybook/react'
import { SessionProvider } from 'next-auth/react'

import type { Session } from 'next-auth'

export const withSessionProvider: Decorator = (StoryFn) => {
	const mockSession: Session = {
		expires: new Date(Date.now() + 2 * 86400).toISOString(),
		user: { id: '1', name: 'storybook' },
		// status: 'authenticated',
	}
	return (
		<SessionProvider session={mockSession}>
			<StoryFn />
		</SessionProvider>
	)
}
