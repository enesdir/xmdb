import { Logo } from '@/components/Brand'
import { Button } from '@/components/Button'
import { AuthLink } from '@/components/Link/AuthLink'
import { TextWithDivider } from '@/components/Text'

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
					<form className=''>
						<div className='mb-4'>
							<label className='mb-2 block text-xs font-bold text-gray-700' htmlFor='email'>
								Email
							</label>
							<input
								className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none'
								type='email'
								id='email'
								name='email'
								placeholder='john@example.com'
							/>
						</div>
						<div className='mb-4'>
							<div className='mb-2 flex justify-between'>
								<label className='block text-xs font-bold text-gray-700' htmlFor='password'>
									Password
								</label>
								<AuthLink href={'/ap/forgotpassword'} label='Forgot your password?' className='text-xs' />
							</div>
							<input
								className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none'
								type='password'
								id='password'
								name='password'
								placeholder='********'
							/>
						</div>
					</form>
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
