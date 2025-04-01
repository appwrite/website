<script lang="ts">
    import { Tooltip } from '$lib/components';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { platformMap } from '$lib/utils/references';
    import '$scss/hljs.css';
    import { getContext, hasContext } from 'svelte';

    import type { CodeContext } from '$markdoc/tags/MultiCode.svelte';
    import { melt } from '@melt-ui/svelte';

    interface Props {
        text: string;
        language?: Language;
        process?: boolean;
        withLineNumbers?: boolean;
    }

    let { text, language = 'typescript', process = true, withLineNumbers = true }: Props = $props();

    const insideMultiCode = hasContext('multi-code');
    const selected = insideMultiCode ? getContext<CodeContext>('multi-code').selected : null;

    const CopyStatus = {
        Copy: 'Copy',
        Copied: 'Copied!'
    };

    let copyText = $state(CopyStatus.Copy);
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

    let result = $derived(
        process
            ? getCodeHtml({
                  content: text,
                  language: language ?? 'sh',
                  withLineNumbers
              })
            : text
    );
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
