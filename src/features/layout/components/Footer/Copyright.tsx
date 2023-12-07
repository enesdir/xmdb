import { PROJECT_NAME } from '@/constants/appConfigurations'

export const Copyright = () => {
	return (
		<p className='my-2 p-0 text-xs tracking-wide text-white/70'>
			&copy; 1990-{new Date().getFullYear()} by | {PROJECT_NAME}, inc
		</p>
	)
}
