<script lang="ts">
    import '$scss/hljs.css';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { getContext, hasContext } from 'svelte';
    import { platformMap } from '$lib/utils/references';
    import { Tooltip } from '$lib/components';
    import { copy } from '$lib/utils/copy';

    import { melt } from '@melt-ui/svelte';
    import type { CodeContext } from '$markdoc/tags/MultiCode.svelte';

    export let text: string;
    export let language: Language = 'typescript';
    export let process = true;
    export let withLineNumbers = true;

    const insideMultiCode = hasContext('multi-code');
    const selected = insideMultiCode ? getContext<CodeContext>('multi-code').selected : null;

    const CopyStatus = {
        Copy: 'Copy',
        Copied: 'Copied!'
    } as const;

    type CopyStatusType = keyof typeof CopyStatus;
    type CopyStatusValue = (typeof CopyStatus)[CopyStatusType];

    let copyText: CopyStatusValue = CopyStatus.Copy;

    async function handleCopy() {
        await copy(text);

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
                ctx.content.set(text);
            }
        });
    }

    $: result = process
        ? getCodeHtml({
              content: text,
              language: language ?? 'sh',
              withLineNumbers
          })
        : text;
</script>

{#if insideMultiCode}
    {#if $selected === language}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html result}
    {/if}
{:else}
    <section class="dark web-code-snippet" aria-label="code-snippet panel">
        <header class="web-code-snippet-header">
            <div class="web-code-snippet-header-start">
                {#if platformMap[language]}
                    <div class="flex gap-4">
                        <div class="web-tag">
                            <span class="text">{platformMap[language]}</span>
                        </div>
                    </div>
                {/if}
            </div>
            <div class="web-code-snippet-header-end">
                <ul class="buttons-list flex gap-2">
                    <li class="buttons-list-item ps-5">
                        <Tooltip>
                            {#snippet asChild(trigger)}
                                <button
                                    on:click={handleCopy}
                                    class="web-icon-button"
                                    aria-label="copy code from code-snippet"
                                >
                                    <span class="web-icon-copy" aria-hidden="true"></span>
                                </button>
                            {/snippet}
                            {#snippet tooltip()}
                                <span>{copyText}</span>
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

<style lang="scss">
    button {
        position: relative;

        .web-icon-copy {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .web-code-snippet {
        margin-block-end: 1rem;
        margin-top: 1rem;
    }

    .web-code-snippet-content {
        max-height: 600px;
        overflow-y: auto;
    }
</style>
