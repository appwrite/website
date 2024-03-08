<script lang="ts">
    import { platformMap } from '$lib/utils/references';
    import { writable } from 'svelte/store';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { Select, Tooltip } from '$lib/components';

    export let selected: Language = 'js';
    export let data: { language: string; content: string; platform?: string }[] = [];
    export let width: number | null = null;
    export let height: number | null = null;

    $: snippets = writable(new Set(data.map((d) => d.language)));

    $: content = data.find((d) => d.language === selected)?.content ?? '';

    $: platform = data.find((d) => d.language === selected)?.platform ?? '';

    snippets?.subscribe((n) => {
        if (selected === null && n.size > 0) {
            selected = Array.from(n)[0] as Language;
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

    $: result = getCodeHtml({ content, language: selected ?? 'sh', withLineNumbers: true });
    $: options = Array.from($snippets).map((language) => ({
        value: language,
        label: platformMap[language]
    }));
</script>

<section
    class="theme-dark aw-code-snippet"
    aria-label="code-snippet panel"
    style={`width: ${width ? width / 16 + 'rem' : 'inherit'}; height: ${
        height ? height / 16 + 'rem' : 'inherit'
    }`}
>
    <header class="aw-code-snippet-header">
        <div class="aw-code-snippet-header-start">
            <div class="u-flex u-gap-16">
                {#if platform}
                    <div class="aw-tag"><span class="text">{platform}</span></div>
                {/if}
            </div>
        </div>
        <div class="aw-code-snippet-header-end">
            <ul class="buttons-list u-flex u-gap-8">
                <li class="buttons-list-item u-flex u-cross-child-scenter">
                    <Select bind:value={selected} bind:options />
                </li>
                <li class="buttons-list-item aw-u-padding-inline-start-20">
                    <Tooltip>
                        <button
                            on:click={handleCopy}
                            class="aw-icon-button"
                            aria-label="copy code from code-snippet"
                            ><span class="aw-icon-copy" aria-hidden="true" /></button
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
        class="aw-code-snippet-content"
        style={`height: ${height ? height / 16 + 'rem' : 'inherit'}`}
    >
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html result}
    </div>
</section>
