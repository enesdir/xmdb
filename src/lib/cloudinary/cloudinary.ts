export const createSignature = async ({
	publicId: public_id,
	timestamp,
	secret,
	eager,
	folder,
}: {
	publicId: string
	timestamp: string
	secret: string
	eager?: string
	folder?: string
}) => {
	const encoder = new TextEncoder()
	const data = `${new URLSearchParams({
		...(eager && { eager }),
		...(folder && { folder }),
		public_id,
		timestamp,
	})
		.toString()
		.replaceAll('%2C', ',')
		.replaceAll('%2F', '/')}${secret}`
	const hashBuffer = await crypto.subtle.digest('SHA-1', encoder.encode(data))
	const hashArray = Array.from(new Uint8Array(hashBuffer))
	const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
	return hashHex
}
