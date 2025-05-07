<script lang="ts">
    import Lockup from './init/(components)/lockup.svelte';
    import { isStarted } from './init/+page.svelte';
    import type { Snippet } from 'svelte';
    import { Main } from '$lib/layouts';
    import { page } from '$app/state';
    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();
</script>

<Main>
    <div
        class="flex min-h-screen flex-col bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDI1MCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHk9IjI1MSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8cmVjdCB4PSIxMjAiIHk9IjQ5NiIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8L3N2Zz4K)] bg-[size:calc(100vw_/_11)] bg-[position:center_top]"
    >
        {@render children()}
        {#if page.url.pathname.includes('/init/tickets') && !isStarted}
            <div class="overflow-y-hidden">
                <Lockup class="-mb-[24rem] w-full" />
            </div>
        {/if}
    </div>
</Main>
