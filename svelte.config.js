import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocessMeltUI } from '@melt-ui/pp';
import { markdoc } from 'svelte-markdoc-preprocess';
import sequence from 'svelte-sequential-preprocessor';
import adapter from '@sveltejs/adapter-static';

function absoulute(path) {
    return join(dirname(fileURLToPath(import.meta.url)), path)
}

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([
		vitePreprocess(),
		markdoc({
			generateSchema: true,
			nodes: absoulute('./src/markdoc/nodes/_Module.svelte'),
			tags: absoulute('./src/markdoc/tags/_Module.svelte'),
			partials: absoulute('./src/partials'),
			layouts: {
				default: absoulute('./src/markdoc/layouts/Article.svelte'),
				article: absoulute('./src/markdoc/layouts/Article.svelte'),
				tutorial: absoulute('./src/markdoc/layouts/Tutorial.svelte')
			}
		}),
		preprocessMeltUI()
	]),
	extensions: ['.markdoc', '.svelte', '.md'],
	kit: {
		adapter: adapter(),
		alias: {
			$routes: './src/routes',
			$scss: './src/scss',
			$appwrite: './node_modules/@appwrite.io/repo',
			$markdoc: './src/markdoc'
		},
        prerender: {
            handleHttpError: 'warn',
			handleMissingId: 'warn'
        },
	}
};
export default config;
