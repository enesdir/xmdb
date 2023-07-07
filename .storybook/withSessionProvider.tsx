import React from 'react'
import { Decorator } from '@storybook/react'
import { SessionProvider } from 'next-auth/react'

export const withSessionProvider: Decorator = (StoryFn) => {
	const mockSession = {
		expires: new Date(Date.now() + 2 * 86400).toISOString(),
		auth: { username: 'storybook' },
	}
	return (
		<SessionProvider session={mockSession}>
			<StoryFn />
		</SessionProvider>
	)
}
