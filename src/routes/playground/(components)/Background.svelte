<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
</script>

<div
    class={classNames(
        'bg-grid relative h-[586px] w-screen',
        'after:absolute after:inset-0 after:z-10 after:bg-gradient-to-b after:from-white after:via-[#19191C]/64 after:to-[#19191C]'
    )}
/>

<style>
    .bg-grid {
        --color: #eeeef0;
        --size: var(--spacing-2);
        --gap: calc(var(--size) * 0.5);
        background-color: var(--color);
        background-image: repeating-linear-gradient(
                to right,
                transparent,
                transparent var(--size),
                white var(--size),
                white calc(var(--size) + var(--gap))
            ),
            repeating-linear-gradient(
                to bottom,
                transparent,
                transparent var(--size),
                white var(--size),
                white calc(var(--size) + var(--gap))
            );
    }
</style>
