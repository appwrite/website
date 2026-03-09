<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import { getRoutePrompt } from '$lib/utils/routePrompts';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { platformMap } from '$lib/utils/references';
    import { copy } from '$lib/utils/copy';
    import MarkdownIt from 'markdown-it';

    interface Props {
        path?: string;
    }

    let { path = undefined }: Props = $props();

    const promptFrontmatter = getContext<string | undefined>('prompt_path');

    const md = new MarkdownIt('commonmark');

    md.renderer.rules.fence = (tokens, idx) => {
        const token = tokens[idx];
        const lang = (token.info?.trim() || 'sh') as Language;
        const code = token.content.replace(/\n$/, '');
        const codeHtml = getCodeHtml({ content: code, language: lang, withLineNumbers: true });

        const badge = platformMap[lang] ?? lang;
        const badgeHtml = badge
            ? `<div class="flex gap-4"><div class="web-tag"><span class="text">${badge}</span></div></div>`
            : '';

        return (
            `<section class="dark web-code-snippet not-prose my-8!" aria-label="code-snippet panel">` +
            `<header class="web-code-snippet-header">` +
            `<div class="web-code-snippet-header-start">${badgeHtml}</div>` +
            `<div class="web-code-snippet-header-end">` +
            `<ul class="buttons-list flex gap-2">` +
            `<li class="buttons-list-item ps-5">` +
            `<button class="web-icon-button js-copy-btn" aria-label="copy code from code-snippet">` +
            `<span class="web-icon-copy" aria-hidden="true"></span>` +
            `</button>` +
            `</li>` +
            `</ul>` +
            `</div>` +
            `</header>` +
            `<div class="web-code-snippet-content">${codeHtml}</div>` +
            `</section>`
        );
    };

    const resolvedPath = $derived(path ?? promptFrontmatter);
    const promptText = $derived(resolvedPath ? getRoutePrompt(resolvedPath) : null);
    const renderedHtml = $derived(promptText ? md.render(promptText) : '');

    let container = $state<HTMLDivElement | undefined>(undefined);

    onMount(() => {
        container?.querySelectorAll<HTMLButtonElement>('.js-copy-btn').forEach((btn) => {
            const code = btn.closest('.web-code-snippet')?.querySelector('code')?.textContent ?? '';
            btn.addEventListener('click', () => copy(code));
        });
    });
</script>

{#if renderedHtml}
    <div bind:this={container}>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html renderedHtml}
    </div>
{/if}
