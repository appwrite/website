<script lang="ts" context="module">
    import type { Writable } from 'svelte/store';
    export type TabsContext = Writable<{
        content: ReturnType<typeof createTabs>['elements']['content'];
        triggers: Map<string, string>;
    }>;
</script>

<script lang="ts">
    import Select from '$lib/components/Select.svelte';
    import { classNames } from '$lib/utils/classnames';
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

    setContext('tabs-selection', value);
</script>

<div class="web-card is-normal mt-4" {...$root} use:root>
    <div
        class="tabs flex items-center gap-4 overflow-scroll"
        style="scrollbar-width: none; -ms-overflow-style: none;"
    >
        <ul class="tabs-list hidden items-center gap-4 sm:flex" {...$list} use:list>
            {#each Array.from($ctx.triggers.entries()).slice(0, 7) as [id, title]}
                <li
                    class="tabs-item shrink-0 rounded-t-[0.625rem] text-center hover:bg-white/4"
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
            {#if Array.from($ctx.triggers.entries()).slice(7).length}
                {@const entries = Array.from($ctx.triggers.entries())}
                {@const desktopOptions = entries.slice(7)}

                <li>
                    <Select
                        initialLabel="More"
                        options={desktopOptions.map(([value, label]) => {
                            return {
                                value,
                                label
                            };
                        })}
                        bind:value={$value}
                    />
                </li>
            {/if}
        </ul>
        <ul class="tabs-list flex items-center gap-4 sm:hidden" {...$list} use:list>
            {#each Array.from($ctx.triggers.entries()).slice(0, 2) as [id, title]}
                <li
                    class="tabs-item shrink-0 rounded-t-[0.625rem] text-center hover:bg-white/4"
                    class:text-[var(--color-primary)]={$value === id}
                >
                    <button
                        class={classNames(ssNames(
                            'tabs-button relative cursor-pointer bg-clip-padding py-[0.625rem] px-1 font-light outline-none',
                            'after:relative after:top-1 after:bottom-0 after:block after:h-px after:transition-all',
                            {
                                'after:bg-[var(--color-primary)]': $value === id
                            }
                        )}
                        {...$trigger(id)}
                        use:trigger
                    >
                        {title}
                    </button>
                </li>
            {/each}
            {#if Array.from($ctx.triggers.entries()).slice(2).length}
                {@const entries = Array.from($ctx.triggers.entries())}
                {@const desktopOptions = entries.slice(2)}

                <li>
                    <Select
                        initialLabel="More"
                        options={desktopOptions.map(([value, label]) => {
                            return {
                                value,
                                label
                            };
                        })}
                        bind:value={$value}
                    />
                </li>
            {/if}
        </ul>
    </div>
    <slot />
</div>
