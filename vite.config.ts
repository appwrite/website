import dynamicImport from 'vite-plugin-dynamic-import';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { enhancedImages } from '@sveltejs/enhanced-img';
import type { Plugin } from 'vite';

const envFixer: Plugin = {
    name: 'env-fixer',
    enforce: 'pre',
    transform(code, id) {
        if (!id.includes('.markdoc')) {
            return { code };
        }

        // The replacement uses a zero-width space to avoid being detected by vite
        const transformed = code.replaceAll(/process\.env/g, 'process​.env');
        return {
            code: transformed
        };
    }
};

export default defineConfig({
    plugins: [
        envFixer,
        enhancedImages(),
        sveltekit(),
        dynamicImport({
            filter(id) {
                if (id.includes('/node_modules/@appwrite.io/repo/docs')) {
                    return true;
                }
            }
        }),
        ViteImageOptimizer({
            includePublic: true
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
