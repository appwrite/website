<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import NumberFlow from '@number-flow/svelte';
    import { inView } from 'motion';
    import { cn } from '$lib/utils/classnames';

    let featuredNumbers: Array<{ number: number; label: string; suffix?: string }> = [
        { number: 0, label: 'GitHub Stars', suffix: 'k+' },
        { number: 0, label: 'Pull Requests', suffix: 'k+' },
        { number: 0, label: 'Commits', suffix: 'k+' },
        { number: 0, label: 'Issues', suffix: 'k+' },
        { number: 0, label: 'Open Issues' },
        { number: 0, label: 'Closed Issues', suffix: 'k+' },
        { number: 0, label: 'Forks', suffix: 'k' },
        { number: 0, label: 'Contributors', suffix: 'k+' }
    ];

    const numbers = [32, 8, 15, 2.5, 625, 1.9, 4.9, 20];

    const updateNumbers = () => {
        featuredNumbers = featuredNumbers.map((feature, index) => {
            return { ...feature, number: numbers[index] };
        });
    };

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
            updateNumbers();
        });
    };
</script>

<div class="relative h-full">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-8">
                <h2
                    class="text-title text-primary before:bg-accent text-pretty pt-16 before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px"
                >
                    Building Appwrite<br /> Cloud for you
                </h2>
                <div class="space-y-8">
                    <p>
                        When we started working on our plans for Appwrite Cloud we knew we had a
                        hard task ahead of us as we we didn’t want to just be a wrapper on top of
                        AWS or Cloudflare. With no pre-built building blocks, we wanted to customize
                        every piece in the platform to create the most complete developer experience
                        we can imagine.
                    </p>
                    <p class="font-medium">
                        We wanted to create a developer experience that rethinks how an idea goes to
                        production and scale, without worries, without limits.
                    </p>
                    <p>
                        Another benefit of this approach is the ability to control the cost of
                        building with Appwrite as we reduce our vendor dependency. Making Appwrite’s
                        pricing more accessible as part of our mission.
                    </p>
                </div>
            </Cell>
            <Cell column={4} columnStart={3}
                ><p class="p-16">
                    The milestone we achieved today officially started 22 months ago when we
                    launched Appwrite private beta and enrolled users onto the platform bit by bit.
                    Since then, we have reached many milestones before taking Cloud to the next
                    step.
                </p></Cell
            >
        </Grid>
    </div>
</div>
