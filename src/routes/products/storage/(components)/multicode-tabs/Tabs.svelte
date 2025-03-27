<script lang="ts" context="module">
    import type { Writable } from 'svelte/store';
    export type TabsContext = Writable<{
        content: ReturnType<typeof createTabs>['elements']['content'];
        triggers: Map<string, string>;
    }>;
</script>

<script lang="ts">
    import { cn } from '$lib/utils/classnames';
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

<div {...$root} use:root>
    <div class="flex gap-4 overflow-auto">
        <ul class="flex items-center gap-2" {...$list} use:list>
            {#each $ctx.triggers.entries() as [id, title]}
                <li
                    class={cn(
                        'text-caption rounded-full border border-transparent bg-[#19191C]/4 text-black',
                        {
                            'border-black/8 bg-white': $value === id
                        }
                    )}
                >
                    <button
                        class="cursor-pointer py-1 px-2 text-xs font-light outline-none md:text-sm"
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
