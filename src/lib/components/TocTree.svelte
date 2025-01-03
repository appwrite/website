<script lang="ts">
    import { type TableOfContentsItem, type TableOfContentsElements, melt } from '@melt-ui/svelte';
    import { getTocCtx } from './TocRoot.svelte';
    import { browser } from '$app/environment';

    export let tree: TableOfContentsItem[] = [];
    export let activeHeadingIdxs: number[];
    export let item: TableOfContentsElements['item'];
    export let level = 1;

    export let showToc = true;

    const {
        toc: {
            helpers: { isActive }
        }
    } = getTocCtx();

    function onItemClick() {
        const isDesktop = browser ? window.innerWidth >= 1024 : false;
        if (!isDesktop) showToc = !showToc;
    }
</script>

<ul class="web-page-steps-list text-sub-body font-medium">
    {#if tree && tree.length}
        {#each tree as heading, i (i)}
            <li>
                <a
                    class:is-selected={$isActive(heading.id)}
                    href="#{heading.id}"
                    use:melt={$item(heading.id)}
                    on:click|preventDefault={onItemClick}
                >
                    <!--  eslint-disable-next-line svelte/no-at-html-tags -->
                    {@html heading.node.innerHTML}
                </a>
                {#if heading.children && heading.children.length}
                    <svelte:self
                        tree={heading.children}
                        level={level + 1}
                        {activeHeadingIdxs}
                        {item}
                    />
                {/if}
            </li>
        {/each}
    {/if}
</ul>
