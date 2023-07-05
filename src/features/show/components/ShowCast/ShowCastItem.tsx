import { Avatar } from '@/components/'

export const ShowCastItem = ({ person }) => {
	return (
		<tr className='hover:bg-gray-50'>
			<th className='flex items-center gap-3 px-6 py-4 font-normal text-gray-900'>
				<div className='relative h-10 w-10'>
					<Avatar src={person.img} size='sm' alt={`${person.name} Photo`} />
				</div>
				<div className='text-sm'>
					<div className='font-medium text-gray-700'>{person.name}</div>
					<div className='text-gray-400'>{person.role}</div>
				</div>
			</th>

			<td className='px-6 py-4'>{person.role}</td>
		</tr>
	)
}
