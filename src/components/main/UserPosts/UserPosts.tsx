'use client'

import type { User } from '~/src/server/modules/users/usersSchemas'
import { LoadingContent } from '@/components/common/LoadingContent'
import { useGetUserPosts } from '@/hooks/useGetUserPosts'
import { PostList } from './PostList/PostList'

type UserPostsProps = Readonly<{
	user: User
}>

export const UserPosts = ({ user: { username } }: UserPostsProps) => {
	const { posts, isLoading } = useGetUserPosts(username || '')

	return (
		<LoadingContent isLoading={isLoading}>
			<PostList posts={posts} />
		</LoadingContent>
	)
}
