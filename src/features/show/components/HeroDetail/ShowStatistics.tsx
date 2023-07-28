import type { Show } from '@/server/modules/shows/showsSchemas'

type ShowStatisticsProps = Readonly<{
	show: Show
}>
// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export const ShowStatistics = ({ show }: ShowStatisticsProps) => {
	return <div>ShowStatitics</div>
}
