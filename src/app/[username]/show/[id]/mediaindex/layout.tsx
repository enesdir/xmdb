import type { PropsWithChildren } from 'react'

export default function MediaLayout({ children }: PropsWithChildren) {
	return (
		<>
			<div className='bg-[#e3e2dd]'>{children}</div>
		</>
	)
}
