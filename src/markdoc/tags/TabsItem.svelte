<script lang="ts">
    import { getContext, type Snippet } from 'svelte';
    import type { TabsContext } from './Tabs.svelte';

    interface Props {
        id: string;
        title: string;
        children: Snippet;
    }

    const { id, title, children }: Props = $props();

    const ctx = getContext<TabsContext>('tabs');

    const { content } = $ctx;

    ctx.update((n) => {
        n.triggers.set(id, title);
        return n;
    });
</script>

<div class="web-u-sep-block-start pt-4" {...$content(id)} use:content>
    {@render children()}
</div>
