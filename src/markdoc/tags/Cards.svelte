<script lang="ts">
    import { type Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();
</script>

<div>
    <ul class="web-grid-row-2">
        {@render children()}
    </ul>
</div>

<style>
    div {
        margin-block-start: 1rem;
        margin-block-end: 2rem;
    }
</style>
