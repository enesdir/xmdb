import { Container } from '@/components/'
import { PROJECT_NAME } from '@/lib/constants'

export const Footer = () => (
	<Container as='footer' className='flex flex-col items-center border-t py-10 leading-5'>
		Copyright &copy; 2023 | {PROJECT_NAME}
		<a href='#' target='_blank' className='font-semibold hover:underline'>
			Source code
		</a>
	</Container>
)
