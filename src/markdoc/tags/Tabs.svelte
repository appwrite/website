<script lang="ts" context="module">
    import type { Writable } from 'svelte/store';
    export type TabsContext = Writable<{
        content: ReturnType<typeof createTabs>['elements']['content'];
        triggers: Map<string, string>;
    }>;
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { createTabs } from '@melt-ui/svelte';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { Select } from '$lib/components';

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
    <div
        class="tabs flex items-center gap-4 overflow-scroll"
        style="scrollbar-width: none; -ms-overflow-style: none;"
    >
        <ul class="tabs-list hidden items-center gap-4 md:flex" {...$list} use:list>
            {#each $ctx.triggers.entries() as [id, title]}
                <li
                    class="tabs-item rounded-t-[0.625rem] text-center hover:bg-white/4"
                    class:text-[var(--color-primary)]={$value === id}
                >
                    <button
                        class={classNames(
                            'tabs-button relative cursor-pointer bg-clip-padding py-[0.625rem] px-1 font-light outline-none',
                            'after:relative after:top-1 after:bottom-0 after:block after:h-px after:transition-all',
                            {
                                'after:bg-[var(--color-primary)]': $value === id
                            }
                        )}
                        {...$trigger(id)}
                        use:trigger>{title}</button
                    >
                </li>
            {/each}
        </ul>
        <ul class="tabs-list flex items-center gap-4 md:hidden" {...$list} use:list>
            {#each Array.from($ctx.triggers.entries()).slice(0, 3) as [id, title]}
                <li
                    class="tabs-item rounded-t-[0.625rem] text-center hover:bg-white/4"
                    class:text-[var(--color-primary)]={$value === id}
                >
                    <button
                        class={classNames(
                            'tabs-button relative cursor-pointer bg-clip-padding py-[0.625rem] px-1 font-light outline-none',
                            'after:relative after:top-1 after:bottom-0 after:block after:h-px after:transition-all',
                            {
                                'after:bg-[var(--color-primary)]': $value === id
                            }
                        )}
                        {...$trigger(id)}
                        use:trigger>{title}</button
                    >
                </li>
            {/each}
        </ul>
        <div class="block md:hidden">
            <select id="articles">
                {#each Array.from($ctx.triggers.entries()).slice(4, Array.from($ctx.triggers.entries()).length - 1) as [id, title]}
                    <option value={id}>{title}</option>
                {/each}
            </select>
        </div>
    </div>
    <slot />
</div>
