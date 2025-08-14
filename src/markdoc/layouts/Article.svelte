<script module lang="ts">
    import { writable, type Writable } from 'svelte/store';

    export type LayoutContext = Writable<
        Record<
            string,
            {
                title: string;
                step?: number;
                visible: boolean;
                level: number;
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
    import { getContext, setContext, type Snippet } from 'svelte';
    import { page } from '$app/state';

    interface ArticleProps {
        title: string;
        description: string;
        back?: string;
        difficulty?: string;
        readtime?: string;
        date?: string;
        children: Snippet;
    }

    const { title, description, back, difficulty, readtime, date, children }: ArticleProps =
        $props();

    setContext<LayoutContext>('headings', writable({}));

    const headings = getContext<LayoutContext>('headings');

    let selected = $state<string>('');
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

    const entries = $state(Object.entries($headings));
    const toc = $derived(
        entries.reduce<Array<TocItem>>((headings, [id, heading]) => {
            headings.push({
                title: heading.title,
                href: `#${id}`,
                step: heading.step,
                selected: selected === id,
                level: heading.level
            });
            return headings;
        }, [])
    );

    console.log(children());

    const isProductsPage = /^\/docs\/products\/[^/]+$/.test(page.route.id!.toString());

    let seoTitle = $derived(title + DOCS_TITLE_SUFFIX);
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
    {@render children()}
</DocsArticle>
<MainFooter variant="docs" />
