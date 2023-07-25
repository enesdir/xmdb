import { BaseLinkIcon } from '@/components/BaseLinkIcon'
import { List, ListItem } from '@/components/List/'
import { footerRows1Links, footerRows2Links } from '@/features/layout/constants/footerLinks'

export const FooterLinks = () => {
	return (
		<div>
			<ListItem className='mx-0 hidden align-middle lg:inline-block'>
				<BaseLinkIcon href='#' label='ExternalLink'>
					Get the XMDb App
				</BaseLinkIcon>
			</ListItem>
			<List className='inline md:inline' variant='inline'>
				{footerRows1Links.map((footerLink) => (
					<ListItem className='' key={footerLink.text} variant='inline'>
						<BaseLinkIcon href={footerLink.href} label='ExternalLink'>
							{footerLink.text}
						</BaseLinkIcon>
					</ListItem>
				))}
			</List>
			<div>
				<List className='inline md:inline' variant='inline'>
					{footerRows2Links.map((footerLink) => (
						<ListItem className='mx-2' key={footerLink.text} variant='inline'>
							<BaseLinkIcon href={footerLink.href} label='ExternalLink'>
								{footerLink.text}
							</BaseLinkIcon>
						</ListItem>
					))}
				</List>
			</div>
		</div>
	)
}
