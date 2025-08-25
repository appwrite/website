<script lang="ts">
    import { getContext, type Snippet } from 'svelte';
    import { type TabsContext, type TabsItemProps } from './Tabs.svelte';

    const ctx = getContext<TabsContext>('tabs');

    const { id, title, children }: TabsItemProps & { children: Snippet } = $props();

    $effect(() => {
        ctx.update((context) => {
            context.triggers.push({ id, title });
            return context;
        });

        return () => {
            ctx.update((context) => {
                context.triggers = context.triggers.filter((trigger) => trigger.id !== id);
                return context;
            });
        };
    });
</script>

<div class="border-smooth -mt-1.25 border-t pt-4" {...$ctx.tabs.getContent(id)}>
    {@render children()}
</div>
