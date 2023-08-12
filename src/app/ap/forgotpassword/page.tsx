// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'
import { Logo } from '@/components/Brand'
import { CustomLink } from '@/components/CustomLink'
import { CardContainer, CardTitle } from '@/features/auth/components/Card'
import { ForgotPasswordForm } from '@/features/auth/components/ForgotPasswordForm/ForgotPasswordForm'

export default async function ForgotPassword() {
	// const session = await getServerSession()
	// if (!!session) redirect('/')

	return (
		<section>
			<div className='mx-auto py-8'>
				<Logo />
				<CardContainer>
					<CardTitle text='Password assistance' />
					<p className='text-black'>
						Enter the email address associated with your XMDb account, then click Continue.
					</p>
					<ForgotPasswordForm />
				</CardContainer>
				<div>
					<h1 className='text-[17px] font-normal leading-[1.255]'>Has your email address changed?</h1>
					<p className='text-[13px]'>
						Please visit our{' '}
						<CustomLink href='#' variant='classic'>
							Registration Help page
						</CustomLink>{' '}
						for account recovery assistance
					</p>
				</div>
			</div>
		</section>
	)
}
