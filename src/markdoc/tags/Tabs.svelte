<script lang="ts" context="module">
    import type { Writable } from 'svelte/store';
    export type TabsContext = Writable<{
        content: ReturnType<typeof createTabs>['elements']['content'];
        triggers: Map<string, string>;
    }>;
</script>

<script lang="ts">
    import { createTabs } from '@melt-ui/svelte';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    const {
        elements: { root, list, content, trigger },
        states: { value }
    } = createTabs();

    const ctx = setContext<TabsContext>(
        'tabs',
        writable({
            content,
            triggers: new Map()
        })
    );
</script>

<div class="web-card is-normal mt-4" {...$root} use:root>
    <div class="tabs flex gap-4">
        <ul class="tabs-list flex items-center gap-4" {...$list} use:list>
            {#each $ctx.triggers.entries() as [id, title]}
                <li class="tabs-item hover:bg-white/[0.04] rounded-t-[0.625rem]">
                    <button
                        class="tabs-button px-1 py-[0.625rem] font-light outline-none bg-clip-padding data-[state=active]:text-white cursor-pointer"
                        class:is-selected={$value === id}
                        {...$trigger(id)}
                        use:trigger>{title}</button
                    >
                </li>
            {/each}
        </ul>
    </div>
    <slot />
</div>
