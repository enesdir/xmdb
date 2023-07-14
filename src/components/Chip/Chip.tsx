import Link from 'next/link'

type ChipProps = {
	href: __next_route_internal_types__.RouteImpl<string>
	text: string
}
export const Chip = ({ href, text }: ChipProps) => {
	return (
		<Link
			href={href}
			className='mb-2 mr-2 inline-flex shrink-0 cursor-pointer self-center rounded-md border border-solid border-white bg-none text-white  no-underline'
		>
			<span className='p-1 text-sm'>{text}</span>
		</Link>
	)
}
