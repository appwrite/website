<script context="module" lang="ts">
    export type Tutorial = {
        title: string;
        framework?: string;
        category?: string;
        step: number;
        href: string;
        draft?: boolean;
        difficulty?: string;
        readtime?: string;
        back: string;
    };
</script>

<script lang="ts">
    import { DocsTutorial } from '$lib/layouts';
    import { getContext, setContext } from 'svelte';
    import { MainFooter } from '$lib/components';
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { writable } from 'svelte/store';
    import type { LayoutContext } from './Article.svelte';
    import { DOCS_TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_HOST } from '$lib/utils/metadata';

    export let title: string;
    export let description: string;
    export let step: number;
    export let date: string;
    export let back: string;

    setContext<LayoutContext>('headings', writable({}));

    const tutorials = getContext<Tutorial[]>('tutorials');
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
            selected: selected === id,
            level: heading.level
        });
        return carry;
    }, []);

    const seoTitle = title + DOCS_TITLE_SUFFIX;
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';
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
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<DocsTutorial {toc} {back} {tutorials} {date} currentStep={step}>
    <slot />
</DocsTutorial>
<MainFooter variant="docs" />
