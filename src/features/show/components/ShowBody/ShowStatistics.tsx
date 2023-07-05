import { Show } from '@/server/modules/shows/showsSchemas'

type ShowStatisticsProps = Readonly<{
	show: Show
}>
export const ShowStatistics = ({ show }: ShowStatisticsProps) => {
	return <div>ShowStatitics</div>
}
