<script lang="ts" module>
    import { writable, type Writable } from 'svelte/store';
    import { Tabs } from 'melt/builders';

    export type TabsItemProps = {
        id: string;
        title: string;
    };

    export type TabsContext = Writable<{
        triggers: Array<TabsItemProps>;
        tabs: Tabs<string>;
    }>;
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { setContext, type Snippet } from 'svelte';
    import { Select } from '$lib/components';

    const tabs = new Tabs<string>({
        value: ''
    });

    const ctx = setContext<TabsContext>(
        'tabs',
        writable({
            triggers: [],
            tabs
        })
    );

    $effect(() => {
        if ($ctx.triggers.length > 0 && !$ctx.tabs.value) {
            $ctx.tabs.value = $ctx.triggers[0].id;
        }
    });

    type TabsProps = {
        children: Snippet;
    };

    const { children }: TabsProps = $props();
</script>

<div
    class="dark:bg-greyscale-850/90 mt-4 mb-8 flex flex-col gap-1 rounded-2xl border border-black/8 bg-white/90 px-6 pt-4 pb-6 outline-0 dark:border-white/10"
>
    <div
        class="flex items-center gap-4 overflow-scroll [-ms-overflow-style:none] [scrollbard-width:none]"
    >
        <div class="hidden items-center gap-4 sm:flex" {...tabs.triggerList}>
            {#each $ctx.triggers.slice(0, 7) as { title, id }}
                <button
                    class={classNames(
                        'shrink-0 rounded-t-[0.625rem] text-center hover:bg-white/4',
                        'relative cursor-pointer bg-clip-padding px-1 py-[0.625rem] font-light outline-none',
                        'after:relative after:top-1 after:bottom-0 after:block after:h-px after:transition-all',
                        {
                            'after:bg-(--color-primary)': tabs.value === id
                        }
                    )}
                    {...tabs.getTrigger(id)}
                >
                    {title}
                </button>
            {/each}
            {#if $ctx.triggers.slice(7).length}
                {@const desktopOptions = $ctx.triggers.slice(7)}
                <Select
                    initialLabel="More"
                    options={desktopOptions.map(({ id, title }) => {
                        return {
                            value: id,
                            label: title
                        };
                    })}
                    bind:value={$ctx.tabs.value}
                />
            {/if}
        </div>
        <div class="flex items-center gap-4 sm:hidden" {...tabs.triggerList}>
            {#each $ctx.triggers.slice(0, 2) as { title, id }}
                <button
                    class={classNames(
                        'shrink-0 rounded-t-[0.625rem] text-center hover:bg-white/4',
                        'relative cursor-pointer bg-clip-padding px-1 py-[0.625rem] font-light outline-none',
                        'after:relative after:top-1 after:bottom-0 after:block after:h-px after:transition-all',
                        {
                            'after:bg-(--color-primary)': tabs.value === id
                        }
                    )}
                    {...tabs.getTrigger(id)}
                >
                    {title}
                </button>
            {/each}
            {#if $ctx.triggers.slice(2).length}
                {@const desktopOptions = $ctx.triggers.slice(7)}
                <Select
                    initialLabel="More"
                    options={desktopOptions.map(({ id, title }) => {
                        return {
                            value: id,
                            label: title
                        };
                    })}
                    bind:value={$ctx.tabs.value}
                />
            {/if}
        </div>
    </div>

    {@render children()}
</div>
