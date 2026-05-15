<script lang="ts">
    import { Tooltip } from '$lib/components';
    import { isInTutorialDocs } from '$lib/layouts/Docs.svelte';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { platformMap, preferredPlatform } from '$lib/utils/references';
    import '$scss/hljs.css';
    import { melt } from '@melt-ui/svelte';
    import { isInChangelog } from '../layouts/Changelog.svelte';
    import { getContext, hasContext } from 'svelte';
    import { get } from 'svelte/store';
    import type { CodeContext } from '../tags/MultiCode.svelte';

    interface FenceProps {
        content: string;
        toCopy?: string | undefined;
        language: Language;
        process: boolean;
        withLineNumbers?: boolean;
        badge?: string | null;
    }

    let {
        content,
        toCopy = undefined,
        language,
        process,
        withLineNumbers = true,
        badge = null
    }: FenceProps = $props();

    const inTutorialDocs = isInTutorialDocs();
    const inChangelog = isInChangelog();
    const insideMultiCode = hasContext('multi-code');
    const selected = insideMultiCode ? getContext<CodeContext>('multi-code').selected : null;

    const CopyStatus = {
        Copy: 'Copy',
        Copied: 'Copied!'
    } as const;
    type CopyStatusType = keyof typeof CopyStatus;
    type CopyStatusValue = (typeof CopyStatus)[CopyStatusType];

    let copyText = $state<CopyStatusValue>(CopyStatus.Copy);

    async function handleCopy() {
        await copy(toCopy ?? content);

        copyText = CopyStatus.Copied;
        setTimeout(() => {
            copyText = CopyStatus.Copy;
        }, 1000);
    }

    if (insideMultiCode) {
        const ctx = getContext<CodeContext>('multi-code');

        ctx.snippets.update((n) => {
            n.add(language);

            return n;
        });

        const snippetSet = get(ctx.snippets);
        const pref = get(preferredPlatform);
        if (pref && snippetSet.has(pref as Language)) {
            ctx.selected.set(pref);
        } else {
            const first = Array.from(snippetSet)[0] as Language;
            ctx.selected.set(first);
            if (pref && !snippetSet.has(pref as Language)) {
                preferredPlatform.set(pref);
            }
        }

        ctx.selected.subscribe((n) => {
            if (n === language) {
                ctx.content.set(content);
            }
        });
    }

    let result = $derived(
        process ? getCodeHtml({ content, language: language ?? 'sh', withLineNumbers }) : content
    );

    let badgeValue = $derived(badge ?? platformMap[language]);
</script>

{#if insideMultiCode}
    {#if $selected === language}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html result}
    {/if}
{:else}
    <section
        class="dark web-code-snippet not-prose my-8!"
        class:in-changelog={inChangelog}
        class:no-top-margin={inTutorialDocs}
        aria-label="code-snippet panel"
    >
        <header class="web-code-snippet-header">
            <div class="web-code-snippet-header-start">
                {#if badgeValue}
                    <div class="flex gap-4">
                        <div class="web-tag"><span class="text">{badgeValue}</span></div>
                    </div>
                {/if}
            </div>
            <div class="web-code-snippet-header-end">
                <ul class="buttons-list flex gap-2">
                    <li class="buttons-list-item ps-5">
                        <Tooltip>
                            {#snippet asChild({ trigger })}
                                <button
                                    use:melt={trigger}
                                    onclick={handleCopy}
                                    class="web-icon-button"
                                    aria-label="copy code from code-snippet"
                                >
                                    <span class="web-icon-copy" aria-hidden="true"></span>
                                </button>
                            {/snippet}
                            {#snippet tooltip()}
                                {copyText}
                            {/snippet}
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </header>
        <div class="web-code-snippet-content">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html result}
        </div>
    </section>
{/if}

<style>
    .no-top-margin {
        margin-top: unset !important;
    }

    .in-changelog {
        max-width: 100%;
    }

    .in-changelog .web-code-snippet-content {
        max-width: 100%;
        overflow-x: auto;
        overscroll-behavior-x: contain;
    }

    .in-changelog :global(.web-code-pre) {
        max-width: 100%;
        overflow-x: auto;
    }

    .in-changelog :global(.web-code-body.line-numbers) {
        display: block;
        min-width: max-content;
    }
</style>
