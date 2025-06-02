<script lang="ts" module>
    import { animate } from 'motion';

    let tooltipData = $state<{
        city: string | null;
        code: string | null;
        available: boolean | null;
    }>({
        city: null,
        code: null,
        available: null
    });

    export const handleSetActiveTooltip = (city: string, code: string, available: boolean) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        tooltipData = {
            city,
            code,
            available
        };
    };

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    export const handleResetActiveTooltip = (delay?: number) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        if (delay) {
            timeoutId = setTimeout(() => {
                tooltipData = {
                    city: null,
                    code: null,
                    available: null
                };
                timeoutId = null;
            }, delay);
        } else {
            tooltipData = {
                city: null,
                code: null,
                available: null
            };
        }
    };
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    interface TooltipProps {
        x: number;
        y: number;
        theme?: 'light' | 'dark';
    }

    const { x, y, theme = 'light' }: TooltipProps = $props();

    let city = $state<HTMLElement | null>(null);

    $effect(() => {
        if (!city) return;
        animate(city, { y: [-5, 0], filter: ['blur(4px)', '0px'] }, { duration: 0.2 });
    });
</script>

<div class={classNames('pointer-events-none absolute z-100 hidden md:block', theme)}>
    {#if tooltipData.city}
        <div
            class={classNames(
                'border-gradient relative z-100 flex w-[190px] flex-col gap-2 rounded-[10px] p-2 backdrop-blur-lg before:rounded-[10px] after:rounded-[10px]',
                { 'bg-transparent': theme === 'dark', 'bg-white': theme === 'light' }
            )}
            style:transform={`translateX(${x + 20}px) translateY(${y - 425}px)`}
        >
            {#key tooltipData.city}
                <span class="text-primary text-caption w-fit" bind:this={city}>
                    {tooltipData.city}
                    ({tooltipData.code})
                </span>
            {/key}
            {#if tooltipData.available}
                <div
                    class={classNames(
                        'text-caption flex h-5 items-center justify-center place-self-start rounded-md p-1 text-center',
                        {
                            'bg-[#10B981]/16 text-[#0A714F]': theme === 'light',
                            'bg-[#10B981]/24 text-[#B4F8E2]': theme === 'dark'
                        }
                    )}
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
    {/if}
</div>
