<script lang="ts">
    import { setContext } from 'svelte';

    setContext('no-paragraph', true);
</script>

<blockquote class="web-blockquote">
    <p class="text-description">
        <slot />
    </p>
</blockquote>
