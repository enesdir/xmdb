import { Fragment } from 'react'
import { ShowCastItem } from './ShowCastItem'

type ShowCastProps = Readonly<{
	cast: any[]
}>

export const MovieCastTable = ({ cast }: ShowCastProps) => {
	if (cast.length === 0) {
		return <p>There is no cast</p>
	}

	return (
		<>
			<table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
				<thead className='bg-gray-50'>
					<tr>
						<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
							Name
						</th>
						<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
							Role
						</th>
					</tr>
				</thead>
				<tbody className='divide-y divide-gray-100 border-t border-gray-100'>
					{cast.map((person) => (
						<Fragment key={person.id}>
							<ShowCastItem person={person} />
						</Fragment>
					))}
				</tbody>
			</table>
		</>
	)
}
