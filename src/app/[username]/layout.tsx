import UserShowProviders from './providers'

export default function UserLayout(props) {
	return <UserShowProviders modal={props.show}>{props.children}</UserShowProviders>
}
