import type { PropsWithChildren } from 'react'

export default async function WebsiteLayoutContainer({ children }: PropsWithChildren) {
	return (
		<>
			<main className='flex h-screen w-full flex-col items-center bg-white'>{children}</main>
		</>
	)
}
