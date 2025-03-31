<script lang="ts">
    import { platformMap } from '$lib/utils/references';
    import { writable } from 'svelte/store';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { Select, Tooltip } from '$lib/components';

    export let selected: string = '';
    export let data: { language: string; content: string; platform: string }[] = [];
    export let height: number | null = null;

    $: snippets = writable(new Set(data.map((d) => `${d.platform}`)));

    $: content = data.find((d) => `${d.platform}` === selected)?.content ?? '';

    $: ({ language } =
        data.find((d) => `${d.platform}` === selected) ?? ({} as (typeof data)[number]));

    snippets?.subscribe((n) => {
        if (selected === '' && n.size > 0) {
            selected = Array.from(n)[0];
        }
    });

    enum CopyStatus {
        Copy = 'Copy',
        Copied = 'Copied!'
    }
    let copyText = CopyStatus.Copy;
    async function handleCopy() {
        await copy(content);

        copyText = CopyStatus.Copied;
        setTimeout(() => {
            copyText = CopyStatus.Copy;
        }, 1000);
    }

    $: result = getCodeHtml({
        content,
        language: (language as Language) ?? 'sh',
        withLineNumbers: true
    });
    $: options = Array.from($snippets).map((key) => {
        const [platform] = key.split('-');

        return {
            value: key,
            label: platform
        };
    });
</script>

<section
    class="dark web-code-snippet mx-auto !max-w-[90vw] md:min-w-2xl"
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
                            on:click={handleCopy}
                            class="web-icon-button"
                            aria-label="copy code from code-snippet"
                            ><span class="web-icon-copy" aria-hidden="true"></span></button
                        >
                        <svelte:fragment slot="tooltip">
                            {copyText}
                        </svelte:fragment>
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
