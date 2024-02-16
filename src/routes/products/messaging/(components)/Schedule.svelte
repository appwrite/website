<script lang="ts">
    import { getLocalTimeZone, today } from '@internationalized/date';
    import { createCalendar, melt } from '@melt-ui/svelte';
    import Step from './Step.svelte';

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
    <div class="blur" />
    <div class="calendar" use:melt={$calendar}>
        <header>
            <button class="aw-icon-button" use:melt={$prevButton}>
                <div class="aw-icon-chevron-left" />
            </button>
            <div class="u-flex u-gap-16 u-cross-center">
                <div class="aw-label aw-u-color-text-primary" use:melt={$heading}>
                    {$headingValue}
                </div>
                <button
                    class="aw-button is-secondary"
                    on:click={() => value.set(curr)}
                    style="height: min-content; padding-block: 0 !important;"
                >
                    Today
                </button>
            </div>
            <button class="aw-icon-button" use:melt={$nextButton}>
                <div class="aw-icon-chevron-right" />
            </button>
        </header>
        {#each $months as month}
            <div class="grid" use:melt={$grid}>
                {#each weekdays as day}
                    <span class="aw-eyebrow">
                        {day}
                    </span>
                {/each}

                {#each month.weeks as weekDates}
                    {#each weekDates as date}
                        <div
                            role="gridcell"
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
</Step>

<style lang="scss">
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
        @include border-gradient;
        --m-border-radius: 1.5rem;
        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.07),
            hsl(0, 0%, 100%, 0)
        );
        width: 36.25rem;

        background: hsl(240, 6%, 12%, 0.64);
        backdrop-filter: blur(30px);
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

        [role='gridcell'] button {
            aspect-ratio: 1;
            width: 100%;
            font-size: 2rem;
            position: relative;

            color: white;

            transition: 150ms ease;

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
                inset: 0.625rem;

                background: linear-gradient(
                    to bottom right,
                    hsl(178, 54%, 100%) -20%,
                    hsl(178, 54%, 69%) 30%,
                    hsl(178, 54%, 69%, 0.62)
                );
                border-radius: 1.25rem;

                opacity: 0;
                transform: scale(0.95);
                transition: opacity 150ms ease, transform 150ms ease;
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
</style>
