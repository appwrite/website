<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    export let theme: 'dark' | 'light' = 'light';
    export let alignment: 'left' | 'center' = 'left';
    let className: string = '';

    export { className as class };
</script>

<div class={classNames('w-full', theme)}>
    <div
        class={classNames(
            'retro flex h-10 w-full items-center justify-between border-2 px-4',
            className
        )}
    >
        <div
            class={classNames('flex-1 space-y-1.5', {
                '': alignment === 'left'
            })}
        >
            {#each Array.from({ length: 3 }) as _}
                <div class="h-0.5 w-full bg-[#d8d8d8] dark:bg-[#414146]" />
            {/each}
        </div>
        <span
            class={classNames(
                'font-aeonik-fono tracking-loose px-6 text-xs uppercase text-[#2D2D31] dark:text-[#EDEDF0]'
            )}><slot /></span
        >

        <div
            class={classNames('space-y-1.5', {
                'basis-[80%]': alignment === 'left',
                'flex-1': alignment === 'center'
            })}
        >
            {#each Array.from({ length: 3 }) as _}
                <div class="h-0.5 w-full bg-[#d8d8d8] dark:bg-[#414146]" />
            {/each}
        </div>
    </div>
</div>
