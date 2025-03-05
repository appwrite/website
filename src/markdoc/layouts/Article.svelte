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
    import SeoOgImage from '$lib/components/SeoOgImage.svelte';
    import { DocsArticle } from '$lib/layouts';
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { DOCS_TITLE_SUFFIX, OVERVIEW_TITLE_SUFFIX } from '$routes/titles';
    import { getContext, setContext } from 'svelte';
    import { page } from '$app/stores';

    export let title: string;
    export let description: string;
    export let back: string | undefined = undefined;
    export let difficulty: string | undefined = undefined;
    export let readtime: string | undefined = undefined;
    export let date: string | undefined = undefined;

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

    const isProductsPage = /^\/docs\/products\/[^/]+$/.test($page.route.id!.toString());

    let seoTitle = title + DOCS_TITLE_SUFFIX;
    if (isProductsPage) seoTitle = title + OVERVIEW_TITLE_SUFFIX;
</script>

<svelte:head>
    <!-- Titles -->
    <title>{seoTitle}</title>
    <meta property="og:title" content={seoTitle} />
    <meta name="twitter:title" content={seoTitle} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <SeoOgImage {title} {description} />
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
