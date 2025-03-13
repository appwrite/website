import { sentrySvelteKit } from '@sentry/sveltekit';
import dynamicImport from 'vite-plugin-dynamic-import';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { enhancedImages } from '@sveltejs/enhanced-img';
import manifestSRI from 'vite-plugin-manifest-sri';

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
            include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
            exclude: ['**/*.avif', '**/*.webp'],
            cache: true,
            cacheLocation: '.cache'
        }),
        manifestSRI({
            algorithms: ['sha384']
        })
    ],
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
    },
    server: {
        allowedHosts: [
            '5173-appwrite-website-46vk5bvcfb8.ws-us118.gitpod.io'
        ]
    }
});
