<script lang="ts">
    import { getContext, hasContext } from 'svelte';
    import type { Writable } from 'svelte/store';

    interface Props {
        content: string;
    }

    let { content }: Props = $props();

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
