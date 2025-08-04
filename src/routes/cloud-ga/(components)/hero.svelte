<script>
    import Numbers from './numbers.svelte';
    import Cell from './grid-system/cell.svelte';
    import Grid from './grid-system/grid.svelte';
    import { classNames } from '$lib/utils/classnames';

    const title = 'Appwrite Cloud is Generally Available'.split(' ');

    const numbers = [
        { label: 'Top 300', description: 'GitHub repos' },
        { label: '300k+', description: 'developers' },
        { label: '50+', description: 'locations' },
        { label: '300k+', description: 'projects' }
    ];
</script>

<div
    class="from-accent/8 relative -top-24 -mb-24 flex justify-center overflow-y-hidden bg-gradient-to-b to-transparent to-60% px-4 pt-24"
>
    <div class="flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={2}>
            <Cell column={3} horizontalCenter verticalCenter class="pt-12 md:pt-40">
                <div class="max-w-4xl space-y-8 p-4">
                    <h1
                        class="text-headline font-aeonik-pro text-primary max-w-4xl gap-4 text-balance"
                    >
                        Appwrite Cloud is Generally Available
                        <span class="text-accent -ml-4">_</span>
                    </h1>
                    <div class="text-description text-secondary max-w-3xl space-y-8 font-medium">
                        <p class="animate-text" style:animation-delay="600ms">
                            Appwrite Cloud was designed to make it easier to build with Appwrite
                            because we know self-hosting is not for everyone.
                        </p>
                        <p class="animate-text" style:animation-delay="700ms">
                            Today, Appwrite Cloud is powering over 300,000 projects, and we are both
                            proud and excited to announce its transition to general availability.
                        </p>
                    </div>
                </div>
            </Cell>
            {#each Array.from({ length: 5 }) as _, i}
                {@const columnStart = i + 1}
                {@const lineArray = 6}
                {@const lines = Array.from({ length: lineArray }).map((_, i) => {
                    const isPink = Math.random() > 0.5;
                    return {
                        height: isPink
                            ? Math.floor(Math.random() * 50) + 60
                            : Math.floor(Math.random() * 20) + 20,
                        color: isPink ? 'bg-accent' : 'bg-[#85DBD8]'
                    };
                })}
                {#if i !== 1 && i !== 2}
                    <Cell {columnStart} class="absolute hidden md:block">
                        <div
                            class={classNames('animate-drop absolute flex flex-col gap-8', {
                                'left-0 -ml-px': i !== 4,
                                'right-0 -mr-px': i === 4
                            })}
                        >
                            {#each lines as line}
                                <div
                                    class={classNames(' relative h-(--height) w-px', line.color)}
                                    style:--height="{line.height}px"
                                ></div>
                            {/each}
                        </div>
                    </Cell>
                {/if}
            {/each}
            <Cell column={4} class="pt-8 pb-12 md:pb-40">
                <Numbers class="" {numbers} />
            </Cell>
        </Grid>
    </div>
</div>
