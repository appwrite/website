<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    export let mode: 'dark' | 'light' = 'light';
    export let alignment: 'left' | 'center' = 'left';
</script>

<div
    class={classNames('flex h-10 w-full items-center justify-between border-2 px-4', {
        'border-t-white/76 border-r-[rgba(0,_0,_0_,24%)] border-b-[rgba(0,_0,_0_,24%)] border-l-white/76 bg-[#1D1D21]':
            mode === 'dark',
        'border-t-white border-r-[#87878A] border-b-[#87878A] border-l-white bg-[#EDEDF0]':
            mode === 'light'
    })}
>
    <div
        class={classNames('flex-1 space-y-1.5', {
            'order-2': alignment === 'left'
        })}
    >
        {#each Array.from({ length: 3 }) as _}
            <div
                class={classNames('h-0.5 w-full', {
                    'bg-[#414146]': mode === 'dark',
                    'bg-[#d8d8d8]': mode === 'light'
                })}
            />
        {/each}
    </div>
    <span
        class={classNames('font-aeonik-fono tracking-loose px-6 text-xs uppercase', {
            'text-[#EDEDF0]': mode === 'dark',
            'text-[#2D2D31]': mode === 'light',
            'order-1 !pl-0': alignment === 'left'
        })}><slot /></span
    >
    {#if alignment === 'center'}
        <div class="flex-1 space-y-1.5">
            {#each Array.from({ length: 3 }) as _}
                <div
                    class={classNames('h-0.5 w-full', {
                        'bg-[#414146]': mode === 'dark',
                        'bg-[#d8d8d8]': mode === 'light'
                    })}
                />
            {/each}
        </div>
    {/if}
</div>
