import type { RouterOutputs } from '@/trpc/shared'

type ShowStatisticsProps = Readonly<{
	show: NonNullable<RouterOutputs['tmdb']['getShowById']> | NonNullable<RouterOutputs['tmdb']['getMovieById']>
}>
// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export const ShowStatistics = ({ show }: ShowStatisticsProps) => {
	return <div>ShowStatitics</div>
}
