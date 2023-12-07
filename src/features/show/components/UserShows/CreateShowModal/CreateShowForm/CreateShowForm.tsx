import { useState } from 'react'
import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/Button'
import { FileButton } from '@/components/FileButton'
import { ImagesSlider } from '@/components/ImagesSlider'
import { SelectInput } from '@/components/SelectInput'
import { Textarea } from '@/components/Textarea'
import { TextField } from '@/components/TextField'
import { DEFAULT_ERROR_MESSAGE } from '@/constants/appConfigurations'
import { createUrlFromFile } from '@/utils/file'
import { useCreateShowForm } from './useCreateShowForm'

type CreateShowFormProps = Readonly<{
	onSuccess?: () => void
}>

export const CreateShowForm = ({ onSuccess }: CreateShowFormProps) => {
	const [images, setImages] = useState<string[]>([])

	const {
		isPending,
		handleFormSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
	} = useCreateShowForm({
		onSuccess,
		onUnknownError: () => toast.error(DEFAULT_ERROR_MESSAGE),
	})
	return (
		<div className='space-y-3.5'>
			{images.length > 0 && <ImagesSlider images={images} />}
			<form onSubmit={handleFormSubmit} className='space-y-3.5'>
				<TextField
					type='text'
					label='Title'
					placeholder='Title'
					required={true}
					error={errors?.title?.message}
					{...register('title')}
				/>
				<Textarea
					label='Description'
					placeholder='Show description'
					required={true}
					error={errors?.description?.message}
					{...register('description')}
				/>
				<Textarea
					label='Overview'
					placeholder='Show Overview'
					required={false}
					error={errors?.overview?.message}
					{...register('overview')}
				/>
				<TextField
					type='text'
					label='Original Title'
					placeholder='Original Title'
					required={false}
					error={errors?.original_title?.message}
					{...register('original_title')}
				/>
				<SelectInput
					label='Original Language'
					placeholder='Original Language'
					required={false}
					error={errors?.original_language?.message}
					{...register('original_language')}
				>
					{Object.values(ORIGINAL_LANGUAGE).map((value) => {
						return (
							<option key={value} value={value}>
								{value}
							</option>
						)
					})}
				</SelectInput>
				<SelectInput
					label='Media Type'
					placeholder='Media Type'
					required={true}
					error={errors?.media_type?.message}
					{...register('media_type')}
				>
					{Object.values(MEDIA_TYPE).map((value) => {
						return (
							<option key={value} value={value}>
								{value}
							</option>
						)
					})}
				</SelectInput>
				<TextField
					type='text'
					label='Director'
					placeholder='Director'
					required={true}
					error={errors?.director?.message}
					{...register('director')}
				/>
				<TextField
					type='text'
					label='trailer'
					placeholder='Trailer url'
					required={false}
					error={errors?.trailer?.message}
					{...register('trailer')}
				/>
				{/* <TextField
					type='text'
					label='Cast'
					placeholder='Cast'
					required={false}
					error={errors?.cast?.message}
					{...register('cast', {
						setValueAs: (v: string) => (v === '' ? undefined : Array.from((v as string)?.split(','))),
					})}
				/> */}
				<FileButton
					accept='image/png,image/jpeg'
					limit={3}
					icon={true}
					multiple={true}
					fill={true}
					onFiles={(files) => {
						setImages(Array.from(files).map(createUrlFromFile))
					}}
					onLimitError={() => {
						toast.error('You can upload up to 3 photos per post!')
					}}
					{...register('images')}
				>
					Upload images
				</FileButton>
				<Button
					type='submit'
					variant='primary'
					isLoading={isPending}
					disabled={images.length === 0 || isSubmitSuccessful}
					fill
				>
					Create a new post
				</Button>
			</form>
		</div>
	)
}
