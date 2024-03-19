<script lang="ts">
    import { type TableOfContentsItem, type TableOfContentsElements, melt } from '@melt-ui/svelte';
    import { getTocCtx } from './TocRoot.svelte';

    export let tree: TableOfContentsItem[] = [];
    export let activeHeadingIdxs: number[];
    export let item: TableOfContentsElements['item'];
    export let level = 1;

    const {
        toc: {
            helpers: { isActive }
        }
    } = getTocCtx();
</script>

<ul class="aw-page-steps-list aw-sub-body-500">
    {#if tree && tree.length}
        {#each tree as heading, i (i)}
            <li>
                <a
                    class:is-selected={$isActive(heading.id)}
                    href="#{heading.id}"
                    use:melt={$item(heading.id)}
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
