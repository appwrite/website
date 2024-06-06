import dynamicImport from 'vite-plugin-dynamic-import';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
    plugins: [
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
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
