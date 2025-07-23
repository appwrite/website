<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import NumberFlow from '@number-flow/svelte';
    import { inView } from 'motion';
    import { classNames } from '$lib/utils/classnames';

    let featuredNumbers: Array<{ number: number; label: string; suffix?: string }> = $state([
        { number: 0, label: 'GitHub Stars', suffix: 'k+' },
        { number: 0, label: 'Pull Requests', suffix: 'k+' },
        { number: 0, label: 'Commits', suffix: 'k+' },
        { number: 0, label: 'Issues', suffix: 'k+' },
        { number: 0, label: 'Open Issues' },
        { number: 0, label: 'Closed Issues', suffix: 'k+' },
        { number: 0, label: 'Forks', suffix: 'k' },
        { number: 0, label: 'Contributors', suffix: 'k+' }
    ]);

    const numbers = [32, 8, 15, 2.5, 625, 1.9, 4.9, 20];

    const updateNumbers = () => {
        featuredNumbers = featuredNumbers.map((feature, index) => {
            return { ...feature, number: numbers[index] };
        });
    };

    let animate: boolean = $state(false);

    const useInView = (node: HTMLElement) => {
        inView(
            node,
            () => {
                animate = true;
                updateNumbers();
            },
            { amount: 0.25 }
        );
    };
</script>

<div
    class={classNames(
        'relative h-full',
        'before:absolute before:inset-x-0 before:h-[350px] before:bg-gradient-to-b before:from-[#232325]/90 before:to-transparent'
    )}
>
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-8 py-12 md:py-20">
                <h2
                    data-animate={animate}
                    class="text-title text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                >
                    Appwrite Cloud in<br /> numbers
                </h2>
            </Cell>
            <Cell column={4} columnStart={3} class="px-8 pb-8 md:py-20"
                ><p>
                    The milestone we achieved today officially started 22 months ago when we
                    launched Appwrite private beta and enrolled users onto the platform bit by bit.
                    Since then, we have reached many milestones before taking Cloud to the next
                    step.
                </p></Cell
            >
            <Cell column={4} columnStart={1} class="pb-20"
                ><div
                    use:useInView
                    class="grid grid-cols-1 place-content-between gap-y-4 md:grid-cols-2 lg:grid-cols-4"
                >
                    {#each featuredNumbers as { number, label, suffix }}
                        <div
                            class="border-gradient relative mx-2 rounded-2xl bg-[#232325]/90 p-4 before:rounded-2xl after:rounded-2xl"
                        >
                            <h3 class="text-title text-primary text-pretty">
                                <NumberFlow value={number} {suffix} />
                            </h3>
                            <p class="text-description text-secondary">{label}</p>
                        </div>
                    {/each}
                </div></Cell
            >
        </Grid>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .number-card {
        @include gradients.border-gradient;
        --p-radius: 16px;

        background-color: hsl(var(--web-color-card));
        border-radius: var(--p-radius);
        --m-border-radius: var(--p-radius);
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
    }
</style>
