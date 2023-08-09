import { Logo } from '@/components/Brand'
import { Button } from '@/components/Button'
import { AuthLink } from '@/components/Link/AuthLink'
import { TextWithDivider } from '@/components/Text'
import { SignInForm } from '@/features/auth/components/SignInForm/SignInForm'

// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'

export default async function Login() {
	// const session = await getServerSession()
	// if (!!session) redirect('/')

	return (
		<section>
			<div className='mx-auto py-8'>
				<Logo />
				<div className='mx-auto my-4 max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300'>
					<h1 className='mb-4 text-4xl font-medium'>Sign in</h1>
					<SignInForm />
					<div className='px-8'>
						<Button fill className='' variant='brand'>
							<span>Sign in</span>
						</Button>
						<TextWithDivider text='New to XMDb?' />
						<p>
							Don&apos;t have an account? <AuthLink href={'/ap/register'} label='Register' />
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
