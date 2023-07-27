import { AuthLink } from '@/components/Link/AuthLink'

export const APFooter = () => {
	return (
		<div className='mt-4 flex items-center justify-center space-x-2'>
			<AuthLink label='Help' href='#' />
			<AuthLink label='Conditions of Use' href='/help/conditions' />
			<AuthLink label='Privacy Notice' href='/privacy' />
		</div>
	)
}
