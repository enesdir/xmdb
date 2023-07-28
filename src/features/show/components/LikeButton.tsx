import { AiOutlineHeart } from 'react-icons/ai'

import { IconButton } from '@/components/IconButton'
import { useToggleLike } from '@/features/show/hooks/useToggleLike'
import { useRequiredSession } from '@/hooks/useRequiredSession'

type LikeButtonProps = Readonly<{
	postId: number
	isLike: boolean
	onClick?: () => void
}>

export const LikeButton = ({ postId, isLike, onClick }: LikeButtonProps) => {
	const { toggleLike, isLoading } = useToggleLike(isLike)

	const requiredSession = useRequiredSession()

	const handleButtonClick = async () => {
		await toggleLike(postId)
		onClick?.()
	}

	return (
		<div className='text-xl'>
			<IconButton
				icon={<AiOutlineHeart />}
				label={`Like #${postId} post`}
				variant={isLike ? 'danger' : 'default'}
				disabled={isLoading}
				onClick={requiredSession(handleButtonClick)}
			/>
		</div>
	)
}
