/// <reference types="vitest" />
/// <reference types="vite/client" />
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react-swc'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, '**/playwright/**'],
		alias: {
			'@/': fileURLToPath(new URL('./src/', import.meta.url)),
			'~/': fileURLToPath(new URL('./', import.meta.url)),
		},
		setupFiles: ['dotenv/config'],
	},
})
