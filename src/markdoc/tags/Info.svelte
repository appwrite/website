<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        title: string;
        children?: Snippet;
    }

    const { title, children }: Props = $props();
</script>

<div class="bg-card border-smooth not-prose my-12! flex flex-col gap-3 rounded-xl border p-4">
    <span class="icon-info" style:font-size="1.5rem" aria-hidden="true"></span>
    <h5 class="text-description text-primary font-medium">{title}</h5>
    <p class="text-paragraph-lg text-secondary">{@render children?.()}</p>
</div>
