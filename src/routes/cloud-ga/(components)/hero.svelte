<script>
    import Numbers from './numbers.svelte';
    import Cell from './grid-system/cell.svelte';
    import Grid from './grid-system/grid.svelte';

    const title = 'Appwrite Cloud is Generally Available'.split(' ');

    const numbers = [
        { label: 'Top 300', description: 'GitHub repos' },
        { label: '150k', description: 'developers' },
        { label: '50+', description: 'locations' },
        { label: '300k', description: 'projects' }
    ];
</script>

<div
    class="border-smooth from-accent/8 relative flex justify-center overflow-y-hidden border-b bg-gradient-to-b to-transparent to-60%"
>
    <div class="flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={1}>
            <Cell column={3} horizontalCenter verticalCenter class="py-10 md:py-20">
                <div class="max-w-4xl space-y-8 p-8">
                    <h1
                        class="text-headline font-aeonik-pro text-primary flex max-w-4xl flex-wrap gap-4 text-balance"
                    >
                        {#each title as word, i}
                            <span
                                class="animate-text inline-block"
                                style:animation-delay="{i * 100}ms"
                                >{word}{' '}
                            </span>
                        {/each}
                        <span class="text-accent animate-text -ml-4" style:animation-delay="500ms"
                            >_</span
                        >
                    </h1>
                    <div class="text-description text-secondary max-w-3xl space-y-8 font-medium">
                        <p class="animate-text" style:animation-delay="600ms">
                            Appwrite Cloud was designed to make it easier to build with Appwrite
                            because we know self-hosting is not for everyone.
                        </p>
                        <p class="animate-text" style:animation-delay="700ms">
                            Cloud is now powering over 200,000 projects, and we are both proud and
                            excited to announce its transition to general availability.
                        </p>
                    </div>
                </div>
            </Cell>
            <!-- {#each Array.from({ length: 5 }) as _, i}
                {@const columnStart = i + 1}
                {@const lineArray = Math.floor(Math.random() * 5) + 3}
                {@const lines = Array.from({ length: lineArray }).map((_, i) => {
                    return {
                        height: Math.floor(Math.random() * 40) + 30,
                        from: Math.random() > 0.5 ? 'from-accent' : 'from-mint-[#85DBD8]'
                    };
                })}
                <Cell {columnStart}>
                    <div
                        class={classNames('absolute flex flex-col gap-80', {
                            'left-0 -ml-px': i !== 4,
                            'right-0 -mr-px': i === 4
                        })}
                    >
                        {#each lines as line}
                            <div
                                class={classNames(
                                    'animate-drop h-(--height) w-px bg-gradient-to-t to-transparent',
                                    line.from
                                )}
                                style:--speed="2s"
                                style:animation-delay="{Math.random() * 2}s"
                                style:--height="{line.height}px"
                            ></div>
                        {/each}
                    </div>
                </Cell>
            {/each} -->
        </Grid>
        <Numbers {numbers} />
    </div>
</div>
