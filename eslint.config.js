import prettier from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        },
        rules: {
            // TODO: remove them one by one
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-duplicate-enum-values': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'svelte/infinite-reactive-loop': 'off',
            'svelte/require-each-key': 'off',
            'svelte/no-immutable-reactive-statements': 'off',
            'svelte/no-at-html-tags': 'off',
            'svelte/no-useless-mustaches': 'off',
            'svelte/no-reactive-reassign': 'off',
            'svelte/no-reactive-literals': 'off',
            // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
            // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
            'no-undef': 'off'
        }
    },
    {
        files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: ['.svelte'],
                parser: ts.parser,
                svelteConfig
            }
        }
    }
);
