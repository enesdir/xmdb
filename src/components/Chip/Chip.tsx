import Link from 'next/link'

type ChipProps = {
	href: __next_route_internal_types__.RouteImpl<string>
	text: string
}
export const Chip = ({ href, text }: ChipProps) => {
	return (
		<Link
			href={href}
			className='mb-2 mr-2 inline-flex shrink-0 cursor-pointer self-center rounded-2xl border border-solid border-white bg-none text-white  before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-full before:no-underline before:opacity-0 before:content-[""]'
		>
			<span className='p-1 text-sm'>{text}</span>
		</Link>
	)
}
