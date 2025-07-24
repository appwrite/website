<script lang="ts">
    import { Select, Tooltip } from '$lib/components';
    import { getCodeHtml, type Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { platformMap } from '$lib/utils/references';
    import { writable } from 'svelte/store';

    export let selected: Language = 'js';
    export let data: { language: string; content: string; platform?: string }[] = [];
    export let width: number | null = null;
    export let height: number | null = null;

    function decodeContent(content: string): string {
        let decodedContent = content;
        
        if (content.startsWith('data:text/plain;base64,')) {
            try {
                const base64Content = content.replace('data:text/plain;base64,', '');
                decodedContent = atob(base64Content);
            } catch (err) {
                console.warn('Failed to decode data content:', err);
                return content;
            }
        }
        
        if (isBase64(content)) {
            try {
                decodedContent = atob(content);
            } catch (err) {
                console.warn('Failed to decode base64 content:', err);
                return content;
            }
        }
        
        return decodedContent
            .replace(/\r\n/g, '\n')  
            .replace(/\r/g, '\n')    
            .replace(/\n{3,}/g, '\n\n'); 
    }

    function isBase64(str: string): boolean {
        if (!str || str.length === 0) return false;
        try {
            const decoded = atob(str);
            const reencoded = btoa(decoded);
            return reencoded === str;
        } catch (err) {
            return false;
        }
    }

    $: snippets = writable(new Set(data.map((d) => d.language)));

    $: rawContent = data.find((d) => d.language === selected)?.content ?? '';

    $: content = decodeContent(rawContent);

    $: platform = data.find((d) => d.language === selected)?.platform ?? '';

    snippets?.subscribe((n) => {
        if (selected === null && n.size > 0) {
            selected = Array.from(n)[0] as Language;
        }
    });

    const CopyStatus = {
        Copy: 'Copy',
        Copied: 'Copied!'
    } as const;
    type CopyStatusType = keyof typeof CopyStatus;
    type CopyStatusValue = (typeof CopyStatus)[CopyStatusType];

    let copyText: CopyStatusValue = CopyStatus.Copy;
    async function handleCopy() {
        await copy(content);

        copyText = CopyStatus.Copied;
        setTimeout(() => {
            copyText = CopyStatus.Copy;
        }, 1000);
    }

    $: result = getCodeHtml({
        content,
        language: selected ?? 'sh',
        withLineNumbers: true
    });
    $: options = Array.from($snippets).map((language) => ({
        value: language,
        label: platformMap[language]
    }));
</script>

<section
    class="dark web-code-snippet !max-w-[90vw] md:!max-w-3xl md:min-w-3xl"
    aria-label="code-snippet panel"
    style={`width: ${width ? width / 16 + 'rem' : 'inherit'}; height: ${
        height ? height / 16 + 'rem' : 'inherit'
    }`}
>
    <header class="web-code-snippet-header">
        <div class="web-code-snippet-header-start">
            <div class="flex gap-4">
                {#if platform}
                    <div class="web-tag"><span class="text">{platform}</span></div>
                {/if}
            </div>
        </div>
        <div class="web-code-snippet-header-end">
            <ul class="buttons-list divide-greyscale-750 flex gap-3 divide-x">
                <li class="buttons-list-item flex self-center pr-6">
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
                        {#snippet tooltip()}
                            <span>
                                {copyText}
                            </span>
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
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html result}
    </div>
</section>
