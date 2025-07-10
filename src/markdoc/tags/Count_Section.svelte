<script lang="ts">
    import { type Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();
</script>

<section class="count-secondary-title">
    {@render children()}
</section>

<style lang="scss">
    .count-secondary-title {
        gap: 0.25rem;
    }
</style>
