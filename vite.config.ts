import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import dynamicImport from 'vite-plugin-dynamic-import';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import manifestSRI from 'vite-plugin-manifest-sri';
import { defineConfig } from 'vitest/config';

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
            include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
            exclude: ['**/*.avif', '**/*.webp'],
            cache: true,
            cacheLocation: '.cache'
        }),
        manifestSRI({
            algorithms: ['sha384']
        })
    ],
    server: {
        allowedHosts: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern'
            }
        },
        devSourcemap: process.env.NODE_ENV !== 'production'
    },
    build: {
        sourcemap: process.env.NODE_ENV !== 'production',
        reportCompressedSize: false
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
