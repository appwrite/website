import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocessMeltUI } from '@melt-ui/pp';
import { markdoc } from 'svelte-markdoc-preprocess';
import sequence from 'svelte-sequential-preprocessor';
import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';

function absoulute(path) {
    return join(dirname(fileURLToPath(import.meta.url)), path);
}

const isVercel = process.env.VERCEL === '1';

const adapter = isVercel ? staticAdapter() : nodeAdapter();

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
                tutorial: absoulute('./src/markdoc/layouts/Tutorial.svelte'),
                post: absoulute('./src/markdoc/layouts/Post.svelte'),
                author: absoulute('./src/markdoc/layouts/Author.svelte'),
                category: absoulute('./src/markdoc/layouts/Category.svelte'),
                policy: absoulute('./src/markdoc/layouts/Policy.svelte')
            }
        }),
        preprocessMeltUI()
    ]),
    extensions: ['.markdoc', '.svelte', '.md'],
    kit: {
        adapter,
        files: {
            hooks: {
                server: isVercel ? undefined : './src/hooks/server.ts'
            }
        },
        alias: {
            $routes: './src/routes',
            $scss: './src/scss',
            $icons: './src/icons',
            $appwrite: './node_modules/@appwrite.io/repo',
            $markdoc: './src/markdoc'
        }
    }
};
export default config;
