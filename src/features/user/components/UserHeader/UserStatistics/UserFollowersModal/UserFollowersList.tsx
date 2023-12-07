import { LoadingContent } from '@/components/LoadingContent'
import { useGetFollowers } from '@/features/user/hooks/useGetFollowers'
import { UserList } from '@/features/users/'

type UserFollowersListProps = Readonly<{
	userId: string
}>

export const UserFollowersList = ({ userId }: UserFollowersListProps) => {
	const { followers, isPending } = useGetFollowers(userId)

	return (
		<LoadingContent isLoading={isPending}>
			<UserList alertMessage="This user doesn't have any followers yet!" users={followers} />
		</LoadingContent>
	)
}
