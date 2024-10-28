<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
</script>

<div
    class={classNames(
        'relative grid h-[500px] w-screen',
        'before:absolute before:right-0 before:left-0 before:z-10 before:h-1/4 before:bg-gradient-to-b before:from-white before:to-transparent',
        'after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-1/2 after:bg-gradient-to-t after:from-[var(--color)] after:to-transparent'
    )}
/>

<style>
    .grid {
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

        &::before,
        &::after {
            content: '';
        }
    }
</style>
