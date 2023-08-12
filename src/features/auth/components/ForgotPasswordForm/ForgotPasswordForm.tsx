import { Button } from '@/components/Button'
import { CustomLink } from '@/components/CustomLink'
import { TextField } from '@/components/TextField'
import { generateRandomString } from '@/features/auth/utils/generateRandomString'

export const ForgotPasswordForm = () => {
	const generateCaptcha = generateRandomString(6)
	return (
		<form action='' className=''>
			<div className='flex w-full flex-col items-center gap-y-5'>
				<TextField type='email' label='Email address' placeholder='Your email' required={true} />
				Enter the characters you see
				<div className='flex w-full flex-col items-center justify-center'>
					<div className='bg-gradient-to-r from-gray-400 via-gray-200 to-white p-6 text-xl font-black'>
						<span>{generateCaptcha}</span>
					</div>
					<div className='pt-2'>
						<CustomLink href='#' variant='classic'>
							See a new challenge
						</CustomLink>
					</div>
					<div className='py-2'>
						<CustomLink href='#' variant='classic' tabIndex={2} className=''>
							Hear the challenge
						</CustomLink>
					</div>
				</div>
				<TextField type='text' label='Type characters' placeholder='' required={true} />
				<CustomLink href='#' variant='classic' className='w-full self-center py-4'>
					Having trouble or sight impaired?
				</CustomLink>
				<Button fill className='' variant='brand'>
					<span>Continue</span>
				</Button>
			</div>
		</form>
	)
}
