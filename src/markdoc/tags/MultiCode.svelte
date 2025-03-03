<script context="module" lang="ts">
    import type { Writable } from 'svelte/store';
    export type CodeContext = {
        selected: Writable<string | null>;
        snippets: Writable<Set<Language>>;
        content: Writable<string>;
    };
</script>

<script lang="ts">
    import { copy } from '$lib/utils/copy';
    import { type Readable, writable } from 'svelte/store';
    import { Select, Tooltip } from '$lib/components';
    import { getContext, hasContext, onMount, setContext } from 'svelte';
    import { type Language, multiCodeSelectedLanguage } from '$lib/utils/code';
    import { Platform, platformMap, preferredPlatform } from '$lib/utils/references';

    setContext<CodeContext>('multi-code', {
        content: writable(''),
        snippets: writable(new Set()),
        selected: multiCodeSelectedLanguage
    });

    const { snippets, selected, content } = getContext<CodeContext>('multi-code');

    selected.subscribe((language) => {
        // apply if exists in snippets
        if (language && $snippets.has(language as Language)) {
            preferredPlatform.set(language as Platform);
        }
    });

    preferredPlatform.subscribe((language) => {
        if (
            language &&
            language !== $selected &&
            // apply if exists in snippets
            $snippets.has(language)
        ) {
            selected.set(language);
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

    let hasMounted = false;

    onMount(() => {
        if ($preferredPlatform && $snippets.has($preferredPlatform)) {
            selected.set($preferredPlatform);
        }

        hasMounted = true;
    });

    if (hasContext('tabs-selection')) {
        const tabsSelection = getContext<Readable<string>>('tabs-selection');
        tabsSelection.subscribe(() => {
            if (!hasMounted) return;
            if (!$snippets.has($preferredPlatform)) {
                selected.set(Array.from($snippets)[0]);
            }
        });
    }
</script>

<section class="dark web-code-snippet" aria-label="code-snippet panel">
    <header class="web-code-snippet-header">
        <div class="web-code-snippet-header-start">
            <div class="flex gap-4">
                <!-- <div class="web-tag"><span class="text">Default</span></div> -->
            </div>
        </div>
        <div class="web-code-snippet-header-end">
            <ul class="buttons-list flex gap-3">
                <li class="buttons-list-item flex self-center">
                    <Select
                        bind:value={$selected}
                        options={Array.from($snippets).map((language) => ({
                            value: language,
                            label: platformMap[language]
                        }))}
                    />
                </li>

                <li class="buttons-list-item" style="padding-inline-start: 13px">
                    <Tooltip>
                        <button
                            on:click={handleCopy}
                            class="web-icon-button"
                            aria-label="copy code from code-snippet"
                            ><span class="web-icon-copy" aria-hidden="true" /></button
                        >
                        <svelte:fragment slot="tooltip">
                            {copyText}
                        </svelte:fragment>
                    </Tooltip>
                </li>
            </ul>
        </div>
    </header>
    <div class="web-code-snippet-content"><slot /></div>
</section>
