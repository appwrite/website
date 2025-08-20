<script lang="ts">
    import { setContext, type Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();

    setContext('no-paragraph', true);
</script>

<blockquote>
    <p>
        {@render children()}
    </p>
</blockquote>
