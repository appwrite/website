import dynamicImport from 'vite-plugin-dynamic-import';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		dynamicImport({
			filter(id) {
				if (id.includes('/node_modules/@appwrite.io/repo/docs')) {
					return true;
				}
			}
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use '$scss/abstract' as *;`
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
