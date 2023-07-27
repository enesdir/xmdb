type EmptyDataAlertProps = Readonly<{
	message: string
}>

export const EmptyDataAlert = ({ message }: EmptyDataAlertProps) => (
	<div>
		<div className='mx-auto h-auto w-full max-w-xs' />
		<p className='mt-4 text-center text-lg font-medium'>{message}</p>
	</div>
)
