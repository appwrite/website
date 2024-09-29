import { sentrySvelteKit } from '@sentry/sveltekit';
import dynamicImport from 'vite-plugin-dynamic-import';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    plugins: [
        sentrySvelteKit({
            adapter: 'node',
            sourceMapsUploadOptions: {
                org: 'appwrite',
                project: 'website'
            }
        }),
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
        }),
        ViteMinifyPlugin({
            removeAttributeQuotes: true
        })
    ],
    build: {
        minify: true,
        reportCompressedSize: false,
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
