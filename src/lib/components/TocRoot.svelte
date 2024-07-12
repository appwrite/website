<script context="module" lang="ts">
    import {
        createTableOfContents,
        type CreateTableOfContentsArgs,
        type TableOfContents
    } from '@melt-ui/svelte';
    import { getContext, setContext } from 'svelte';

    const TOC_KEY = Symbol();
    export type TocContext = {
        toc: TableOfContents;
    };

    const setCtx = (ctx: TocContext) => {
        setContext<TocContext>(TOC_KEY, ctx);
    };

    export const getTocCtx = () => {
        return getContext<TocContext>(TOC_KEY);
    };
</script>

<script lang="ts">
    export let selector = '#main';
    export let exclude: CreateTableOfContentsArgs['exclude'] = ['h1', 'h3', 'h4', 'h5', 'h6'];
    export let activeType: CreateTableOfContentsArgs['activeType'] = 'highest';
    export let scrollOffset: CreateTableOfContentsArgs['scrollOffset'] = 0;

    const toc = createTableOfContents({
        selector,
        exclude,
        activeType,
        scrollOffset
    });

    setCtx({ toc });
</script>

<slot />
