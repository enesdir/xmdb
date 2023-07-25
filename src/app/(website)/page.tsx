import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
}

export default function WebsiteRootPage() {
	return (
		<div className='w-full'>
			<p>Website Home</p>
			<Link href={'/user/shows'}>Go to Latest Shows</Link>
			<br />
			<Link href={'/users/shows/all'}>Go to All Show</Link>
			<div className='block'>
				<ul
					role='list'
					className='m-0 inline-flex list-disc flex-wrap items-center space-y-3 p-0 pl-5 text-slate-400 marker:text-black'
				>
					<li className=' align-middle text-inherit'>5 cups chopped Porcini mushrooms</li>
					<li className=' align-middle text-inherit'>1/2 cup of olive oil</li>
					<li className='inline-block align-middle text-inherit'>3lb of celery</li>
				</ul>
			</div>
		</div>
	)
}
