<script lang="ts">
    import { Select, Tooltip } from '$lib/components';
    import { classNames } from '$lib/utils/classnames';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { platformMap } from '$lib/utils/references';
    import type { ClassValue } from 'svelte/elements';

    interface MultiFrameworkCodeprops {
        selected?: string;
        data: { language: string; content: string; platform: string }[];
        height?: number | null;
        class?: ClassValue;
    }

    let {
        selected = '',
        data,
        height = null,
        class: className
    }: MultiFrameworkCodeprops = $props();

    let snippets = $derived(new Set(data.map((d) => `${d.platform}`)));

    const content = $derived(data.find((d) => `${d.platform}` === selected)?.content ?? '');

    const { language } = $derived(
        data.find((d) => `${d.platform}` === selected) ?? ({} as (typeof data)[number])
    );

    $effect(() => {
        if (selected === '' && snippets.size > 0) {
            selected = Array.from(snippets)[0];
        }
    });

    const CopyStatus = {
        Copy: 'Copy',
        Copied: 'Copied!'
    } as const;
    type CopyStatusType = keyof typeof CopyStatus;
    type CopyStatusValue = (typeof CopyStatus)[CopyStatusType];

    let copyText: CopyStatusValue = $state(CopyStatus.Copy);
    async function handleCopy() {
        await copy(content);

        copyText = CopyStatus.Copied;
        setTimeout(() => {
            copyText = CopyStatus.Copy;
        }, 1000);
    }

    const result = $derived(
        getCodeHtml({
            content,
            language: (language as Language) ?? 'sh',
            withLineNumbers: true
        })
    );

    let options = $derived(
        Array.from(snippets).map((key) => {
            const [platform] = key.split('-');

            return {
                value: key,
                label: platform
            };
        })
    );
</script>

<section
    class={classNames('dark web-code-snippet mx-auto max-w-[90vw]! md:min-w-2xl', className)}
    aria-label="code-snippet panel"
>
    <header class="web-code-snippet-header">
        <div class="web-code-snippet-header-start">
            <div class="flex gap-4">
                {#if language}
                    <div class="web-tag"><span class="text">{platformMap[language]}</span></div>
                {/if}
            </div>
        </div>
        <div class="web-code-snippet-header-end">
            <ul class="buttons-list flex gap-3">
                <li class="buttons-list-item flex self-center">
                    <Select bind:value={selected} bind:options />
                </li>
                <li class="buttons-list-item" style="padding-inline-start: 13px">
                    <Tooltip>
                        <button
                            onclick={handleCopy}
                            class="web-icon-button"
                            aria-label="copy code from code-snippet"
                            ><span class="web-icon-copy" aria-hidden="true"></span></button
                        >
                        {#snippet tooltip()}
                            {copyText}
                        {/snippet}
                    </Tooltip>
                </li>
            </ul>
        </div>
    </header>
    <div
        class="web-code-snippet-content"
        style={`height: ${height ? height / 16 + 'rem' : 'inherit'}`}
    >
        {@html result}
    </div>
</section>
