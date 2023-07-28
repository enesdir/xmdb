import type { User } from '@/server/modules/users/usersSchemas'

import { useState } from 'react'

import { Button } from '@/components/Button'
import { FileButton } from '@/components/FileButton'
import { UserAvatar } from '@/components/UserAvatar'
import { createUrlFromFile } from '@/utils/file'
import { useUpdateUserAvatarForm } from './useUpdateUserAvatarForm'

type UpdateUserAvatarFormProps = Readonly<{
	onSuccess?: () => void
	user: User
}>

export const UpdateUserAvatarForm = ({
	onSuccess,
	user: { name, image: userImage },
}: UpdateUserAvatarFormProps) => {
	const [image, setImage] = useState(userImage)

	const {
		isLoading,
		handleFormSubmit,
		formState: { isSubmitSuccessful },
		register,
	} = useUpdateUserAvatarForm({
		onSuccess,
	})

	const handleFilesChange = (files: FileList) => {
		// @ts-expect-error: argument sent when has file
		setImage(files.length > 0 ? createUrlFromFile(files[0]) : null)
	}

	return (
		<div className='flex flex-col items-center gap-y-2'>
			<UserAvatar size='xl' user={{ name, image }} />
			<form onSubmit={handleFormSubmit} className='flex w-full flex-col gap-y-2'>
				<div className='grid gap-2 md:grid-cols-2'>
					<FileButton
						accept='image/png,image/jpeg'
						icon={true}
						fill={true}
						onFiles={handleFilesChange}
						{...register('file')}
					>
						Upload new avatar
					</FileButton>
					<Button type='reset' variant='danger' onClick={() => setImage(null)} fill>
						Delete your avatar
					</Button>
				</div>
				<Button
					type='submit'
					variant='primary'
					disabled={image === userImage || isSubmitSuccessful}
					isLoading={isLoading}
					fill
				>
					Update your avatar
				</Button>
			</form>
		</div>
	)
}
