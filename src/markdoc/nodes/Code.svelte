<script lang="ts">
    import type { Writable } from 'svelte/store';
    import { getContext, hasContext } from 'svelte';

    export let content: string;

    if (hasContext('isCodeInsideTd')) {
        // setting `true` correctly uses flex & align center.
        getContext<Writable<boolean>>('isCodeInsideTd').set(true);
    }
</script>

<span class="web-inline-code web-code">{content}</span>

<style>
    .web-inline-code {
        font-size: 0.75rem;
        line-height: 1.25rem;
    }
</style>
