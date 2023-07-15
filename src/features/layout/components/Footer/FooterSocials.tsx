import { SocialLink } from '@/components/SocialLink'
import { socialMediaLinks } from '@/features/layout/constants/socialMediaLinks'

export const FooterSocials = () => {
	return (
		<div className='my-4'>
			<ul className='inline list-none' role='presentation'>
				{socialMediaLinks.map((socialMedia) => (
					<li role='presentation' className='mx-2 inline-block list-none' key={socialMedia.platform}>
						<SocialLink href={socialMedia.href} />
					</li>
				))}
			</ul>
		</div>
	)
}
