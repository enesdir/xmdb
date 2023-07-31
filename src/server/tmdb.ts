import axios from 'axios'

import { env } from '@/env.mjs'

const TMBD_API_ENDPOINT = 'https://api.themoviedb.org/3'

export const tmdb = axios.create({
	baseURL: TMBD_API_ENDPOINT,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
		Authorization: `Bearer ${env.TMDB_READ_ACCESS_TOKEN}`,
	},
	params: {
		api_key: env.TMDB_API_KEY,
		language: 'en-US',
	},
})
