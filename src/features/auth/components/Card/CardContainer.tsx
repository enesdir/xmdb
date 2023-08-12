import type { PropsWithChildren } from 'react'

export const CardContainer = ({ children }: PropsWithChildren) => {
	return (
		<div className='mx-auto my-4 max-w-lg rounded-xl border border-solid border-[#ddd] bg-white p-8 shadow shadow-slate-300'>
			{children}
		</div>
	)
}
