<script lang="ts">
    import { cn } from '$lib/utils/cn';

    import { getLocalTimeZone, today } from '@internationalized/date';
    import { createCalendar, melt } from '@melt-ui/svelte';

    const curr = today(getLocalTimeZone());

    const {
        elements: { calendar, heading, grid, cell },
        states: { months, headingValue },
        helpers: { isDateDisabled, isDateUnavailable }
    } = createCalendar({
        defaultValue: curr
    });

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<div class={cn('bg-greyscale-850/90 flex flex-col rounded-2xl p-2')}>
    <div
        class="relative flex h-[250px] flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white/[0.02]"
    >
        <div
            class="calendar mt-6 -mb-12 w-[75%] bg-[hsl(240,_6%,_12%,_0.64)] p-4"
            use:melt={$calendar}
        >
            <header class="mb-3 flex items-center justify-between">
                <button class="web-icon-button" aria-label="Previous">
                    <span class="web-icon-chevron-left"></span>
                </button>

                <div class="font-aeonik-pro text-primary" use:melt={$heading}>
                    {$headingValue}
                </div>

                <button class="web-icon-button" aria-label="Next">
                    <span class="web-icon-chevron-right"></span>
                </button>
            </header>

            {#each $months as month}
                <div class="grid grid-cols-7 gap-x-2 gap-y-4 text-center" use:melt={$grid}>
                    {#each weekdays as day}
                        <span class="text-eyebrow font-aeonik-fono text-[0.625rem] uppercase">
                            {day}
                        </span>
                    {/each}

                    {#each month.weeks as weekDates}
                        {#each weekDates as date}
                            <div
                                class="font-aeonik-pro text-sm font-light"
                                aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
                            >
                                <button
                                    use:melt={$cell(date, month.value)}
                                    class={cn(
                                        'size-5 rounded-md',
                                        'data-[disabled]:opacity-60',
                                        'data-[today]:bg-greyscale-700 data-[today]:text-white'
                                    )}
                                >
                                    <span>
                                        {date.day}
                                    </span>
                                </button>
                            </div>
                        {/each}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">Delayed execution</span>
        <p class="text-secondary">
            Appwrite let you postpone function runs until a specified future time.
        </p>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;
    .calendar {
        @include gradients.border-gradient;
        --m-border-radius: 1rem;
        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.07),
            hsl(0, 0%, 100%, 0)
        );

        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.064) -1.14%,
            rgba(255, 255, 255, 0.0128) 101.14%
        );

        backdrop-filter: blur(30px);
    }
</style>
