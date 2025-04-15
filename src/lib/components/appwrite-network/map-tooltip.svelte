<script lang="ts" module>
    import { classNames } from '$lib/utils/classnames';
    import { writable } from 'svelte/store';

    export const tooltipData = writable<{
        city: string | null;
        code: string | null;
        available: boolean | null;
    }>({
        city: null,
        code: null,
        available: null
    });
</script>

<script lang="ts">
    type Props = {
        coords: {
            x: number;
            y: number;
        };
    };

    const { coords }: Props = $props();
</script>

{#if $tooltipData.city}
    <div
        class="pointer-events-none absolute"
        style:left="{coords.x + 10}px"
        style:top="{coords.y - 25}px"
    >
        <div
            class={classNames(
                'bg-card/90 border-gradient relative z-100 flex w-[190px] flex-col gap-2 rounded-[10px] p-2 backdrop-blur-lg before:rounded-[10px] after:rounded-[10px]',
                'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in'
            )}
        >
            <span class="text-primary text-caption w-fit">
                {$tooltipData.city}
                ({$tooltipData.code})
            </span>
            {#if $tooltipData.available}
                <div
                    class="text-caption flex h-5 items-center justify-center place-self-start rounded-md bg-[#10B981]/24 p-1 text-center text-[#B4F8E2]"
                >
                    <span class="text-micro -tracking-tight">Available now</span>
                </div>
            {:else}
                <div
                    class="text-caption flex h-5 items-center justify-center place-self-start rounded-md bg-white/6 p-1 text-center text-white/60"
                >
                    <span class="text-micro -tracking-tight">Planned</span>
                </div>
            {/if}
        </div>
    </div>
{/if}
