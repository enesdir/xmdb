import { CustomLink } from '@/components/CustomLink'
import { List, ListItem } from '@/components/List/'
import { footerRows1Links, footerRows2Links } from '@/features/layout/constants/footerLinks'

export const FooterLinks = () => {
	return (
		<div>
			<ListItem className='mx-0 hidden align-middle lg:inline-block'>
				<CustomLink href='https://duckduckgo.com' variant='modern' hasExternalIcon>
					Get the XMDb App
				</CustomLink>
			</ListItem>
			<List className='inline md:inline' variant='inline'>
				{footerRows1Links.map((footerLink) => (
					<ListItem className='' key={footerLink.text} variant='inline'>
						{/* @ts-expect-error:todo */}
						<CustomLink href={footerLink.href} variant='modern' hasExternalIcon>
							{footerLink.text}
						</CustomLink>
					</ListItem>
				))}
			</List>
			<div>
				<List className='inline md:inline' variant='inline'>
					{footerRows2Links.map((footerLink) => (
						<ListItem className='mx-2' key={footerLink.text} variant='inline'>
							{/* @ts-expect-error:todo */}
							<CustomLink href={footerLink.href} hasExternalIcon variant='modern'>
								{footerLink.text}
							</CustomLink>
						</ListItem>
					))}
				</List>
			</div>
		</div>
	)
}
