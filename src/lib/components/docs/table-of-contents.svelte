<script lang="ts" context="module">
    export type TocItem = {
        title: string;
        href: string;
        step?: number;
        selected?: boolean;
        children?: Array<{
            title: string;
            href: string;
            selected: boolean;
        }>;
    };
</script>

<script lang="ts">
    import { scrollToTop } from '$lib/actions/scrollToTop';

    export let toc: Array<TocItem> = [];
</script>

<aside
    class="web-references-menu relative z-10 mt-8 flex flex-col border-l border-white/5 pt-2 px-4"
>
    <div class="sticky top-[7.5rem] flex flex-col gap-6 [inline-size:255px]">
        {#if toc && toc.length > 0}
            <div class="flex items-center justify-between gap-4">
                <h5 class="web-references-menu-title text-micro uppercase">On This Page</h5>
            </div>
            <ol class="web-references-menu-list">
                {#each toc as parent (parent.href)}
                    <li class="web-references-menu-item">
                        <a
                            href={parent.href}
                            class="web-references-menu-link"
                            class:is-selected={parent.selected}
                        >
                            {#if parent?.step}
                                <span class="web-numeric-badge">{parent.step}</span>
                            {/if}
                            <span class="text-caption">{parent.title}</span>
                        </a>
                        {#if parent.children}
                            <ol class="web-references-menu-list mt-4 ml-8">
                                {#each parent.children as child}
                                    <li class="web-references-menu-item">
                                        <a href={child.href} class="web-references-menu-link">
                                            <span class="text-caption">{child.title}</span>
                                        </a>
                                    </li>
                                {/each}
                            </ol>
                        {/if}
                    </li>
                {/each}
            </ol>
            <div class="border-greyscale-900/4 border-t pt-5">
                <button class="web-link inline-flex items-center gap-2" use:scrollToTop>
                    <span class="web-icon-arrow-up" aria-hidden="true" />
                    <span class="text-caption">Back to top</span>
                </button>
            </div>
        {/if}
    </div>
</aside>
