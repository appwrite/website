<script lang="ts">
    import { rect } from '$lib/actions';
    import { writable } from 'svelte/store';

    const bodyRect = writable<DOMRect | null>(null);
</script>

<div class="relative">
    <div
        class="true-body"
        style:width={`${$bodyRect?.width ?? 0}px`}
        style:height={`${$bodyRect?.height ?? 0}px`}
    ></div>
    <div class="body" use:rect={bodyRect}>
        <slot />
    </div>
</div>

<style lang="scss">
    .relative {
        position: relative;
        overflow: hidden;
    }

    .body {
        position: absolute;
        left: 0;
        top: 0;
    }

    .true-body {
        transition: 0.2s ease;
    }
</style>
