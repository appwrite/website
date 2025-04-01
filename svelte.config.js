import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import nodeAdapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { dirname, join } from 'path';
import { markdoc } from 'svelte-markdoc-preprocess';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config}*/
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: sequence([
        vitePreprocess({ script: true}),
        markdoc({
            generateSchema: true,
            nodes: absolute('./src/markdoc/nodes/_Module.svelte'),
            tags: absolute('./src/markdoc/tags/_Module.svelte'),
            partials: absolute('./src/partials'),
            layouts: {
                default: absolute('./src/markdoc/layouts/Article.svelte'),
                article: absolute('./src/markdoc/layouts/Article.svelte'),
                tutorial: absolute('./src/markdoc/layouts/Tutorial.svelte'),
                post: absolute('./src/markdoc/layouts/Post.svelte'),
                author: absolute('./src/markdoc/layouts/Author.svelte'),
                category: absolute('./src/markdoc/layouts/Category.svelte'),
                policy: absolute('./src/markdoc/layouts/Policy.svelte'),
                changelog: absolute('./src/markdoc/layouts/Changelog.svelte'),
                integration: absolute('./src/markdoc/layouts/Integration.svelte')
            }
        }),
        preprocessMeltUI()
    ]),
    extensions: ['.markdoc', '.svelte', '.md'],
    kit: {
        adapter: nodeAdapter(),
        version: {
            pollInterval: 60 * 1000
        },
        alias: {
            $routes: './src/routes',
            $scss: './src/scss',
            $icons: './src/icons',
            $appwrite: './node_modules/@appwrite.io/repo',
            $markdoc: './src/markdoc'
        },
        prerender: {
            concurrency: 32,
            /**
             * @type {import('@sveltejs/kit').PrerenderMissingIdHandler}
             */
            handleMissingId: ({ path, message }) => {
                if (path.startsWith('/docs/references/')) {
                    console.warn(message);
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;

/**
 * @param {string} path
 * @returns {string}
 */
function absolute(path) {
    return join(dirname(fileURLToPath(import.meta.url)), path);
}
