<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    export let alignment: 'left' | 'center' = 'left';
    let className: string = '';

    export { className as class };
</script>

<div class={classNames('w-full')}>
    <div
        class={classNames(
            'retro flex h-10 w-full items-center justify-between border-2 px-4',
            className
        )}
    >
        <div class={classNames('flex-1 space-y-1.5')}>
            {#each Array.from({ length: 3 }) as _}
                <div class="h-0.5 w-full bg-[var(--retro-divider)]" />
            {/each}
        </div>
        <span
            class={classNames(
                'font-aeonik-fono tracking-loose text-primary px-3 text-xs uppercase'
            )}><slot /></span
        >

        <div
            class={classNames('space-y-1.5', {
                'basis-[80%]': alignment === 'left',
                'flex-1': alignment === 'center'
            })}
        >
            {#each Array.from({ length: 3 }) as _}
                <div class="h-0.5 w-full bg-[var(--retro-divider)]" />
            {/each}
        </div>
    </div>
</div>
