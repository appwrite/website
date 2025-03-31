<script lang="ts">
    import '$scss/hljs.css';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { getContext, hasContext } from 'svelte';
    import { platformMap } from '$lib/utils/references';
    import { Tooltip } from '$lib/components';
    import { copy } from '$lib/utils/copy';
    import type { CodeContext } from '../tags/MultiCode.svelte';
    import { melt } from '@melt-ui/svelte';
    import { isInTutorialDocs } from '$lib/layouts/Docs.svelte';

    export let content: string;
    export let toCopy: string | undefined = undefined;
    export let language: Language;
    export let process: boolean;
    export let withLineNumbers = true;
    export let badge: string | null = null;

    const inTutorialDocs = isInTutorialDocs();
    const insideMultiCode = hasContext('multi-code');
    const selected = insideMultiCode ? getContext<CodeContext>('multi-code').selected : null;

    enum CopyStatus {
        Copy = 'Copy',
        Copied = 'Copied!'
    }
    let copyText = CopyStatus.Copy;
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

        ctx.selected.subscribe((n) => {
            if (n === language) {
                ctx.content.set(content);
            }
        });
    }

    $: result = process
        ? getCodeHtml({ content, language: language ?? 'sh', withLineNumbers })
        : content;

    $: badgeValue = badge ?? platformMap[language];
</script>

{#if insideMultiCode}
    {#if $selected === language}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html result}
    {/if}
{:else}
    <section
        class="dark web-code-snippet"
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
                            <button
                                slot="asChild"
                                let:trigger
                                use:melt={trigger}
                                on:click={handleCopy}
                                class="web-icon-button"
                                aria-label="copy code from code-snippet"
                            >
                                <span class="web-icon-copy" aria-hidden="true"></span>
                            </button>
                            <svelte:fragment slot="tooltip">
                                {copyText}
                            </svelte:fragment>
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
</style>
