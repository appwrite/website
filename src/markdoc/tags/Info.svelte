<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        title: string;
        children?: Snippet;
    }

    const { title, children }: Props = $props();
</script>

<div class="web-inline-info not-prose my-12!">
    <span class="icon-info" aria-hidden="true"></span>
    <h5 class="text-sub-body text-primary font-medium">{title}</h5>
    {@render children?.()}
</div>
