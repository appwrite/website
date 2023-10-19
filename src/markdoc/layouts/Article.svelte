<script context="module" lang="ts">
    import { writable, type Writable } from 'svelte/store';

    export type LayoutContext = Writable<
        Record<
            string,
            {
                title: string;
                step?: number;
                visible: boolean;
            }
        >
    >;
</script>

<script lang="ts">
    import { MainFooter } from '$lib/components';
    import { DocsArticle } from '$lib/layouts';
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import { DOCS_TITLE_SUFFIX } from '$routes/titles';
    import { getContext, setContext } from 'svelte';

    export let title: string;
    export let description: string;
    export let back: string | undefined = undefined;
    export let difficulty: string | undefined = undefined;
    export let readtime: string | undefined = undefined;
    export let date: string;

    setContext<LayoutContext>('headings', writable({}));

    const headings = getContext<LayoutContext>('headings');

    let selected: string | undefined = undefined;
    headings.subscribe((n) => {
        const noVisible = Object.values(n).every((n) => !n.visible);
        if (selected && noVisible) {
            return;
        }
        for (const key in n) {
            if (n[key].visible) {
                selected = key;
                break;
            }
        }
    });

    $: entries = Object.entries($headings);
    $: toc = entries.reduce<Array<TocItem>>((carry, [id, heading]) => {
        carry.push({
            title: heading.title,
            href: `#${id}`,
            step: heading.step,
            selected: selected === id
        });
        return carry;
    }, []);

    const seoTitle = title + DOCS_TITLE_SUFFIX;
    const ogImage = buildOpenGraphImage(title, description);
</script>

<svelte:head>
    <!-- Titles -->
    <title>{seoTitle}</title>
    <meta property="og:title" content={seoTitle} />
    <meta name="twitter:title" content={seoTitle} />
    <!-- Desscription -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<DocsArticle {title} {back} {toc} {date}>
    <svelte:fragment slot="metadata">
        {#if difficulty}
            <li>{difficulty}</li>
        {/if}
        {#if readtime}
            <li>{readtime} min</li>
        {/if}
    </svelte:fragment>
    <slot />
</DocsArticle>
<MainFooter variant="docs" />
