import { Decorator } from '@storybook/react'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

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
