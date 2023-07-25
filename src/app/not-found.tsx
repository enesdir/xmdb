import Link from 'next/link'
import type { Metadata } from 'next/types'
import { Boundary } from '@/components/Boundary'

export const metadata: Metadata = {
	title: 'Something Wrong',
}

export default function ErrorPage() {
	return (
		<Boundary labels={['not-found.tsx']} color='default' size='default' animateRerendering>
			<div className='relative block'>
				<h2>Not Found</h2>
				<p>Could not find requested resource</p>
				<p>
					View <Link href='/'>Main page</Link>
				</p>
			</div>
		</Boundary>
	)
}
