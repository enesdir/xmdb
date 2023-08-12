import { Logo } from '@/components/Brand'
import { CustomLink } from '@/components/CustomLink'
import { CardContainer, CardTitle } from '@/features/auth/components/Card'
import { SignUpForm } from '@/features/auth/components/SignUpForm/SignUpForm'

// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'

export default async function Register() {
	// const session = await getServerSession()
	// if (!!session) redirect('/')

	return (
		<section>
			<div className='mx-auto py-8'>
				<Logo />
				<CardContainer>
					<CardTitle text='Create account' />
					<SignUpForm />
					<p>
						Already have an account?{' '}
						<CustomLink href='/ap/login' variant='classic'>
							Sign in
						</CustomLink>
					</p>
				</CardContainer>
			</div>
		</section>
	)
}
