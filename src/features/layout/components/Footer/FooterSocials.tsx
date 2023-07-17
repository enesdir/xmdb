import { List, ListItem } from '@/components/List/'
import { SocialLink } from '@/components/SocialLink'
import { socialMediaLinks } from '@/features/layout/constants/socialMediaLinks'

export const FooterSocials = () => {
	return (
		<div className='my-4'>
			<List>
				{socialMediaLinks.map((socialMedia) => (
					<ListItem className='mx-2' key={socialMedia.platform}>
						<SocialLink href={socialMedia.href} />
					</ListItem>
				))}
			</List>
		</div>
	)
}
