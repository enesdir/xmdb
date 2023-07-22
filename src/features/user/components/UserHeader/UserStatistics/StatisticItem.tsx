import { cn } from '@/utils/cn'
import { formatNumber } from '@/utils/intl'

type StatisticItemProps = Readonly<{
	name: string
	value: number
	onClick?: () => void
}>

export const StatisticItem = ({ name, value, onClick }: StatisticItemProps) => (
	<li onClick={onClick} className={cn('flex flex-col items-center', onClick && 'cursor-pointer')}>
		{name}
		<strong>{formatNumber(value)}</strong>
	</li>
)
