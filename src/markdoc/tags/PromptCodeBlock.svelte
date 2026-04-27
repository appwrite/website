<script lang="ts">
    import { Tooltip } from '$lib/components';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { platformMap } from '$lib/utils/references';
    import '$scss/hljs.css';
    import { melt } from '@melt-ui/svelte';

    export let text: string;
    export let lang: Language;

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

    $: result = getCodeHtml({ content: text, language: lang ?? 'sh', withLineNumbers: true });

    $: badgeValue = platformMap[lang];
</script>

<section class="dark web-code-snippet not-prose my-8!" aria-label="code-snippet panel">
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
