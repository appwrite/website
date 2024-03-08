<script context="module" lang="ts">
    import type { Writable } from 'svelte/store';
    export type CodeContext = {
        selected: Writable<string | null>;
        snippets: Writable<Set<Language>>;
        content: Writable<string>;
    };
</script>

<script lang="ts">
    import { platformMap } from '$lib/utils/references';
    import { getContext, setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import type { Language } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import { Select, Tooltip } from '$lib/components';

    setContext<CodeContext>('multi-code', {
        selected: writable(null),
        snippets: writable(new Set()),
        content: writable('')
    });

    const { snippets, selected, content } = getContext<CodeContext>('multi-code');

    snippets.subscribe((n) => {
        if ($selected === null && n.size > 0) {
            $selected = Array.from(n)[0];
        }
    });

    enum CopyStatus {
        Copy = 'Copy',
        Copied = 'Copied!'
    }
    let copyText = CopyStatus.Copy;
    async function handleCopy() {
        await copy($content);

        copyText = CopyStatus.Copied;
        setTimeout(() => {
            copyText = CopyStatus.Copy;
        }, 1000);
    }
</script>

<section class="theme-dark aw-code-snippet" aria-label="code-snippet panel">
    <header class="aw-code-snippet-header">
        <div class="aw-code-snippet-header-start">
            <div class="u-flex u-gap-16">
                <!-- <div class="aw-tag"><span class="text">Default</span></div> -->
            </div>
        </div>
        <div class="aw-code-snippet-header-end">
            <ul class="buttons-list u-flex u-gap-8">
                <li class="buttons-list-item u-flex u-cross-child-scenter">
                    <Select
                        bind:value={$selected}
                        options={Array.from($snippets).map((language) => ({
                            value: language,
                            label: platformMap[language]
                        }))}
                    />
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
    <div class="aw-code-snippet-content"><slot /></div>
</section>
