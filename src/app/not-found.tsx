import Link from 'next/link'
import type { Metadata } from 'next/types'

export const metadata: Metadata = {
	title: 'Something Wrong',
}

export default function ErrorPage() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<p>
				View <Link href='/'>all posts</Link>
			</p>
		</div>
	)
}
