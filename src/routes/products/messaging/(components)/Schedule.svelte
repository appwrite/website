<script lang="ts">
    import { getLocalTimeZone, today } from '@internationalized/date';
    import { createCalendar, melt } from '@melt-ui/svelte';
    import Step from './Step.svelte';
    import { Button } from '$lib/components/ui';

    const curr = today(getLocalTimeZone());

    const {
        elements: { calendar, heading, grid, cell, prevButton, nextButton },
        states: { months, headingValue, value },
        helpers: { isDateDisabled, isDateUnavailable },
        options: { locale }
    } = createCalendar({
        defaultValue: curr
    });

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<Step title="Step 3: Schedule">
    <div class="blur"></div>
    <div class="wrapper">
        <div class="calendar" use:melt={$calendar}>
            <header>
                <button class="web-icon-button" use:melt={$prevButton}>
                    <div class="web-icon-chevron-left"></div>
                </button>
                <div class="flex items-center gap-4">
                    <div class="text-label text-primary" use:melt={$heading}>
                        {$headingValue}
                    </div>
                    <Button
                        variant="secondary"
                        onclick={() => value.set(curr)}
                        style="height: min-content; padding-block: 0 !important;"
                    >
                        Today
                    </Button>
                </div>
                <button class="web-icon-button" use:melt={$nextButton}>
                    <div class="web-icon-chevron-right"></div>
                </button>
            </header>

            {#each $months as month}
                <div class="grid" use:melt={$grid}>
                    {#each weekdays as day}
                        <span class="text-micro uppercase">
                            {day}
                        </span>
                    {/each}

                    {#each month.weeks as weekDates}
                        {#each weekDates as date}
                            <div
                                data-role="gridcell"
                                aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
                            >
                                <button use:melt={$cell(date, month.value)}>
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

        <div class="time-picker web-is-only-desktop">
            {#each { length: 11 } as _, i}
                <div>
                    <span>{(3 + i).toString().padStart(2, '0')}</span>
                    <span>:</span>
                    <span>{25 + i}</span>
                </div>
            {/each}
        </div>
    </div>

    <h3 class="text-title font-aeonik-pro text-primary">Schedule your messages</h3>
    <p class="text-description">Send messages immediately or schedule them for future delivery.</p>
</Step>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .wrapper {
        display: grid;
        grid-template-columns: auto auto;
        gap: 5rem;
        align-items: center;
        justify-content: center;
        margin-block-start: 4.5rem;
        @media (max-width: 700px) {
            display: flex;
            justify-content: center;
        }
    }

    .blur {
        position: absolute;
        background: radial-gradient(
            circle at center,
            hsl(178, 54%, 69%, 0.6) 0%,
            hsl(178, 54%, 69%, 0) 70%
        );

        width: 505px;
        height: 505px;
        inset-block-start: 10rem;
        filter: blur(100px);

        pointer-events: none;
    }

    .calendar {
        @include gradients.border-gradient;
        --m-border-radius: 1.5rem;
        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.07),
            hsl(0, 0%, 100%, 0)
        );
        width: 30rem;

        background: hsl(240, 6%, 12%, 0.64);
        backdrop-filter: blur(30px);
        @media (max-width: 768px) {
            margin-inline: auto;
            max-width: 30rem;
        }
        @media (max-width: 500px) {
            margin-inline: auto;
            max-width: 20rem;
        }
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.125rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin-block-start: 1.75rem;
        width: 100%;

        text-align: center;

        [data-role='gridcell'] button {
            aspect-ratio: 1;
            width: 100%;
            font-size: 1.5rem;
            position: relative;

            color: white;

            transition: 150ms ease;

            @media screen and (max-width: 500px) {
                font-size: 1rem;
            }

            span {
                position: relative;
            }

            &[data-disabled] {
                color: hsl(0, 0%, 100%, 0.5);
                cursor: not-allowed;
            }

            &:not(:is([data-disabled], [data-selected])):hover {
                opacity: 0.75;
            }

            &::before {
                content: '';
                position: absolute;
                inset: 0.725rem;

                background: linear-gradient(
                    to bottom right,
                    hsl(178, 54%, 100%) -20%,
                    hsl(178, 54%, 69%) 30%,
                    hsl(178, 54%, 69%, 0.62)
                );
                border-radius: 1rem;

                opacity: 0;
                transform: scale(0.95);
                transition:
                    opacity 150ms ease,
                    transform 150ms ease;
            }

            &[data-selected] {
                color: black;

                &::before {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }

    .time-picker {
        user-select: none;
        position: relative;

        > div {
            display: grid;
            grid-template-columns: 77px 16px 77px;
            text-align: center;
            color: hsl(0, 0%, 100%, 0.5);

            &:is(:nth-child(1), :nth-last-child(1)) {
                font-size: 12px;
            }

            &:is(:nth-child(2), :nth-last-child(2)) {
                font-size: 14px;
            }

            &:is(:nth-child(3), :nth-last-child(3)) {
                font-size: 16px;
            }

            &:is(:nth-child(4), :nth-last-child(4)) {
                font-size: 24px;
            }

            &:is(:nth-child(5), :nth-last-child(5)) {
                font-size: 32px;
            }

            &:nth-child(6) {
                font-size: 38px;
                color: white;
            }
        }

        &::before {
            content: '';
            position: absolute;
            inset-inline-start: 0;
            height: 50%;
            width: 100%;
            inset-block-start: 0;
            inset-block-end: 50%;
            background: linear-gradient(
                to bottom,
                hsl(270, 4%, 10%, 0) 0%,
                hsl(270, 4%, 10%, 0) 10%,
                hsl(270, 4%, 10%, 1)
            );
            transform: rotate(180deg);
            z-index: 10;
        }
        &::after {
            content: '';
            position: absolute;
            inset: 0;
            inset-block-start: 50%;
            background: linear-gradient(
                to bottom,
                hsl(270, 4%, 10%, 0) 0%,
                hsl(270, 4%, 10%, 0) 10%,
                hsl(270, 4%, 10%, 1)
            );
            z-index: 10;
        }
    }

    h3 {
        text-align: center;
        margin-block-start: 4.5rem;
        @media screen and (max-width: 1024px) {
            text-align: left;
        }
    }

    h3 + p {
        text-align: center;
        margin-block-start: 1.5rem;
        max-width: 20rem;
        margin-inline: auto;

        @media screen and (max-width: 1024px) {
            padding-block-end: var(--padding-block-end);
            text-align: left;
            margin-inline: 0;
            max-width: 100%;
        }
    }
</style>
